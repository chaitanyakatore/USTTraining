import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity('menus') // Name of the collection in MongoDB
export class Menu {
  @ObjectIdColumn() // This is for MongoDB ObjectId
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  available: boolean;
}
