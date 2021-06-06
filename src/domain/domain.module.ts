import { TodoUseCase } from './use-cases/todo.case';
import {
  Module,
  DynamicModule,
  Provider,
  ForwardReference,
  Type,
} from '@nestjs/common';

export interface Config {
  imports?: Array<
    Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference
  >;
  providers?: Provider[];
}

@Module({
  providers: [TodoUseCase],
  exports: [TodoUseCase],
})
export class DomainModule {
  static forRoot(config: Config): DynamicModule {
    return {
      global: true,
      module: DomainModule,
      imports: config.imports,
      providers: config.providers,
    };
  }
}
