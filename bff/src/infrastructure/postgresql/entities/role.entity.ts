// Libs importing
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

@Entity({ name: 'mes_role' })
export class RoleEntity extends AbstractEntity<RoleEntity> {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar', name: 'rolename' })
  roleName: string;

  @Column({
    type: 'varchar',
    name: 'color',
    nullable: true,
    default: '#ffffff',
  })
  color: string;

  @Column({
    type: 'varchar',
    name: 'activatestatus',
    nullable: true,
    default: '',
  })
  activateStatus: string;
}
