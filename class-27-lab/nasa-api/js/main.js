//Example fetch using pokemonapi.co
// https://api.nasa.gov/planetary/apod?api_key=qEwRv5S5rPVjlCYjHSwz7ZQ6OA8K8U9xFYNgD6VD?

const video = document.querySelector('iframe')
const img = document.querySelector('img')

document.querySelector('button').onclick = function() {
  const date = document.querySelector('input').value
  const url = 'https://api.nasa.gov/planetary/apod?api_key=qEwRv5S5rPVjlCYjHSwz7ZQ6OA8K8U9xFYNgD6VD&date='+ date;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if (data.media_type === 'video') {
        video.src = data.url
        video.style.display = 'block'
        img.style.display = 'none'
      } else {
        img.src = data.hdurl
        img.style.display = 'block'
        video.style.display = 'none'
      }
      document.querySelector('h3').textContent = data.explanation;
    })
    .catch(err => console.log(`err ${err}`))

}