//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

/* fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
  .then(res => res.json())
  .then(data => {
    console.log(data.drinks)
    document.querySelector('button').onclick = function() {
        data.drinks.find(drink => { 
          if (document.querySelector('input').value === drink.strDrink) {  
          document.querySelector('h2').textContent = drink.strDrink;
          document.querySelector('img').src = drink.strDrinkThumb;
          document.querySelector('h3').textContent = drink.strInstructions;
          }
        })
      }
  })
  .catch(err => console.log(`error ${err}`)); */
  
document.querySelector('button').onclick = function() {
  const drink = document.querySelector('input').value;

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json())
    .then(data => {
      console.log(data.drinks);
      data.drinks.forEach((drink, i) => {
        setTimeout(() => {
        document.querySelector('h2').textContent = drink.strDrink;
        document.querySelector('img').src = drink.strDrinkThumb;
        document.querySelector('h3').textContent = drink.strInstructions;
        }, i * 3000);
      })
    })
    .catch(err => console.log(`error: ${err}`));
};
