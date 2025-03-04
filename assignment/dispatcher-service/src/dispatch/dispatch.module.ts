import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dispatch } from './entity/dispatch.entity';
import { DiscoveryService } from '@nestjs/core';
import { DispatchController } from './dispatch.controller';

@Module({
  providers: [DiscoveryService],
  controllers: [DispatchController],
  imports: [TypeOrmModule.forFeature([Dispatch])],
})
export class CustomersModule {}
