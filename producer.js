import {kafka} from './config.js';
const producer = kafka.producer()

async function produceMsg(label) {
   console.log("Connecting from Producer")
  await producer.connect()
   let topic = 'test-topic'


  setInterval(async () => {
    const message = `${label} - ${new Date().toISOString()}`;

    await producer.send({
      topic,
      messages: [{ key: null, value: message }],
    });
    console.log(`[${label}] Sent: ${message}`);
  }, 3000);
   
   //console.log("Disconnecting from Producer")
   //await producer.disconnect()
}

produceMsg('Cluster-A');
produceMsg('Cluster-B');