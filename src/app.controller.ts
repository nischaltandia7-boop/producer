import { Body, Controller, Get, Inject, OnModuleInit, Post } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { privateDecrypt } from 'crypto';
import { ProducerService } from './app.service';


@Controller('producer')
export class AppController {
  constructor(private readonly producerService: ProducerService) {}
  // constructor(
  //   @Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka,
  // ) { }

  // async onModuleInit() {
  //   await this.kafkaClient.connect();
  // }
  //  @Get('send')
  //  async response(){
  //   return {success:true, message:"hii i m the responses"}
  //  }


  @Post('send')
  async createMessage(@Body() body: any){
    const result = this.producerService.sendMessage();
    return {success:true, message:result}
  }
  
}