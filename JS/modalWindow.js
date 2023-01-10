let modal = document.getElementById("modal_window");
let rows  = document.querySelectorAll("td");
let span = document.getElementsByClassName("close")[0];
let modal_header = document.getElementById("content_header");
let day = document.getElementById("Day");
let month = document.getElementById("Month");

rows.forEach(elemet=>{
  elemet.addEventListener('click',(event)=>{
    if(elemet.textContent != ""){
    modal_header.textContent = calendar.mnt +" - " + elemet.textContent;
    day.value = elemet.textContent;
    month.value = calendar.mnt;

   
     modal.style.display = "block";


    }
  });
});

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  