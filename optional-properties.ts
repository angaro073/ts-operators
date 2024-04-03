interface User {
  name: string;
  genre?: string;
}

function showUser({name, genre}: User): void {
  let view: string = `${name}`;

  if (genre) view += ` (${genre})`;

  console.log(view);
}
showUser({name: 'Mark'});
showUser({name: 'Mark', genre: 'm'});