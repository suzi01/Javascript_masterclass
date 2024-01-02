const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y']


// const results = votes.reduce((tally, val) => {
//     if (tally[val]) {
//         tally[val]++
//     } else {
//         tally[val] = 1;
//     }
//     return tally;
// }, {})


const results1 = votes.reduce((tally, val) => {
    tally[val] = (tally[val] || 0) + 1;
    return tally;
}, {})