import { randomUUID } from 'crypto';

class Game {
  id?: string;
  name!: string;
  designer!: string;
  genre!: string;
  platform!: string;
  developer!: string;
  releaseData!: string;
  mode!: string;
  created!: Date;
  updated!: Date;

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
    }
  }
}

export { Game };
