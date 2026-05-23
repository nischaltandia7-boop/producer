import { Body, Controller, Get, Inject, OnModuleInit, Post } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Controller('producer')
export class AppController implements OnModuleInit {
  constructor(
    @Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka,
  ) { }

  async onModuleInit() {
    await this.kafkaClient.connect();
  }


  @Post('send')
  async createMessage(@Body() body: any){
    try {
      this.kafkaClient.emit('test',body)
      console.log("msg sent")
      console.log("ci cd pipeline is done now")
    } catch (error) {
      
    }
    return {success:true, message: body ,}
  }
}