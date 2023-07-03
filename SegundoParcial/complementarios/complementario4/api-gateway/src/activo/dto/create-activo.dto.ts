import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ActivoDTO {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    activoti:string;

}
