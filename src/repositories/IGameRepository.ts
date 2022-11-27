import { IGameDTO } from '../entities/Game';

interface IGameRepository {
  resgister(game: IGameDTO): Promise<void>;
}

export { IGameRepository };
