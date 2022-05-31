let loginvar = document.querySelector(".login")
loginvar.addEventListener("click",dosomething)
function dosomething()
{
    alert("please sign up first")
}
let loginat = document.querySelector(".loginbox")
console.log(loginat)
loginat.addEventListener("mouseenter",printfunc)
loginat.addEventListener("mouseleave",backfunc)
function printfunc()
{
    loginat.style.background="yellow"
}
function backfunc()
{
    loginat.style.background="white"
}
let othervar = document.querySelector(".login")
console.log(othervar)
othervar.addEventListener("click",function (){
    document.querySelector(".popup").style.display="flex";

})
