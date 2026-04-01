import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth.module';
import { PermissionsModule } from './permissions.module';

@Module({
  imports: [AuthModule, PermissionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
