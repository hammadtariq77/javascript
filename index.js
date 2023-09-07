/*gsap.to( "#box",{
    x:800,
    y:200,
    duration:2,
    delay:1,
    backgroundColor:"red",
    rotate:360
})*/

/*gsap.from( "#box",{
    x:800,
    y:200,
    duration:2,
    delay:1,
    backgroundColor:"red",
    rotate:360
})*/
//stagger property is used for move object one by one you can also give time 1sec 2sec
//yoyo is used for like bouncing


/*gsap.to(".box",{

    x:600,
    
    duration:2,
    delay:0.5,
    repeat:2,
    stagger:1,
    

})*/

// we use timeline property to do animate object one by one .first u have to declere it with any variabe name

/*var tl=gsap.timeline()

//now you can use variable name to use that

tl.from("#box1",{
    x:600,
    opacity:0,
    backgroundColor:"red",
    duration:1,
    rotate:360,
   
})

tl.from("#box2",{
    x:600,
   backgroundColor:"blue",
    duration:2,
    rotate:360,
   

})

tl.from("#box3",{
    x:600,
    backgroundColor:"yellow",
    duration:2,
    rotate:360,
   
})*/
//using scroll trigger
gsap.from("#page1 #box1",{
    scale:0,
    duration:1,
    rotate:360,
     scrollTrigger:{
        trigger:"#page1 #box1",
        scroller:"body"
    }

})
gsap.from("#page2 #box2",{
    scale:0,
    duration:1,
    rotate:360,
     scrollTrigger:{
        trigger:"#page2 #box2",
        scroller:"body",
        scrub:3,
        markers:true
    }

})
gsap.from("#page3 #box3",{
    scale:0,
    duration:1,
    rotate:360,
     scrollTrigger:{
        trigger:"#page3 #box3",
        scroller:"body"
    }

})