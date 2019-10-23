const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Déménagement",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
    weigth = 0
    nbr_aller_retour = 0
    for (let i = 1; i < parseInt(input[0 + 1]); i++) {
      if ( (weigth + parseInt(input[i])) > 100 ) {
        weigth = 0
        nbr_aller_retour += 1
      }
      
      weigth = weigth + parseInt(input[i])
    }
    return nbr_aller_retour
    // AND HERE
  },
  verify: function (dataset, output) {
    if (dataset.output !== output) {
      throw new Error(`${bright}Got ${output} but expected ${dataset.output}${reset}`)
    } else {
      return true
    }
  }
}