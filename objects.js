var playlist = {artistName: 'songTitle'};

function updatePlaylist(playlist, artistName, songTitle)
{
  artistName.songTitle = 'Phil Ochs';
  return playlist
}

function removeFromPlaylist(playlist, artistName)
{
  delete artistName.songTitle;
}