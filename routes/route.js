'use strict'

const Routes = [
    {
        method: 'GET',
        path: '/{path*}',
        handler: (request, reply) => {
            return reply.file('login.html');
        }
    }
]

module.exports = Routes;