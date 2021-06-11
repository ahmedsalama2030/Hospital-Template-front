let intervalSildes; // background interval

// box setting

// open-close box
var labelSetting=document.querySelector(".setting-box label");
var cog=document.querySelector(".setting-box label .icon");
labelSetting.addEventListener("click",(e)=>{
 
  cog.classList.toggle("fa-spin");
})

// color-option
var colorOption=localStorage.getItem("color-option");

var colors=document.querySelectorAll(".setting-box .color span");
colors.forEach((span)=>{
  span.style.background=span.dataset.color;
  if(colorOption!==undefined && span.dataset.color===colorOption){
    document.documentElement.style.setProperty('--main-color',colorOption);
 changeActive(span);
  }
  span.addEventListener("click",(e)=>{
    document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
    changeActiveClick(e);
    localStorage.setItem("color-option",e.target.dataset.color);
  })
})

// stop background
var backgroundOption=localStorage.getItem("background-run");
if(backgroundOption!==undefined &&backgroundOption==="no"){
  clearInterval(intervalSildes);

}
var backgroundBtns=document.querySelectorAll(".setting-box .background span");
backgroundBtns.forEach(btns=>{
  btns.addEventListener("click",(e)=>{
    if(e.target.dataset.type==="no"){
      clearInterval(intervalSildes);
      localStorage.setItem("background-run","no");

    }
    else{
      RunSildes();
      localStorage.setItem("background-run","yes");

    }
    changeActiveClick(e);

})
if(backgroundOption!==undefined && backgroundOption===btns.dataset.type){
  changeActive(btns);

}
})


// box setting


window.onscroll = () => {
    let windowScroll = this.pageYOffset;
    checkScroll(windowScroll);
   checkHeader(windowScroll);
}
// ./header
// toggle
let toggle=document.querySelector(".btn-toggle");
let links=document.querySelector(".links");

toggle.onclick=function(){
     links.classList.toggle("open");
}
// ./toggle

 


 
// slider
let slideIndex=0;
let slides=document.querySelectorAll('.slides .slide');
let dots=document.querySelectorAll(".slides .dots span");
dots.forEach(span => {
    span.addEventListener("click",(e)=>{
      let index=  e.target.dataset.index;
      selectedSlide(index);
    })
});
if(backgroundOption!==undefined &&backgroundOption==="yes"){
  RunSildes();

}
function RunSildes(){
 intervalSildes=setInterval(()=>{
        let i;
   for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
    changeActive(dots[slideIndex-1]);
  slides[slideIndex-1].style.display = "block";

      
    },1000)
}

function selectedSlide(index){
     let i;
    for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }
   changeActive(dots[index-1]);
   slides[index-1].style.display = "block";

}
// ./slider


//  common question
document.querySelectorAll("#question-toggle").forEach(btn=>{
  btn.addEventListener("click",(e)=>{
    btn.parentElement.nextElementSibling.classList.toggle("toggle-body");
  })
})
//  common question

 // general function
function changeActive(e){
      
    e.parentElement.querySelectorAll(".active").forEach(element=>{
         element.classList.remove("active");
    });
    e.classList.add("active");
}
function changeActiveClick(e){
      
  e.target.parentElement.querySelectorAll(".active").forEach(element=>{
       element.classList.remove("active");
  });
  e.target.classList.add("active");
}
let scrollTop=document.querySelector('.scroll-top');
 function checkScroll(windowScroll){  // check scroll top
  if(windowScroll>60)
  {
    scrollTop.style.display="block";
  }
  else{
    scrollTop.style.display="none";
  
  }
}


let header = document.querySelector('header');
 function checkHeader(windowScroll){
  console.log(windowScroll);

      let headeroffset = header.offsetTop;
      console.log(headeroffset)
      if ((windowScroll > headeroffset)) {
        header.classList.add("sticky");
    }
    else if (windowScroll <= (headeroffset)) {
      console.log('s');
        header.classList.remove("sticky");

    }
}

// ./general function