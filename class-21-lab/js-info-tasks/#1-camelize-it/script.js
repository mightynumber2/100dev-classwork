///////////////////////////////////////
// Translate border-left-width to borderLeftWidth

const camelize = str => {
  return str
            .split('-')
            .map((word, index) => index !== 0 ? word[0].  toUpperCase() + word.slice(1) : word)
            .join('');
}
console.log(camelize("background-color"));