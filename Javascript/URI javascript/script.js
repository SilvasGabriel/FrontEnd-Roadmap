var input = require('fs').readFileSync('stdin', 'utf8')

var lines = input.split('\n');

let y = 0
let z = 0

for(let i=0 ; i < 6 ; i++){   
    let numbers = parseFloat(lines.shift())

    if(numbers>0){
        y=y+1
        z=z+numbers
    }
}
    let media = z/y

console.log( y+' valores positivos')
console.log(media.toFixed(1))