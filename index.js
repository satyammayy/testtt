const { create, Client } = require('@open-wa/wa-automate');

create().then(client => start(client));

function start(client) {
    client.onMessage(message => {
        // Respond to incoming messages
        if (message.body.toLowerCase() === 'hi') {
            client.sendText(message.from, 'Hello!');
        }
    });
}
