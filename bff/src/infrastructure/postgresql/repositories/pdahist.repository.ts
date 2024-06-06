// Libs importing
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { AbstractRepository, IRepository } from './abstract.repository';
import { PDAHistEntity } from '../entities';

export const I_PDA_HIST_REPOSITORY = 'I_PDA_HIST_REPOSITORY';

export interface IPDAHistRepository extends IRepository<PDAHistEntity> {
  // getUsers: () => Promise<PDAHistEntity[]>;
}

@Injectable()
export class PDAHistRepository
  extends AbstractRepository<PDAHistEntity>
  implements IPDAHistRepository
{
  constructor(
    @InjectRepository(PDAHistEntity)
    repository: Repository<PDAHistEntity>,
  ) {
    super(repository);
  }
}
