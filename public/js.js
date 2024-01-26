$(document).ready(function(){
  $(window).scroll(function(){
      // sticky navbar on scroll script
      if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
      }else{
          $('.navbar').removeClass("sticky");
      }
      
      if(this.scrollY > 500){
          $('.scroll-up-btn').addClass("show");
      }else{
          $('.scroll-up-btn').removeClass("show");
      }
  });

  $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0});
      
      $('html').css("scrollBehavior", "auto");
  });

  $('.navbar .menu li a').click(function(){
      
      $('html').css("scrollBehavior", "smooth");
  });

  
  $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });

  var typed = new Typed(".typing", {
      strings: ["Developer",  "Programmer", "WebDeveloper"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });

  var typed = new Typed(".typing-2", {
      strings: [ "Developer", "Programmer", "WebDeveloper"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });  
});

// project section
function filterSelection(category) {
    var projects = document.getElementsByClassName("project-column");

    for (var i = 0; i < projects.length; i++) {
        var project = projects[i];
        var categories = project.className.split(" ");
        var shouldShow = false;

        if (category === "all") {
            shouldShow = true;
        } else {
            if (categories.indexOf(category) > -1) {
                shouldShow = true;
            }
        }

        if (shouldShow) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    }
}

// Initially show all projects
filterSelection("all");


function w3AddClass(element, name) {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
  if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
}
}

function w3RemoveClass(element, name) {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
  while (arr1.indexOf(arr2[i]) > -1) {
    arr1.splice(arr1.indexOf(arr2[i]), 1);     
  }
}
element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }

   var tablinks = document.getElementsByClassName("tab-links");
   var tabcontents = document.getElementsByClassName("tab-contents");
   function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab");
   }
