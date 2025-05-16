# Kafka Messaging Application

This project demonstrates a simple Kafka messaging system using Node.js, featuring multiple producers and consumers interacting across different topics.

---

## Overview

The application consists of four main components:

- **Admin**: Creates Kafka topics.
- **Producer**: Sends messages to `test-topic`.
- **Consumer**: Consumes messages from `test-topic` and forwards them to `test-topic-b`.
- **ConsumerB**: Consumes messages from `test-topic-b`.

---

## Architecture
┌───────────┐
                   │           │
┌─────────┐        │ test-topic│        ┌────────┐         ┌─────────────┐
│ Producer│───────▶│           │───────▶│Consumer│────────▶│ test-topic-b│───────▶┌──────────┐
└─────────┘        │           │        └────────┘         └─────────────┘        │ConsumerB │
                   └───────────┘                                                  └──────────┘

---

## Prerequisites

- Node.js (v14 or later)
- Kafka cluster running locally or remotely
- npm or yarn

---

## Installation

1. **Clone the repository**



The producer will send messages from two clusters (`Cluster-A` and `Cluster-B`) every 3 seconds.

---

## Code Explanation

- **admin.js**: Connects to Kafka, creates the required topics, then disconnects.
- **producer.js**: Sends time-stamped messages labeled 'Cluster-A' and 'Cluster-B' to `test-topic` at regular intervals.
- **consumer.js**: Consumes messages from `test-topic`, logs them, and forwards them to `test-topic-b`.
- **consumerB.js**: Consumes messages from `test-topic-b` and logs them.

---

## Message Flow

1. The producer sends time-stamped messages to `test-topic`.
2. The consumer reads these messages from `test-topic`.
3. The consumer forwards these messages to `test-topic-b`.
4. ConsumerB reads these forwarded messages from `test-topic-b`.

---

## Customization

- **Add more producers:** Uncomment the `produceMsg('Cluster-c')` line in `producer.js`.
- **Change message frequency:** Modify the interval in `setInterval` (currently 3000ms).
- **Modify topic configurations:** Update the settings in `admin.js`.

---

## Troubleshooting

If you encounter connection issues:

- Ensure Kafka broker(s) are running.
- Check that the broker addresses in `config.js` are correct.
- Verify network connectivity to Kafka brokers.
- Check Kafka logs for potential errors.

---

## Additional Resources

- [Kafka Documentation](https://kafka.apache.org/documentation/)
- [KafkaJS Documentation](https://kafka.js.org/docs/)

---

## Kafka Concepts Reference

- **Producer**: Publishes data (messages) to Kafka topics.
- **Consumer**: Subscribes to Kafka topics and reads messages.
- **Broker**: Kafka server that manages message storage and handles read/write requests.
- **Topic**: Logical channel that organizes messages.
- **Partition**: Sub-division of a topic enabling parallel processing.

---

> For more on Kafka architecture and terminology, refer to the official documentation or community guides.
