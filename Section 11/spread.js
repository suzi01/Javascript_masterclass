const nums = [45,23,34,7,5]
Math.max(nums) // returns NaN

Math.max(...nums) // returns 45

function giveMefour(a,b,c,d){
    console.log('a',a)
    console.log('b',b)
    console.log('c',c)
    console.log('d',d)
}

const colors = ['red','orange','yellow','green']

giveMefour(...colors)