const Producer = require('sqs-producer');

    const sqsProducer = Producer.create({
        queueUrl: 'http://localhost:9324/queue/default',
        region: 'us-east-1',
        accessKeyId: 'key',
        secretAccessKey: 'secret'
    });
let Publisher = {
    getQueueSize: () => {
        sqsProducer.queueSize(function (err, size) {
            if (err) console.log(err);

            console.log('There are', size, 'messages on the queue.');
        });
    },
    sendMessage: (body) => {
        sqsProducer.send([{
            body: body
        }], function (err) {
            if (err) console.log(err);
        });
    },
};
module.exports = Publisher;