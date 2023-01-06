class ClandarStart{
   rows
   constructor(){
    var today = new Date();
    this.month = today.toLocaleString('en-US', {month: 'long',});    
    this.rows  = document.querySelectorAll("td");
     
   }

   


    init(){
      this.rows.forEach((item)=>{
            item.textContent='';
            item.style.color='white';
        });

        var dt = new Date(2023,6);  

        let i = dt.getDay();


        let days = -1;
        this.rows.forEach((item)=>{
            i--;   
            if(days>dt.getDate()) return null;
        if(i<=0){
             item.textContent= dt.getDate();
               if(days>dt.getDate()) return null;
             dt.setDate(dt.getDate() + 1);
                 days++;
    
          
           }
      
        });

    }






}


var calendar = new ClandarStart();

calendar.init();    