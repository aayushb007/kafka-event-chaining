import {kafka} from './config.js';
const consumer = kafka.consumer({ groupId: 'test-group' })
const producer = kafka.producer()

async function consumeMessage() {
    let topic = 'test-topic';
    await consumer.connect();
    await consumer.subscribe({ topic, fromBeginning: true })
    console.log("Consumer Connecting")
    await consumer.run({
        eachMessage: async ({ topic, partition, message })=>{
         console.log({
            topic,
            value: message.value.toString()
         })
           await producer.connect()
           await producer.send({
        topic:'test-topic-b',
        messages: [{ value: message.value.toString()}],
      })


      console.log("Published message Sended to topic-b")
        },

       
    })
}


consumeMessage()