let lucky: string | null = 'YOU HAVE A LUCKY SHIELD';

function randNumber(max: number): number {
  return Math.floor(Math.random() * max);
}

function spinRoulette(capacity: number, numBullets: number): void {
  let bullets: number[] = [];
  for (let index = 0; index < numBullets; index++) {
    let num: number = randNumber(capacity);
    if (bullets.indexOf(num) < 0) bullets.push(num);
    else index--;
  }

  let attempt: string | null = bullets.indexOf(randNumber(capacity)) < 0 ? '+100p':'';

  console.log(lucky ?? (attempt || 'You lose :('));
}

spinRoulette(10, 10);
lucky = null;
spinRoulette(10, 0);
spinRoulette(10, 10);