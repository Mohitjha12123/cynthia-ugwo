const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function firstPageAnim() {
    const tl=gsap.timeline();
    tl.from("#nav", {
        y: "-10",
        opacity: 0,
        duration: 1.5 ,
        ease: Expo.easeInOut,
      })
      .to(".boundingelem", {
        y: 0,
     
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: .2
      })

      .from("#herofooter", {
        y: "-10",
        opacity: 0,
        duration: 1.5 ,
        delay: -1,
        ease: Expo.easeInOut,
      })
}
// firstPageAnim();

var timeout;

function circlechpta(){
  var xscale=1;
  var yscale=1;
  var xpre=0;
  var ypre=0;
  window.addEventListener("mousemove",function(dets){
    clearTimeout(timeout)
    
    xscale=gsap.utils.clamp(.8,1.2,dets.clientX - xpre);
    yscale=gsap.utils.clamp(.8,1.2,dets.clientY - ypre);

    xpre =dets.clientX;
    ypre =dets.clientY;

  
    circlemousefollower(xscale,yscale)
    timeout=setTimeout(function(){
      document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
    },100)
  })

}
// circlechpta();
    



function circlemousefollower(xscale,yscale){
    window.addEventListener("mousemove", function(dets){
     document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;

    })
}
circlemousefollower();
firstPageAnim();
circlechpta();

document.querySelectorAll(".elem") 
.forEach(function(elem){

  var rotet=0;
  var diffentroot=0

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });




  elem.addEventListener("mousemove",function(dets){
     var diffent=dets.clientY - elem.getBoundingClientRect().tyop;

     diffentroot= dets.clientX - rotet;
     rotet=dets.clientX
 
    gsap .to(elem.querySelector("img"),{
      opacity: 1,
      // ease: power1,
     
      top: diffent,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffentroot * 0.5),
   

    })


  })
})
