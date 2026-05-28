import { Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';

@Injectable()
export class ProducerService implements OnModuleInit {
  // constructor(
  //   @Inject('KAFKA_SERVICE') private readonly client: ClientKafka,
  // ) {}

  onModuleInit() {
    return "massages sent"
  }

  sendMessage() {
    return "message sent"
  }
}