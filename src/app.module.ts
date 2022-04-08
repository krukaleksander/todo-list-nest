import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddModule } from './add/add.module';

@Module({
  imports: [AddModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
