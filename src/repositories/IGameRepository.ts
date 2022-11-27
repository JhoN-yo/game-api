import { IGameDTO } from '../entities/Game';

interface IGameRepository {
  [x: string]: any;
  resgister(game: IGameDTO): Promise<void>;
}

export { IGameRepository };
