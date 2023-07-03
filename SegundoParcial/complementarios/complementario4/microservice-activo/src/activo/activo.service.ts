import { ActivoDTO } from './dto/create-activo.dto';
import { HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ACTIVO } from 'src/common/models/models';
import { IActivo } from 'src/common/interfaces/activo.interface';

@Injectable()
export class ActivoService {
  constructor(@InjectModel(ACTIVO.name) private readonly model: Model<IActivo>) {}

  
  async create(activoDTO: ActivoDTO): Promise<IActivo> {
    const newActivo = new this.model(activoDTO);
    return await newActivo.save();
  }

  async findAll(): Promise<IActivo[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<IActivo> {
    return await this.model.findById(id);
  }

  async update(id: string, activoDTO: ActivoDTO): Promise<IActivo> {
    return await this.model.findByIdAndUpdate(id, activoDTO , { new: true });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}
