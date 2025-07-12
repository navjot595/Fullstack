//promise


// async function myfunction(){


// }







// let a ="navjot";
// console.log(a);

// // for delay
// setTimeout(()=>{
//     console.log("delay of 2ms")
// },2000)

//    console.log("console betwen 1ms and 2ms")

// setTimeout(()=>{
//    console.log("delay of 1ms")
// },1000)

// setTimeout(() => {
//     for(let i=1; i<=5; i++){
    
//         console.log(i)
//     }
//     },1000)

//     setTimeout(() => {
         
//         for(var i=1; i<=5; i++){
//         console.log(i)
//     }
// },1000)

// const myPromise =async() =>{
//     const response = fetch("https://fakestoreapi.in/api/products")
//     console.log(response)
// }
// myPromise()


//promise

const myPromise =async() =>{
        // const response = await fetch ("https://fakestoreapi.in/api/products")

    const response = await fetch ("https://fakestoreapi.in/api/products/category")

    const res =await response.json()
    const data = res.products;
    showData (data)
    // console.log(res.data) 
    
}


    })

}


async function showData(data){
   // console.log(data)
   data.forEach((ele,index)=>{
  // console.log(ele)
 
  const parent =document.getElementById("parent")



myPromise()
 function showData(data) {
   const  parent = document.getElementById("parent")
    data.forEach((ele , index)=>{
    

  const h2 = document.createElement("h2")
  h2.innerText=ele.brand;

  const img=document.createElement("img")
  img.src = ele.image;
  img.style.width="200px"
  img.style.height="200px"

  const p1 = document.createElement("p")
  p1.innerText=ele.title;

  const p2 = document.createElement("p")
  p2.innerText=ele.price;

  const p3 = document.createElement("p")
  p3.innerText=ele.category;

  const p4 = document.createElement("p")
  p4.innerText=ele.discount;



  const productDiv=document.createElement("div")
  productDiv.style.border="1px solid grey"
   productDiv.append(h2,img,p1,p2,p3,p4);
   parent.append(productDiv);

   parent.append(productDiv)

   })

  

}


