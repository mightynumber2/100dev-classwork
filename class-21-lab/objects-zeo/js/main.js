//Create a stopwatch object that has four properties and three methods
const stopwatch = {
  color: 'black',
  shape: 'round',
  minutes: 3,
  seconds: 59,
  startwatch: () => console.log('Start the timer'),
  stopwatch: () => console.log('Stop the timer'),
  mode: () => console.log('Set the watch time')
}
console.log(stopwatch.mode());