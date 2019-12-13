var playlist = {artistName: 'songTitle'};

function updatePlaylist(playlist, artistName, songTitle)
{
  playlist['Phil Ochs'] = 'song1';
  return playlist
}

function removeFromPlaylist(playlist, artistName)
{
  delete artistName.songTitle;
}