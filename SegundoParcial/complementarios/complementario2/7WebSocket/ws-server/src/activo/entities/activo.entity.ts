import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Activo {
    @PrimaryGeneratedColumn('uuid')
    id:string;
    
    @Column('varchar',{unique:true})
    activoti:string;

 
    @Column('boolean', {default:true})
    estado:boolean;
}
