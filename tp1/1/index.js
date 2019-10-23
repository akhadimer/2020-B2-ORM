const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Marathon",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
    place = input[0]

    for (let i = 1; i < input.length; i++) {
      depasse = input[i].split(' ')      
      place = place + parseInt(depasse[0]) - parseInt(depasse[1])
    }
    
    if (place <= 100) {
      return 1000
    }
    else if (place <= 10000 && place > 100) {
      return 100
    }
    else if (place > 1000) {
      return 'KO'
    }
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