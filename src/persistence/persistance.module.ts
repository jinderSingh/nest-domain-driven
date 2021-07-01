import { TodoPersistanceModule } from './adapters/todo/todo-persistance.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('DB_URI'),
        user: configService.get('DB_USER'),
        pass: configService.get('DB_PWD'),
      }),
      inject: [ConfigService],
    }),
    TodoPersistanceModule,
  ],
  exports: [TodoPersistanceModule],
})
export class PersistanceModule {}
