import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ActivoMSG } from './../common/constants';
import { Observable } from 'rxjs';
import { ActivoDTO } from './dto/create-activo.dto';
import { ClientProxySuperFlights } from './../common/proxy/client-proxy';
import { IActivo } from 'src/common/interfaces/activo.interface';


@ApiTags('activos')
@Controller('api/v2/activo')
export class ActivoController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxyActivo = this.clientProxy.clientProxyActivos();

  @Post()
  create(@Body() activoDTO: ActivoDTO): Observable<IActivo> {
    return this._clientProxyActivo.send(ActivoMSG.CREATE, activoDTO);
  }

  @Get()
  findAll(): Observable<IActivo[]> {
    return this._clientProxyActivo.send(ActivoMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IActivo> {
    return this._clientProxyActivo.send(ActivoMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() activoDTO: ActivoDTO): Observable<IActivo> {
    return this._clientProxyActivo.send(ActivoMSG.UPDATE, { id, activoDTO });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyActivo.send(ActivoMSG.DELETE, id);
  }
}
