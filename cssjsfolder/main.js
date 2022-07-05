const clipPath1 = document.querySelector(".clipPath1");
const clipPath2 = document.querySelector(".clipPath2");
const clipPath3 = document.querySelector(".clipPath3");
const clipPath1Content = document.querySelector(".clipPath1Content");
const clipPath2Content = document.querySelector(".clipPath2Content");
const clipPath3Content = document.querySelector(".clipPath3Content");
const hamburgerSide = document.querySelector(".hamburgerSide")
const ContainerforMobile = document.querySelector(".ContainerforMobile");


const cliph1 = document.querySelector(".cliph1");
const cliph2 = document.querySelector(".cliph2");
const cliph3 = document.querySelector(".cliph3");

const clipcontentcontainer1 = document.querySelector(".clipcontentcontainer1");
const clipcontentcontainer2 = document.querySelector(".clipcontentcontainer2");
const clipcontentcontainer3 = document.querySelector(".clipcontentcontainer3");

const clipParagrap1 = document.querySelector(".clipParagrap1");
const clipParagrap2 = document.querySelector(".clipParagrap2");
const clipParagrap3 = document.querySelector(".clipParagrap3");

const refStyler = document.querySelectorAll('.refStyler');
const refStyler2 = document.querySelectorAll('.refStyler2')

let cons = console.log.bind(document);

// mouse event js
clipPath1.addEventListener('mouseenter', (e)=>{

  clipPath1.classList.add("fullwidth");
  clipPath1.classList.add("clipath1Index");
 
  
  clipPath2.classList.remove("clipath2Index")
  clipPath3.classList.remove("clipath3Index")
  
  
});
clipPath2.addEventListener('mouseenter', ()=>{

  clipPath2.classList.add("fullwidth")
 


  clipPath2.classList.add("clipath2Index");
  clipPath1.classList.remove("clipath1Index")
  clipPath3.classList.remove("clipath3Index")

  
});
clipPath3.addEventListener('mouseenter', ()=>{

  clipPath3.classList.add("fullwidth")

  clipPath3.classList.add("clipath3Index");
  clipPath2.classList.remove("clipath2Index")
  clipPath1.classList.remove("clipath1Index")

  
});

clipPath1.addEventListener('mouseleave', ()=>{

  clipPath1.classList.remove("fullwidth");
  

 
});
clipPath2.addEventListener('mouseleave', ()=>{ 

  clipPath2.classList.remove("fullwidth")

  
});
clipPath3.addEventListener('mouseleave', ()=>{

  clipPath3.classList.remove("fullwidth")


});
// mouse event js ends here



// click event testing lng

