// Libs importing
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

@Entity({ name: 'user' })
export class UserEntity extends AbstractEntity<UserEntity> {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', name: 'email' })
  email: string;

  @Column({ type: 'varchar', name: 'username' })
  userName: string;

  @Column({ type: 'timestamp', name: 'dob', default: () => "CURRENT_TIMESTAMP" })
  dob: Date;

  @Column({ type: 'numeric', name: 'age', nullable: true, default: 0 })
  age: number;

}
