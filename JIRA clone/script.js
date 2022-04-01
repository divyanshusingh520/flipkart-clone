var plusBtn = document.querySelector(".plus");
var crossBtn = document.querySelector(".cross");

function plusBtnClick()
{
    document.querySelector(".dialog").style.display = "flex"
}
plusBtn.addEventListener("click",plusBtnClick)
function closeDialog()
{
    document.querySelector(".dialog").style.display="none"
}
crossBtn.addEventListener("click",closeDialog)