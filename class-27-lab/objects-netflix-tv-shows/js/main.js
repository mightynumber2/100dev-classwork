//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixShow {
  constructor(numOfChars, setting, genre, story) {
  this.numOfChars = numOfChars
  this.setting = setting
  this.genre = genre
  this.story = story
  }
  
  play() {
    console.log('Playing...')
  }
  stop() {
    console.log('Stopping...')
  }
  showAddToWatchList() {
    console.log('Added to watchlist')
  }
}

const theExcorcists = new NetflixShow(4, 'haunted house', 'horror', 'exorcists vs haunted house');

console.log(theExcorcists);

NetflixShow.prototype.holyWater = true;
