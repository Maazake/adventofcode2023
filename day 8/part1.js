const fs = require('fs')

const input = fs.readFileSync(__dirname + '/input.txt', { encoding: 'utf-8' }).split('\r\n')

const instructionsList = input[0].trim().split('')

let currentLocation = 'AAA'
let instructions = 0
let data = {}
let steps = 0

input.splice(2).map(nodes => {
	const [node, left, right] = nodes.match(/\w{3}/g)
	data[node] = { left, right }
})

while (currentLocation !== 'ZZZ') {
	currentLocation = instructionsList[instructions] === 'L' ? data[currentLocation].left : data[currentLocation].right
	steps++
	instructions++
	if (instructions > instructionsList.length - 1) instructions = 0
}

console.log(steps)
