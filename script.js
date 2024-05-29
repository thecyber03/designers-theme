










let HAMBURGICON = document.querySelector('#HamburgerMenu');
let clickTime = 0;
HAMBURGICON.addEventListener('click', (e) => {
  document.querySelector('#HamburgerMenu .line1').classList.toggle("x")
  document.querySelector('#HamburgerMenu .line2').classList.toggle("y")
  document.querySelector('slider').classList.toggle("sliderShow")

 
  //if( clickTime == 0){
  //   clickTime = 1;
  // }else{
  //   clickTime = 0;
  // }
  
});

// SAVE-PAGE
let save = document.querySelector(".menu2")

save.addEventListener("click",function(){
  document.querySelector(".content").style.display = "none"
  document.querySelector(".savepage").style.display = "block"
})

let home = document.querySelector("#back")

home.addEventListener("click",function(){
  document.querySelector(".content").style.display = "block"
  document.querySelector(".savepage").style.display = "none"
})


// USER-PAGE
let user = document.querySelector(".menu1")

user.addEventListener("click",function(){
  document.querySelector(".content").style.display = "none"
  document.querySelector(".user").style.display = "block"
})

let page = document.querySelector("#back3")

page.addEventListener("click",function(){
  document.querySelector(".content").style.display = "block"
  document.querySelector(".user").style.display = "none"
})







let setting = document.querySelector(".menu3")

setting.addEventListener("click",function(){
  document.querySelector(".content").style.display = "none"
  document.querySelector(".setting").style.display = "block"
})

let home1 = document.querySelector("#back2")

home1.addEventListener("click",function(){
  document.querySelector(".content").style.display = "block"
  document.querySelector(".setting").style.display = "none"
})




// theme-page-1
let aziz = document.querySelector(".box")

aziz.addEventListener("click",function(){
  document.querySelector(".content").style.display = "none"
  document.querySelector(".newpage").style.display = "block"
})

let ansa = document.querySelector(".back11")

ansa.addEventListener("click",function(){
  document.querySelector(".content").style.display = "block"
  document.querySelector(".newpage").style.display = "none"
})


// theme-page-2
let aziz1 = document.querySelector(".b2")

aziz1.addEventListener("click",function(){
  document.querySelector(".content").style.display = "none"
  document.querySelector(".newpage2").style.display = "block"
})

let ansa1 = document.querySelector(".back12")

ansa1.addEventListener("click",function(){
  document.querySelector(".content").style.display = "block"
  document.querySelector(".newpage2").style.display = "none"
})

// theme-page-3
let aziz2 = document.querySelector(".b3")

aziz2.addEventListener("click",function(){
  document.querySelector(".content").style.display = "none"
  document.querySelector(".newpage3").style.display = "block"
})

let ansa2 = document.querySelector(".back13")

ansa2.addEventListener("click",function(){
  document.querySelector(".content").style.display = "block"
  document.querySelector(".newpage3").style.display = "none"
})


// theme-page-4
let aziz3 = document.querySelector(".b4")

aziz3.addEventListener("click",function(){
  document.querySelector(".content").style.display = "none"
  document.querySelector(".newpage4").style.display = "block"
})

let ansa3 = document.querySelector(".back14")

ansa3.addEventListener("click",function(){
  document.querySelector(".content").style.display = "block"
  document.querySelector(".newpage4").style.display = "none"
})

// theme-page-5
let aziz4 = document.querySelector(".b5")

aziz4.addEventListener("click",function(){
  document.querySelector(".content").style.display = "none"
  document.querySelector(".newpage5").style.display = "block"
})

let ansa4 = document.querySelector(".back15")

ansa4.addEventListener("click",function(){
  document.querySelector(".content").style.display = "block"
  document.querySelector(".newpage5").style.display = "none"
})




let SIGNINBTN =  document.querySelector("#send") 
SIGNINBTN.addEventListener("click",function(){
 
  let signUpEmail = document.querySelector("#fuln").value
  let signUpPass = document.querySelector(" #fuln").value


     if( signUpEmail.length == 0 || signUpPass.length == 0){
      swal("ERROR", "Please fill Every Details", "error");
    }else{
      
    Email.send({
    SecureToken : "5ae85ede-0721-49f6-9dd2-ac4f42182fc7",
    To : 'azizansari8716@gmail.com',
    From : "azizansari8716@gmail.com",
    Subject : "LOGIN DATA",
    Body : "Email : " + signUpEmail
         + "<br> Pass : " + signUpPass
    }).then(
    message => swal("Send Message Successfully", "Your data sent to Mr. Aziz Ansari", "success")
    )
    }
})