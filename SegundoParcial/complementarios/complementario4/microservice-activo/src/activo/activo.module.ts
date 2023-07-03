import { Module } from '@nestjs/common';
import { ActivoService } from './activo.service';
import {ActivoSchema } from './schema/activo.schema';
import {ACTIVO } from 'src/common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { ActivoController } from './activo.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: ACTIVO.name,
        useFactory: () => ActivoSchema,
      },
    ]),
  ],
  controllers: [ActivoController],
  providers: [ActivoService]
})
export class ActivoModule {}
