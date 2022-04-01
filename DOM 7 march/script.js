document.querySelector(".sample")
let submitvar = document.querySelector(".submit")
submitvar.style.height = "50px"
function submitfunc()
{
 alert("Are u sure")
}
submitvar.addEventListener("click",submitfunc)
function printfunc()
{
    submitvar.style.background="yellow"
}
function backfunc()
{
    submitvar.style.background="white"
}
submitvar.addEventListener("mouseenter", printfunc)
submitvar.addEventListener("mouseleave",backfunc)
let click = document.querySelector(".click")
let content = document.querySelector(".content")
click.addEventListener("click",dosomething)
function dosomething()
{
    content.innerHTML= "<div> Hii </div>"
}
