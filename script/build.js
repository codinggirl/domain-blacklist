#!/usr/env/bin node

const fs = require('fs')
const path = require('path')

const files = [
    "blacklist.txt"
]

const inFile = path.resolve(__dirname, '../blacklist.txt')
const outFile = path.resolve(__dirname, '../blacklist.dist.txt')

// sort the patterns & unique the items
function main() {
    if (!fs.existsSync(inFile)) {
        return
    }

    let data = fs.readFileSync(inFile).toString()
    let items = data.split('\n').filter(v => v.trim() != '')
    let sortedItems = items.sort().filter((v, i, a) => {
        if (v.startsWith('#')) {
            return false
        }
        return a.indexOf(v) === i
    })

    fs.writeFileSync(outFile, sortedItems.join('\n') + '\n')
}

main()
