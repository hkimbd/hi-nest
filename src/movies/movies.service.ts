import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity'; 

@Injectable()
export class MoviesService {
    private movies: Movie[] = []; 

    getAll(): Movie[] {
        return this.movies; 
        // this in real db will be the query to db
    }

    getOne(id:number): Movie {
        const movie = this.movies.find(movie => movie.id === id); 
        if (!movie) {
            throw new NotFoundException(`Movie with ID ${id} not found.`); 
        }
        return movie; 
        // +id converts string into number
    }

    deleteOne(id:number) {
        this.getOne(id)
        this.movies = this.movies.filter(movie => movie.id !== id); 
    }
    
    create(movieData: CreateMovieDto){
        this.movies.push({
            id: this.movies.length + 1, 
            ...movieData, 
        })
    }

    update(id:number, updateData: UpdateMovieDto){
        const movie = this.getOne(id); 
        this.deleteOne(id); 
        this.movies.push({...movie, ...updateData}); 
        // not the best but its fake db 
    }
}
