import { Injectable } from '@nestjs/common';
import {Socket} from 'socket.io'
import { Activo } from '../activo/entities/activo.entity'
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ActivoService } from 'src/activo/activo.service';

interface ConnectedClients {
    [id:string]: {
       socket: Socket,
       activo: Activo
    }
}

@Injectable()
export class MensajesWsService {
    private connectedClients: ConnectedClients={}

    constructor( @InjectRepository(Activo)
     private readonly activoRepository: Repository<Activo>,
     private readonly activoService: ActivoService
      ){}

    async registerClient(client:Socket, name: string){
        console.log(this.activoService.prueba());
        const activo =await  this.activoRepository.findOneBy({ activoti: name });
        if (!activo) throw new Error('Activo no encontrado');
        if (!activo.estado) throw new Error('No activo');

        
        this.connectedClients[client.id]= {socket:client, activo: activo};
    }
    removeClient(clientId:string){
        delete this.connectedClients[clientId];
    }
    getConnectedClients():string[]{
        // return Object.keys(this.connectedClients).length;
        // console.log(this.connectedClients)
         return Object.keys(this.connectedClients);
    }
    getStudentFullName(id:string){
        return this.connectedClients[id].activo.activoti;
    }
}
