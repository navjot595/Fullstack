let arr=[1,2,3,4,5,6,7,8 ,"navjot"]
let out=arr.map((ele,index)=>{
    return ele**2
});
console.log(out)

//foreach

let foreachout=arr.forEach((ele,index)=>{
    return ele
    // return typeof(ele)=="string"
});
console.log(foreachout)

//FILTER
let filterout=arr.filter((ele,index)=>{
    return typeof(ele)=="string"
    // return typeof(ele)=="string"
});
console.log(filterout)

//reduce
let reduceout=arr.reduce((acc , current)=>{
    return acc + current
    // return typeof(ele)=="string"
},5);

console.log(reduceout)



//map and filter

let Out=arr.map((ele,index)=>{
    return ele**2
    
}) .filter((ele , index)=>{
    return ele%2==0
})
console.log(Out)