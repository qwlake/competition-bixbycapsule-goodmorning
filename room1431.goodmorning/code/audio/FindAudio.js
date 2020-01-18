var audioData = require('./AudioList.js')

module.exports.function = function findAudio() {
    //const keysToSearchOn = ['title', 'artist', 'subtitle', 'albumName']
    
    let audioFound = []
    let selectId = Math.floor(Math.random()*3)

    audioFound = audioData.audioItems[selectId]
    //audioFound = audioData.audioItems
    
    return audioFound
}