import nrp from "./nrp";

class Emitter {
    private websocketServer:any;

    set server(server) {
        this.websocketServer = server;
    }

    get server() {
        return this.websocketServer;
    }

    emit(channel: string, payload: any) {
        this.websocketServer.emit(channel, payload);
    }

    emitToRedis(channel: string, payload: any) {
        nrp.emit(channel, payload);
    }
}

export default new Emitter();