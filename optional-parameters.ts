function showSong(songAuthor: string, songName: string, songAlbum?: string): void {
  let view: string = `${songAuthor} - ${songName}`;

  if (typeof songAlbum !== 'undefined') {
    view += ` (${songAlbum})`;
  }
  console.log(view);
}
showSong("The Weeknd", "Starboy", "Starboy");
showSong("The Weeknd", "Over Now");