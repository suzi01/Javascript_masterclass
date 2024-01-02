const results = [{
    first: 'Eluid',
    last: 'Kipchoge',
    country: 'Kenya'
},
{
    first: 'Feyisa',
    last: 'Lilesa',
    country: 'Ethiopa'
},
{
    first: 'Galen',
    last: 'Rupp',
    country: 'United states'
}
]


// const [,{country}] = results //Ethiopa

const [{first: goldWinner},{country}] = results // typing goldWinner prints "Eluid", country prints "Ethiopa"


// Destructuring params

// function print(person){
//     const {first, last, title} = person
//     console.log(`${first} ${last}, ${title}`)
// }

function print({first, last, title}){
    console.log(`${first} ${last}, ${title}`)
}

const response =  [
    'HTTP/1.1',
    '200 OK',
    'application/json'
]

function parseResponse([protocol, statusCode, contentType]){
    console.log(`Status: ${statusCode}`)
}
