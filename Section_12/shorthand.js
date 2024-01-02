// const getStats = (arr) => {
//     const max = Math.max(...arr)
//     const min = Math.min(...arr)
//     const sum = arr.reduce((sum, r) => sum + r)
//     const avg = sum/arr.length
//     return {
//         max: max,
//         min:min,
//         sum:sum,
//         avg:avg
//     }
// }

const getStats = (arr) => {
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    const sum = arr.reduce((sum, r) => sum + r)
    const avg = sum/arr.length
    return {
        max,
        min,
        sum,
        avg
    }
}

const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5]

const stats = getStats(reviews)


const role = 'host'
const person = 'Jools Holland'

// const team = {
//     role:person
// } won't work

const team = {}
team[role] = person

// same as below

const team = {
    [role]: person,
    [1+6+9]:'sixteen'
}

// function addprop(obj, k, v){
//     const copy = {
//         ...obj
//     }
//     copy[k] = v
//     return copy
// }

const addprop = (obj, k, v) => {
    return {
        ...obj,
        [k]: v
    }
}

const addprop1 = (obj, k, v) => ({...obj,[k]: v})



const res = addprop(team, 'happy',':)')