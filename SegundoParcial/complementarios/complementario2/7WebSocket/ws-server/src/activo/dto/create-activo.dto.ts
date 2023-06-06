import { IsArray, IsIn, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateActivoDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    activoti:string;

}
