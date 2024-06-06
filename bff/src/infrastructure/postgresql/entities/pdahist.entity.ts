// Libs importing
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

@Entity({ name: 'mes_pda_his' })
export class PDAHistEntity extends AbstractEntity<PDAHistEntity> {
  @PrimaryGeneratedColumn('identity', { name: 'pda_his_id' })
  pdaHisId: number;

  @Column({ type: 'varchar', name: 'operation_type' })
  operationType: string;

  @Column({ type: 'numeric', name: 'cust_ord_dtl_id' })
  custOrdDtlId: number;

  @Column({
    type: 'timestamp',
    name: 'cre_dt',
    default: () => 'CURRENT_TIMESTAMP',
  })
  creDt: Date;

  @Column({ type: 'varchar', name: 'quality' })
  quality: string;

  @Column({ type: 'numeric', name: 'qty', nullable: true, default: 0 })
  qty: number;

  @Column({ type: 'varchar', name: 'cre_usr_id' })
  creUsrId: string;

  @Column({ type: 'numeric', name: 'line_id', default: 0 })
  lineId: number;

  @Column({ type: 'varchar', name: 'line_nm', nullable: true })
  lineNm: string;

  @Column({
    type: 'varchar',
    name: 'packing_id_sequence',
    length: 20,
    default: '',
  })
  packingIdSeq: string;
}
