import { Module } from '@nestjs/common';
import { CustomersModule } from './dispatch/dispatch.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dispatch } from './dispatch/entity/dispatch.entity';

@Module({
  imports: [
    CustomersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOSTNAME || 'localhost',
      port: 3306,
      username: 'ama',
      password: '123456',
      database: 'cosmos',
      entities: [Dispatch],
      synchronize: true, //only on dev
    }),
  ],
})
export class AppModule {}
