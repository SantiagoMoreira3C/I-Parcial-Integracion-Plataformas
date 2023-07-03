import { ActivoService } from './activo.service';
import { ActivoDTO } from './dto/create-activo.dto';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ActivoMsg } from 'src/common/constants';

@Controller()
export class ActivoController {
  constructor(private readonly activoService: ActivoService) {}

  @MessagePattern(ActivoMsg.CREATE)
  create(@Payload() activoDTO: ActivoDTO) {
    return this.activoService.create(activoDTO);
  }


  @MessagePattern(ActivoMsg.FIND_ALL)
  findAll() {
    return this.activoService.findAll();
  }

  @MessagePattern(ActivoMsg.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.activoService.findOne(id);
  }

  @MessagePattern(ActivoMsg.UPDATE)
  update(@Payload() payload: any) {
    return this.activoService.update(payload.id, payload.activoDTO);
  }

  @MessagePattern(ActivoMsg.DELETE)
  delete(@Payload() id: string) {
    return this.activoService.delete(id);
  }
  
}
