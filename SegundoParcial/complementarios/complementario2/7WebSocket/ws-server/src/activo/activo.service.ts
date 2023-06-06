import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateActivoDto } from './dto/create-activo.dto';
import { UpdateActivoDto } from './dto/update-activo.dto';
import { Activo } from './entities/activo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class ActivoService {
  private readonly logger = new Logger('ActivoService');

  constructor( 
    @InjectRepository(Activo) 
    private readonly activoRepository: Repository<Activo>,

    ){}

  
  async create(createActivoDto: CreateActivoDto) {
    try {
      const activo =  this.activoRepository.create(createActivoDto);
      await this.activoRepository.save(activo);
      return activo;
    } catch (error) {
      console.log(error)
      if (error.code==='23505')
        throw new BadRequestException(error.detail)
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado')
    }
    
  }

  findAll() {
    return this.activoRepository.find({});  
  }

  async findOne(id: string) {
    const activo= await  this.activoRepository.findOneBy ({ id });
    if (!activo)
      throw new NotFoundException(`activo ${id} no encontrado`);
    return activo;

  }

  async update(id: string, updateActivoDto: UpdateActivoDto) {
    const activo = await this.activoRepository.preload({
      id: id,
      ...updateActivoDto
    });
    if (!activo) throw new NotFoundException(`Activo tecnológico ${id} no encontrado`)

    try {
      await  this.activoRepository.save(activo)
      return activo;
      
    } catch (error) {
      console.log(error)
    }

  }

  async remove(id: string) {
    const activo = await this.findOne(id);
    await this.activoRepository.remove(activo);

  }
  prueba():String[]{
    return ['uno','dos','tres'];
  }
}
