import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dispatch } from './entity/dispatch.entity';
import { CreateDispatchDto } from './dto/create-dispatch.dto';

@Injectable()
export class DispatchService {
  constructor(
    @InjectRepository(Dispatch)
    private readonly dispatchRepository: Repository<Dispatch>,
  ) {}

  async createDispatch(
    createDispatcherDto: CreateDispatchDto,
  ): Promise<Dispatch> {
    const dispatch = this.dispatchRepository.create(createDispatcherDto);
    return this.dispatchRepository.save(dispatch);
  }

  async getDispatchByCity(city: string): Promise<Dispatch> {
    const dispatch = await this.dispatchRepository.findOne({ where: { city } });
    if (!dispatch) {
      throw new NotFoundException(`Dispatch from City ${city} not available`);
    }
    return dispatch;
  }

  
}
