let modal = document.getElementById("modal_window");
let rows  = document.querySelectorAll("td");
let span = document.getElementsByClassName("close")[0];
let modal_header = document.getElementById("content_header");
let day = document.getElementById("Day");
let month = document.getElementById("Month");
let list = document.getElementById("To-Do-List");


rows.forEach(elemet=>{
  elemet.addEventListener('click',(event)=>{
    if(elemet.textContent != ""){
    modal_header.textContent = calendar.mnt +" - " + elemet.children[0].textContent;
    day.value = elemet.children[0].textContent;
    month.value = calendar.mnt;



     affairs = calendar.affars(elemet.children[0].textContent);
     affairs.forEach(aff=>{
        list.insertAdjacentHTML('beforeend',`<li>${aff.Name}</li>`)
     })


     modal.style.display = "block";


    }
  });
});

span.onclick = function() {
  clearModal();
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      clearModal()
      modal.style.display = "none";
    }
  }

  
  function clearModal(){
    while(list.firstChild){
      list.removeChild(list.firstChild);
    }
  }