import { PartialType } from '@nestjs/mapped-types'; 
import { IsString, IsNumber, IsOptional } from 'class-validator'; 
import { CreateMovieDto } from './create-movie.dto';


export class UpdateMovieDto extends PartialType(CreateMovieDto){
}