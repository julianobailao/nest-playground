import nrp from './nrp';

export function SubscribeRedisMessage(channel: string) {    
    return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor): any => {
        nrp.on(channel, descriptor.value.bind(target));
    }
};