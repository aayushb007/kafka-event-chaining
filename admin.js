import {kafka} from './config.js';
async function init() { 
  const admin = kafka.admin();
  console.log("Admin connecting...");
  await admin.connect();
  console.log("Adming Connection Success...");

  console.log("Creating Topic [test-topic]");
  await admin.createTopics({
    topics: [
      {
        topic: "test-topic",
        numPartitions: 2,
        replicationFactor: 1
      },
      {
        topic: "test-topic-b",
        numPartitions: 2,
        replicationFactor: 1
      },
    ],
  });
  console.log("Topic Created Success [test-topic][test-topic-b]");
  console.log("Disconnecting Admin..");
  await admin.disconnect();
}

init();