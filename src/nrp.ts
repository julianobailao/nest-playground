import * as NRP from 'node-redis-pubsub';

export default new NRP({
    port: 6379,
    scope: 'demo',
});
