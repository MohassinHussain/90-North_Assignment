// Activity: 1

const collapseBtn = document.querySelector(".collapse-btn");
const leftMenu = document.querySelector(".left-menu")
const menuBtn = document.querySelector(".menu-btn")
const mainContent = document.querySelector(".main-content")
const hamMenu = document.querySelector(".ham-menu")

collapseBtn.addEventListener("click", () => {
    leftMenu.style.display = "none"
    menuBtn.style.display = "flex"
    if (window.innerWidth <= 760 ) {
        mainContent.style.width = "25rem"
    }else if(window.innerWidth <= 1024) {
    }
    else {
        mainContent.style.width = "70rem"
    }

})
menuBtn.addEventListener("click", () => {
    leftMenu.style.display = "flex"
    menuBtn.style.display = "none"
    // mainContent.style.width = "50rem"
    if (window.innerWidth <= 760) {
        mainContent.style.width = "24rem"
    }
    else {
        mainContent.style.width = "50rem"
    }
})


// Activity: 2 
// I Have done with respect to the question, the website may not respond correctly,
// since shrinking of website crewates hallow space around

// a. If the screen width is between 992px and 1600px, shrink the page by 90%
function shrink(){
    const screenWidth = window.innerWidth
    // a
        if(screenWidth >= 992 && screenWidth <= 1600) {
            document.body.style.transformOrigin = "top center"
            document.body.style.transform = "scale(0.9)"
        }
        // b 
        else if(screenWidth >= 700 && screenWidth <= 767) {
            document.body.style.transformOrigin = "top center"
                document.body.style.transform = "scale(0.8)"
        }
        // c
        else if(screenWidth >= 600 && screenWidth <= 700) {
            document.body.style.transformOrigin = "top center"
            document.body.style.transform = "scale(0.75)"
                
        } 
        // d
        else if(screenWidth <= 600) {
            document.body.style.transformOrigin = "top center"
            document.body.style.transform = "scale(0.75)"
                        
        } 
        else {
            // document.body.style.transformOrigin = ""
            document.body.style.transform = "scale(1)"
        }
}

// DO UNCOMMENT HERE lines (72, 73) for Working of the above fucntion


// window.addEventListener('resize', shrink)
// shrink()

