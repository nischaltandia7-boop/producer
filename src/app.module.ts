import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { ProducerService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'producer-client',
           // brokers: ['kafka.kafka.svc.cluster.local:9092'],
           brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'producer-group',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [ProducerService],
})
export class AppModule {}