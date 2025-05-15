import {kafka} from './config.js';
const consumer = kafka.consumer({ groupId: 'test-group-b' })


async function consumeMessage() {
    let topic = 'test-topic-b';
    await consumer.connect();
    await consumer.subscribe({ topic, fromBeginning: true })
    console.log("Consumer Connecting")
    await consumer.run({
        eachMessage: async ({ topic, partition, message })=>{
         console.log({
            topic,
            partition,
            value: message.value.toString()
         })
        },

       
    })
}


consumeMessage()