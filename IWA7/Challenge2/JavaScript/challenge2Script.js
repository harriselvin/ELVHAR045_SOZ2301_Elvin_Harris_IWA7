const nickname= 'Timmy';
const firstname = 'Timothy';
const user = nickname || firstname 

if (user) {
    console.log(`Good Morning, ${user}!`)
} else {
    console.log(`Good Morning!`)
}
