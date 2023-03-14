let navigation = document.querySelector(".navigation");
let openNavigation = document.querySelector(".open-navigation");
let closeNavigation = document.querySelector(".close-navigation");


// color
let brushBtn = document.querySelector(".brush-btn");
let Colors = Array.from(document.querySelectorAll(".brush-btn li"));
// add color from localstorage
if(window.localStorage.getItem("tColor")){
    document.querySelector("body").classList.add(window.localStorage.getItem("tColor"));
    Colors.forEach(color => {
        color.classList.remove("active");
        if(color.dataset.color === window.localStorage.getItem("tColor")){
            color.classList.add("active");
        }
    })
    Array.from(document.querySelectorAll(".contact-info-img img")).forEach(img => {
        img.classList.remove("active");
        if(img.className === window.localStorage.getItem("tColor")){
            img.classList.add("active");
        }
    })
}
// add color from clicking and update the localstorage value
brushBtn.addEventListener("click", () => {
    navigation.classList.add("active");
    brushBtn.classList.toggle("active");
})
Colors.forEach(color => {
    color.addEventListener("click", () => {
        Colors.forEach(e => {
            e.classList.remove("active");
            document.querySelector("body").classList
            .remove(e.dataset.color);
        })
        color.classList.add("active");
        window.localStorage.setItem("tColor", color.dataset.color)
        document.querySelector("body").classList.add(color.dataset.color);
        Array.from(document.querySelectorAll(".contact-info-img img")).forEach(img => {
            img.classList.remove("active");
        })
        document.querySelector(`.contact-info-img img.${color.dataset.color}`).classList.add("active");
    })
})


// mood
let mood = "moon";
let moodBtn = document.querySelector(".navigation .mood");
if(window.localStorage.getItem("mood")){
    if(window.localStorage.getItem("mood") == "moon"){
        moodBtn.querySelector("i").classList.remove("fa-sun");
        moodBtn.querySelector("i").classList.add("fa-moon");
        mood = "sun";
        document.querySelector("body").classList.add("darkMood");
    }else{
        moodBtn.querySelector("i").classList.remove("fa-moon");
        moodBtn.querySelector("i").classList.add("fa-sun");
        mood = "moon";
        document.querySelector("body").classList.remove("darkMood");
    }
}
moodBtn.addEventListener("click" , () => {
    if(mood == "moon"){
        moodBtn.querySelector("i").classList.remove("fa-sun");
        moodBtn.querySelector("i").classList.add("fa-moon");
        window.localStorage.setItem("mood", "moon");
        mood = "sun";
        document.querySelector("body").classList.add("darkMood");
    }else{
        moodBtn.querySelector("i").classList.remove("fa-moon");
        moodBtn.querySelector("i").classList.add("fa-sun");
        window.localStorage.setItem("mood", "sun");
        mood = "moon";
        document.querySelector("body").classList.remove("darkMood");
    }
})


// open and close navigation
openNavigation.addEventListener("click", () => {
    navigation.classList.add("active");
})
closeNavigation.addEventListener("click" , () => {
    navigation.classList.remove("active");
    brushBtn.classList.remove("active");
})


// open page btn 
let pages = Array.from(document.querySelectorAll(".page"));
let pageBtns = Array.from(document.querySelectorAll(".page-btn"));
pageBtns.forEach(pageBtn => {
    pageBtn.addEventListener("click", () => {
        pages.forEach(page => {
            page.classList.add("hide");
        })
        Array.from(document.querySelectorAll(".close-page")).forEach(e => {
            e.classList.remove("hide")
        })
        document.getElementById(pageBtn.dataset.page).classList.remove("hide");
        window.scrollTo({
            left:0,
            top:0,
            behavior:"smooth"
        })
    });
})
// open all pages
let FullPageBtn = document.querySelector(".FullPageBtn");
FullPageBtn.addEventListener("click", () => {
    pages.forEach(e => {
        e.classList.toggle("hide");
    })
    document.querySelector(".home").classList.toggle("hide")
    Array.from(document.querySelectorAll(".close-page")).forEach(e => {
        e.classList.add("hide")
    })
})


// close paga btn
Array.from(document.querySelectorAll(".close-page")).forEach(e => {
    e.addEventListener("click", () => {
        pages.forEach(page => {
            page.classList.add("hide");
        })
        document.getElementById("home").classList.remove("hide");
        navigation.classList.remove("active");
    })
}) 


// About Tabs
let tabsBtns = document.querySelectorAll(".about-tabs button")
let tabContents = document.querySelectorAll(".about .tab-content");
tabsBtns.forEach(tabBtn => {
    tabBtn.addEventListener("click", () => {
        tabsBtns.forEach(e => {
            e.classList.remove("active");
        })
        tabBtn.classList.toggle("active");
        tabContents.forEach(tabContent => {
            tabContent.classList.remove("active");
        })
        document.querySelector(tabBtn.getAttribute("data-target")).classList.add("active");
    })
});


//portfolio
let showBtns = Array.from(document.querySelectorAll(".portfolio .box .btn"));
let projectRow = document.querySelector(".project-row");
showBtns.forEach(showBtn => {
    showBtn.addEventListener("click", () => {
        projectRow.classList.remove("hide");
        document.querySelector(".portfolio .content").classList.add("hide");
        projectRow.querySelector("img").src = showBtn.parentElement.querySelector("img").src;
        projectRow.querySelector("h3").innerHTML = showBtn.parentElement.querySelector(".boxinfo h3").innerHTML;
        projectRow.querySelector(".project-date").innerHTML = showBtn.parentElement.querySelector(".boxinfo .box-time").innerHTML;
        projectRow.querySelector(".project-uses").innerHTML = showBtn.parentElement.querySelector(".boxinfo .box-uses").innerHTML;
        projectRow.querySelector(".project-link").innerHTML = showBtn.parentElement.querySelector(".boxinfo .box-link").innerHTML;
    })
})
document.querySelector(".close-project").onclick = function() {
    document.querySelector(".project-row").classList.add("hide");
    document.querySelector(".portfolio .content").classList.remove("hide");
}


// testimonials
let closeProfs = Array.from(document.querySelectorAll(".cancel"));
let arrProfs = Array.from(document.querySelectorAll(".arr-container"));
let leftProfs = Array.from(document.querySelectorAll(".left-container"));
arrProfs.forEach(arrProf => {
    arrProf.addEventListener("click", () => {
        arrProf.classList.add("on");
        let leftProf = document.getElementById(arrProf.dataset.testi);
        if(leftProf.classList.contains("off")){
            leftProf.classList.remove("off");
            leftProf.classList.add("on");
        }
    })
})
closeProfs.forEach(closeProf => {
    closeProf.addEventListener("click", () => {
        leftProfs.forEach(leftProf => {
            if(leftProf.classList.contains("on")){
                leftProf.classList.add("off");
                leftProf.classList.remove("on");
            }
        })
    })
})


// About Progress Bar
let sectoin = document.querySelector(".skills-group");
let bars = document.querySelectorAll(".progress-bar");
window.onscroll = function() {
    // scroll to fill
    if (window.scrollY >= sectoin.offsetTop){
        bars.forEach((bar) => {
            bar.style.width = bar.dataset.width;
        })
    }
    
    //scroll to up 
    if(window.scrollY >= 1000){
        up.style.display =  "flex";
    }else{
        up.style.display =  "none";
    }
}


// up button
let up = document.querySelector(".upp");
up.onclick = function(){
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
    })
}