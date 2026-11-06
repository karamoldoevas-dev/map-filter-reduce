// map, filter, reduce
//          0 1 2 3
const nums=[3,12,7,9]

const mapNums=nums.map((n, i, arr)=>n*2)
console.log(mapNums);


const filterNums=nums.filter((san)=>san>5)
console.log(filterNums);

const reduceNums=nums.reduce((n, total)=>n+total,1)
console.log(reduceNums);
