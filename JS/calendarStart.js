class ClandarStart{

   constructor(){
    var today = new Date();
    this.month = today.toLocaleString('en-US', {month: 'long',});    
    this.rows  = document.querySelectorAll("td");
   
   }

   get mnt(){
    return this.month;
   }

   affars(day){
   return this.daysInfo.filter((x)=>x.DayNumber == day);
   }

   async  init(){

      await this.getDataFromDB();

      this.rows.forEach((item)=>{

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
           

          
             if(this.daysInfo.find(({DayNumber}) => DayNumber === (days+1).toString()) !=null){
   
      
               item.insertAdjacentHTML("beforeend",`<label>${dt.getDate()}</label>`);
               item.insertAdjacentHTML("beforeend",`<div class="remind"><label>Reminder</label></div>`);
               
             }
             else{
               item.insertAdjacentHTML("beforeend",`<label>${dt.getDate()}</label>`);
             }
          

             item.style.cursor = "pointer";
             dt.setDate(dt.getDate() + 1);
                 days++;
           }
      
        });


    }

  async  getDataFromDB(){
   let st;
  await $.ajax({  
    type: 'POST',  
    url: 'get-data.php', 
    data: {month :this.month,year : 2023},
    success: function(response) {

      st = JSON.parse(response);
    
       console.log(JSON.parse(response) );
    }
   })

   this.daysInfo = st;//JSON.parse(response);
   }

  

}


var calendar = new ClandarStart();

calendar.init();    
