import { Entity, Column} from 'typeorm';

@Entity()
export class Users {
  @Column({primary:true, generated:'increment'})
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  email: string;
}
