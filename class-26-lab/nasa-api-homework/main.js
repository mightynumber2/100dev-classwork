fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    document.querySelector('h2').textContent = data.explanation;
    document.querySelector('iframe').src = data.url;
    document.querySelector('h3').textContent = `©${data.copyright} ${data.date}`;
  })
  .catch(err => console.log(`error: ${err}`));

