class ClandarStart{
   rows
   constructor(){
    var today = new Date();
    this.month = today.toLocaleString('en-US', {month: 'long',});    
    this.rows  = document.querySelectorAll("td");
     
   }

   get mnt(){
    return this.month;
   }


   async init(){

    //this.getDataFromDB();





      this.rows.forEach((item)=>{
            item.textContent='';
            item.style.color='white';
          
        });

        var dt = new Date(2023,1);  
        let i;
        if(dt.getDay()==0){
             i = 7;
        }
        else i = dt.getDay();  
    


        let days = 0;
        this.rows.forEach((item)=>{
            i--;   
            if(days>dt.getDate()) return null;
    
            if(i<=0){
             item.textContent= dt.getDate();
             item.style.cursor = "pointer";
             dt.setDate(dt.getDate() + 1);
                 days++;
           }
      
        });


    }

  async  getDataFromDB(){
   $.ajax({  
    type: 'POST',  
    url: 'get-data.php', 
    data: {month :this.month,year : 2023},
    success: function(response) {
       JSON.parse(response);
       console.log( JSON.parse(response));
    }
});


   }





}


var calendar = new ClandarStart();

calendar.init();    
calendar.getDataFromDB();