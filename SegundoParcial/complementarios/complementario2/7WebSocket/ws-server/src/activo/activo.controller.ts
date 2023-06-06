import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { ActivoService } from './activo.service';
import { CreateActivoDto } from './dto/create-activo.dto';
import { UpdateActivoDto } from './dto/update-activo.dto';

@Controller('activo')
export class ActivoController {
  constructor(private readonly activoService: ActivoService) {}

  @Post()
  create(@Body() createActivoDto: CreateActivoDto) {
    return this.activoService.create(createActivoDto);
  }

  @Get()
  findAll() {
    return this.activoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.activoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id',ParseUUIDPipe) id: string, @Body() updateActivoDto: UpdateActivoDto) {
    return this.activoService.update(id, updateActivoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.activoService.remove(id);
  }
}