clipPath1.addEventListener('touchend', (e)=>{4
  // buburahin ung fullwidth na class na pang desktop
  clipPath2.classList.remove("fullwidth")
  clipPath1.classList.remove("fullwidth")
  clipPath3.classList.remove("fullwidth")
  if(clipPath1.classList.contains("fullwidth")){
    clipPath1.classList.remove("fullwidth")
  }
  if(clipPath2.classList.contains("fullwidth")){
    clipPath2.classList.remove("fullwidth")
  }
  if(clipPath3.classList.contains("fullwidth")){
    clipPath3.classList.remove("fullwidth")
  }

    // buburahin ung index na pangdesktop
  if(clipPath1.classList.contains("clipath1Index")){
    clipPath1.classList.remove("clipath1Index")
  }
  if(clipPath2.classList.contains("clipath2Index")){
    clipPath2.classList.remove("clipath2Index")
  }
  if(clipPath3.classList.contains("clipath3Index")){
    clipPath3.classList.remove("clipath3Index")
  }

  // fullwidth at index pang mobile
  clipPath1.classList.toggle("fullwidthTabletToMobile");
  clipcontentcontainer1.classList.toggle("contanerOpacity1");
  cliph1.classList.toggle("clipHeaderOpacity1");
  clipParagrap1.classList.toggle("clipParagrapOpacity1");
  clipcontentcontainer1.classList.remove("clipcontentcontainer");
  
  clipPath1.classList.add("clipath1IndextableToMobile");
  clipPath2.classList.remove("clipath2IndextableToMobile")
  clipPath3.classList.remove("clipath3IndextableToMobile")


  cons("clippath1 touchend");
});
clipPath2.addEventListener('touchend', ()=>{
  clipPath2.classList.remove("fullwidth")
  clipPath1.classList.remove("fullwidth")
  clipPath3.classList.remove("fullwidth")
  if(clipPath1.classList.contains("fullwidth")){
    clipPath1.classList.remove("fullwidth")
  }
  if(clipPath2.classList.contains("fullwidth")){
    clipPath2.classList.remove("fullwidth")
  }
  if(clipPath3.classList.contains("fullwidth")){
    clipPath3.classList.remove("fullwidth")
  }

  if(clipPath1.classList.contains("clipath1Index")){
    clipPath1.classList.remove("clipath1Index")
  }
  if(clipPath2.classList.contains("clipath2Index")){
    clipPath2.classList.remove("clipath2Index")
  }
  if(clipPath3.classList.contains("clipath3Index")){
    clipPath3.classList.remove("clipath3Index")
  }
  clipPath2.classList.toggle("fullwidthTabletToMobile")
  clipcontentcontainer2.classList.toggle("contanerOpacity2");
  cliph2.classList.toggle("clipHeaderOpacity2");
  clipParagrap2.classList.toggle("clipParagrapOpacity2");
  clipcontentcontainer2.classList.remove("clipcontentcontainer");
  clipPath2.classList.add("clipath2IndextableToMobile");
  clipPath1.classList.remove("clipath1IndextableToMobile")
  clipPath3.classList.remove("clipath3IndextableToMobile")

  cons("clippath2 touchend");
});
clipPath3.addEventListener('touchend', ()=>{
  clipPath2.classList.remove("fullwidth")
  clipPath1.classList.remove("fullwidth")
  clipPath3.classList.remove("fullwidth")
  if(clipPath1.classList.contains("fullwidth")){
    clipPath1.classList.remove("fullwidth")
  }
  if(clipPath2.classList.contains("fullwidth")){
    clipPath2.classList.remove("fullwidth")
  }
  if(clipPath3.classList.contains("fullwidth")){
    clipPath3.classList.remove("fullwidth")
  }
  if(clipPath3.classList.contains("clipath3Index")){
    clipPath3.classList.remove("clipath3Index")
  }
  if(clipPath2.classList.contains("clipath2Index")){
    clipPath2.classList.remove("clipath2Index")
  }
  if(clipPath1.classList.contains("clipath1Index")){
    clipPath1.classList.remove("clipath1Index")
  }
  
  clipPath3.classList.toggle("fullwidthTabletToMobile")
  clipcontentcontainer3.classList.toggle("contanerOpacity3");
  cliph3.classList.toggle("clipHeaderOpacity3");
  clipParagrap3.classList.toggle("clipParagrapOpacity3");
  clipcontentcontainer3.classList.remove("clipcontentcontainer");

  clipPath3.classList.add("clipath3IndextableToMobile");
  clipPath2.classList.remove("clipath2IndextableToMobile")
  clipPath1.classList.remove("clipath1IndextableToMobile")

  cons("clippath3 touchend");
});



hamburgerSide.addEventListener('click',(e)=>{
  ContainerforMobile.classList.toggle("ContainerforMobileDisappear")
})


// list style js

refStyler.forEach(list=>{
  list.addEventListener('click',(e)=>{
    
    refStyler.forEach(remover=>{
      if( remover.classList.contains('listStyle')){
        remover.classList.remove('listStyle')
      }
    })

   
    e.target.classList.add("listStyle");
    ContainerforMobile.classList.toggle("ContainerforMobileDisappear")
  })
})
console.log(refStyler)
window.addEventListener('scroll',(e)=>{
  const scrollChecker = window.scrollY
  console.log(scrollChecker)

  if (scrollChecker ==0 && scrollChecker < 440) {
    if(refStyler[0].classList.contains('listStyle')==false){
      refStyler[0].classList.add('listStyle');
    }
    refStyler[1].classList.remove('listStyle');
    refStyler[2].classList.remove('listStyle');
    refStyler[3].classList.remove('listStyle');
    refStyler[04].classList.remove('listStyle');
    refStyler[05].classList.remove('listStyle');

  }
  if (scrollChecker >=440 && scrollChecker<960) {
    if(refStyler[1].classList.contains('listStyle')==false){
      refStyler[1].classList.add('listStyle');
    }
    refStyler[0].classList.remove('listStyle');
    refStyler[2].classList.remove('listStyle');
    refStyler[3].classList.remove('listStyle');
    refStyler[04].classList.remove('listStyle');
    refStyler[05].classList.remove('listStyle');

  }
  if (scrollChecker >=960 && scrollChecker<1960) {
    if(refStyler[2].classList.contains('listStyle')==false){
      refStyler[2].classList.add('listStyle');
    } 
    refStyler[0].classList.remove('listStyle');
    refStyler[1].classList.remove('listStyle');
    refStyler[3].classList.remove('listStyle');
    refStyler[04].classList.remove('listStyle');
    refStyler[05].classList.remove('listStyle');

  }
  if (scrollChecker >=2000 && scrollChecker<2978.39990234375) {
    if(refStyler[3].classList.contains('listStyle')==false){
      refStyler[3].classList.add('listStyle');
    } 
    refStyler[0].classList.remove('listStyle');
    refStyler[1].classList.remove('listStyle');
    refStyler[2].classList.remove('listStyle');
    refStyler[04].classList.remove('listStyle');
    refStyler[05].classList.remove('listStyle');

  }
})

