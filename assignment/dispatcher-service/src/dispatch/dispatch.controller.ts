import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { CreateDispatchDto } from './dto/create-dispatch.dto';
import { Dispatch } from './entity/dispatch.entity';
import { DispatchService } from './dispatch.service';

@Controller('customers')
export class DispatchController {
  constructor(private readonly dispatchService: DispatchService) {}

  @Post('/dispatch-locations')
  async createDispatch(
    @Body() createDispatchDto: CreateDispatchDto,
  ): Promise<Dispatch> {
    return this.dispatchService.createDispatch(createDispatchDto)
  }

  @Get('/dispatch-locations:city')
  async getDispatchByCity(@Param('city') city: string): Promise<Dispatch> {
    return this.dispatchService.getDispatchByCity(city);
  }

}
