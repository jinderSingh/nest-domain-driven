import { TodoPersistanceAdapter } from './adapters/todo.adapter';
import { TodoAdapter } from '../domain/adapters/persistance/todo.adapter';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

const providers = [
  { provide: TodoAdapter.INJECTION_KEY, useClass: TodoPersistanceAdapter },
];

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
  ],
  providers,
  exports: [...providers],
})
export class PersistanceModule {}
