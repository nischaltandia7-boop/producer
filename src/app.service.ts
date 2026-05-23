import { Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';

@Injectable()
export class ProducerService implements OnModuleInit {
  constructor(
    @Inject('KAFKA_SERVICE') private readonly client: ClientKafka,
  ) {}

  async onModuleInit() {
    await this.client.connect();
  }

  sendMessage() {
    return this.client.emit('test', {
      value: 'hello from producer',
    });
  }
}