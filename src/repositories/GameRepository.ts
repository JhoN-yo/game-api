import prismaClient from '../../prisma/prismaClient';
import { IGameDTO } from '../entities/Game';
import { IGameRepository } from './IGameRepository';

class GameRepository implements IGameRepository {
  async resgister({
    designer,
    developer,
    genre,
    mode,
    name,
    platform,
    releaseData
  }: IGameDTO): Promise<void> {
    await prismaClient.game.create({
      data: {
        designer,
        developer,
        genre,
        mode,
        name,
        platform,
        releaseData
      }
    });
  }
}

export { GameRepository };
