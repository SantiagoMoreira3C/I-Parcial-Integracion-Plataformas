import { Module } from '@nestjs/common';
import { MensajesWsService } from './mensajes-ws.service';
import { MensajesWsGateway } from './mensajes-ws.gateway';
import { ActivoModule } from '../activo/activo.module';
//  'src/estudiante/estudiante.module';

@Module({
  providers: [MensajesWsGateway, MensajesWsService],
  imports:[ActivoModule]
})
export class MensajesWsModule {}
