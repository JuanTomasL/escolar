import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity('ciudades')
export class Ciudad {
    @PrimaryGeneratedColumn()
    private idCiudad : number;

    @Column()
    private nombre : string;

}
