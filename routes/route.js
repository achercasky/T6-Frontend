'use strict'

const Routes = [
    {
        method: 'GET',
        path: '/{path*}',
        handler: (request, reply) => {
            return reply.file('index.html');
        }
    }
]

module.exports = Routes;