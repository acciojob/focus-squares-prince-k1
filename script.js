//your JS code here. If required.
let box = document.querySelectorAll(".square");
box.forEach((element) => {
  element.addEventListener('mouseover' ,(event) => {
    box.forEach((elem) => {
      if(elem != element){
        elem.style.backgroundColor = "#6F4E37";
      }
    })
  })
  element.addEventListener('mouseout' ,(event) => {
    box.forEach((elem) => {
      
        elem.style.backgroundColor = "#E6E6FA";
    })
  })
})