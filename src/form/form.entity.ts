import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Form {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nom: string

    @Column()
    email: string

    @Column()
    message: string
}