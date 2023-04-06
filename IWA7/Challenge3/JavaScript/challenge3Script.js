const leoName = 'Leo'
const leoSurname = 'Musvaire'
const leoBalance = '-9394'

const sarahName = 'Sarah'
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line



const leoNewBalance = parseInt(leoBalance * -1)
const sarahNewBalance = parseFloat(sarahBalance * -1)
const currency = 'R'
const amount = (leoNewBalance + sarahNewBalance + 1000).toLocaleString()

const owed = (currency) + (amount)
const leo = `${leoName} ${leoSurname} (Owed: ${currency} ${leoNewBalance.toFixed(2)})`
const sarah = `${sarahName} ${sarahSurname} (Owed: R ${sarahNewBalance.toFixed(2)})`
const total = "\tTotal amount owed: "
const result = `\n${leo}` + `\n${sarah}` + `\n\n${divider}` + `\n${total}` + `${owed}` + `\n${divider}`

console.log(result)