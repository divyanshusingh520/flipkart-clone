//  let temp = function()
//  {
//      a = 3;
//      return a; 
     
//  }
//  temp()

// //  Named functions 

// function fun()
// {
//     console.log("Yes");
// }
// fun()

// Invoked functions
// How to pass function in an other function
// console.log("start")
// function start(a,b)
// {
//     return a*b;
// }
// function head(kuchbhi,a,b)
// {
//     return kuchbhi(a,b);
// }
// console.log(head(start,5,6))
// console.log("end")

// Promise Functions

function sample (a,b)
{
    let c = a+b;
    return new Promise ((resolve,reject)=>
    {
        if(c<5)
        {
            reject(c);
        }
        else
        {
            resolve(c);
        }
    })
}
let result = sample(2,1);
// promise handling
result.then((ele)=>
{
    console.log("this is resolved",ele)
}.catch((err)=>
{
    console.log("this is err",err);
})
new Promise((resolve , reject)=>
{

})