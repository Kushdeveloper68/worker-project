let navBtn = document.getElementById("navButton");
let itemDiv = document.getElementById("nav-item-div")
let show = false
navBtn.addEventListener("click",() => {
    if (show === false) {
        itemDiv.style.translate = "310px 0px";
        show = true
    } else {
        itemDiv.style.translate = "-310px 0px";
        show =false 
    }
    
})

// feedback div 

var form = document.querySelector('.light-form');
var btn = document.querySelector('.light-form__btn');
var requiredInputs = Array.prototype.slice.call(form.querySelectorAll('.light-form__control[required]'));

form.addEventListener('input', function(e) {
  var thisInput = e.target;
  var parent = thisInput.nextElementSibling;
  
  if(thisInput.value.trim() !== '') {
    thisInput.classList.add('light-form__control--active');
    parent.classList.add('light-form__label--active');
  }
  else {
    thisInput.classList.remove('light-form__control--active');
    parent.classList.remove('light-form__label--active');
  }
});

btn.addEventListener('click', function(e) {
    
  requiredInputs.forEach(function(ear){    
    if(ear.value.trim() === '') {
      e.preventDefault();
      ear.classList.add('light-form__control--error');
    }
    else {
      ear.classList.remove('light-form__control--error');
    }
  })
});