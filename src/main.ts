import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'service-b',
        brokers: ['kafka.kafka.svc.cluster.local:9092'],
      },

      consumer: {
        groupId: 'service-b-group',
      },
    },
  });

  await app.startAllMicroservices();

  await app.listen(process.env.PORT || 3000, '0.0.0.0');

  console.log(`HTTP server running on port ${process.env.PORT || 3000}`);
  console.log('Kafka consumer is listening...');
}

bootstrap();