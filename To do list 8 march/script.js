
 let othervar = document.querySelector(".sign")
 console.log(othervar)
 let axis = document.querySelector(".popup")
 console.log(axis)
   othervar.addEventListener('click',openpopup)
   function openpopup()
   {
     axis.style.display = 'flex'
   }
let extra = document.querySelector(".cross")
console.log(extra)
extra.addEventListener("click", minimise)
function minimise() {
  
      axis.style.display = 'none'
}

function addTicket()
{
  minimise()
  var boxes = document.querySelector(".upper .dialogbox");
  console.log(boxes)
  var puranaHTML = boxes.innerHTML;
  console.log(puranaHTML)
  var boxContent = document.getElementById("box-content");
  console.log(boxContent)
  var title = document.getElementById("title");
  console.log(title)
  boxes.innerHTML = puranaHTML + `
  <div class="dialogbox">
            <div class="inner">
            <div class="box">
            <div class="box-heading">${title.value}</div>
            <div class="first">-</div>
            <div class="second">E</div>
            <div class="third">x</div>
           </div>
           <main>
            <textarea rows="15">${boxContent.value}</textarea>
          </main>
          </div>`;
          title.value = ""
    boxContent.value = ""
}