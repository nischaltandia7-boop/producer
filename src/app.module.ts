import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { ProducerService } from './app.service';
import { ProducerModule } from './producer/producer.module';

@Module({
  imports: [
        ProducerModule
  ],
  controllers: [AppController],
  providers: [ProducerService],
})
export class AppModule {}