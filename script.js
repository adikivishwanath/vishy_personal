var tline = gsap.timeline()

tline.from("#nav h3", {
    y: -50,
    opacity: 30,
    delay: .1,
    duration: .4,
    stagger: .2 // all the selected elements will animate one after the another in the specified duration
})

// tline.from("img", {
//     y: -500,
//     opacity: 0,
//     duration: .6,
//     rotate: 70,
//     stagger: .5
// })

tline.from("#img1", {
    y: -500,
    x: 500,
    opacity: 0,
    duration: .6,
    rotate: 70,
})

tline.from("#img2", {
    y: -500,
    x: -500,
    opacity: 0,
    duration: .6,
    rotate: 70,
})



tline.from("#img3", {
    y: 500,
    x: -500,
    opacity: 0,
    duration: .6,
    rotate: 70,
})

tline.from("#main h1:nth-child(2)", {
    x: -500,
    delay: .1,
    duration: .6,
    opacity: 0

})

tline.from("#main h1:nth-child(3)", {
    x: 500,
    delay: .1,
    duration: .6,
    opacity: 0
    
})

tline.from("#main h1:nth-child(4)", {
    x: -500,
    delay: .1,
    duration: .6,
    opacity: 0
    
})

