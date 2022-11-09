//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase().split(' ').join('-')
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').textContent = data.name;
        
        data.classes.forEach(obj => {
            const classList = document.createElement('li')
            
            classList.textContent = obj.name
            document.querySelector('#classes').appendChild(classList)
        })

        data.subclasses.forEach(obj => {
            const subclassList = document.createElement('li')

            subclassList.textContent = obj.name
            document.querySelector('#subclasses').appendChild(subclassList)
        }) 
            
      })
      .catch(err => {
          console.log(`error - ${err}`)
      });
}

