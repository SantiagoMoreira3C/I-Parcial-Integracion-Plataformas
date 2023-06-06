import { Module } from '@nestjs/common';
import { ActivoService } from './activo.service';
import { ActivoController } from './activo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Activo } from './entities/activo.entity';



@Module({
  controllers: [ActivoController],
  providers: [ActivoService],
  imports:[ TypeOrmModule.forFeature([
    Activo
  ]) ],
  exports:[ ActivoService, TypeOrmModule ]
})
export class ActivoModule {}
