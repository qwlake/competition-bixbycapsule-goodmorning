module.exports.function = function buildAudioInfo(audioList) {
  var audioInfo = {};

  audioInfo.audioItem = audioList.map(function (audioItem) {
    let audioItemStructure = { //required properties of audioItem
      id: audioItem.id,
      stream: audioItem.stream,
      title: audioItem.title,
      artist:audioItem.artist,
      albumArtUrl: audioItem.albumArtUrl
    }
    // optional properties of audioItem
    if (audioItem.subtitle) {
      audioItemStructure.subtitle = audioItem.subtitle
    }
    if (audioItem.albumName) {
      audioItemStructure.albumName = audioItem.albumName
    }              
    if (audioItem.duration) {
      audioItemStructure.duration = audioItem.duration
    }
    return audioItemStructure
  });

  audioInfo.category = 'RADIO';
  audioInfo.displayName = 'Sleeping ASMR';
  audioInfo.repeatMode = 'ALL';
  audioInfo.doNotWaitForTTS = false;

  return audioInfo;
}

