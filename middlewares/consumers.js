const { Consumer } = require('sqs-consumer');
const AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-east-1',
    accessKeyId: 'key',
    secretAccessKey: 'secret'
});

const consumer = Consumer.create({
    queueUrl: 'http://localhost:9324/queue/default',
    handleMessage: async (message) => {
        console.log(message)
    },
    sqs: new AWS.SQS()
});

consumer.on('error', (err) => {
    console.error(err.message);
});

consumer.on('processing_error', (err) => {
    console.error(err.message);
});

consumer.on('timeout_error', (err) => {
    console.error(err.message);
});



module.exports = consumer;
