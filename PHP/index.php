<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../Styles/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <title>Only Month</title>
</head>

<body>



    <div class="wrapper">

        <div class="Abstaract_Shape1"></div>
        <div class="Abstaract_Shape2"></div>


        <div class="wrapper_calendar">
              
             <div class="table-header" style="width:300px ;"><h2> <span class="colortext">JANUARY</span>  2023</h2></div>

            <div class="table-container">
            <table>
                
                <tr>
                    <th> MON </th>
                    <th> TUE  </th>
                    <th> WED  </th>
                    <th> THU  </th>
                    <th> FRI  </th>
                    <th style="color:darkred;"> SAT  </th>
                    <th  style="color:darkred;"> SUN</th>
                </tr>
                
                <tr>
                    <td>  </td>
                    <td>  </td>
                    <td>  </td>
                    <td>  </td>
                    <td>  </td>
                    <td class="weekand">  </td>
                    <td class="weekand">  </td>
                </tr>
                <tr>
                    <td>  </td>
                    <td>  </td>
                    <td>  </td>
                    <td>  </td>
                    <td>  </td>
                    <td class="weekand">  </td>
                    <td class="weekand">  </td>
                </tr>
                <tr>
                    <td>  </td>
                    <td>  </td>
                    <td>  </td>
                    <td>  </td>
                    <td>  </td>
                    <td class="weekand">  </td>
                    <td class="weekand">  </td>
                </tr>
                <tr>
                    <td>  </td>
                    <td>  </td>
                    <td>  </td>
                    <td>  </td>
                    <td>  </td>
                    <td class="weekand">  </td>
                    <td class="weekand">  </td>
                </tr>
                <tr>
                    <td>  </td>
                    <td>  </td>
                    <td>  </td>
                    <td>  </td>
                    <td>  </td>
                    <td class="weekand">  </td>
                    <td class="weekand">  </td>
                </tr>
                <tr>
                    <td>  </td>
                    <td>  </td>
                    <td>  </td>
                    <td>  </td>
                    <td>  </td>
                    <td class="weekand">  </td>
                    <td class="weekand">  </td>
                </tr>

            </table>
        </div>

        </div>

         <div id="modal_window" class="modal_window">
           
            <div class="modal_content">
                <span class="close">&times;</span>
       
            <div class="header">
                <h2 id="content_header" class="Month_Day"></h2>
            </div>
              <div class="content">
                <ul id="To-Do-List">
    
                </ul>
              </div>
               <form method="GET" action="">
            <div class="add_new">

                <div class="text-input">
            <input type="hidden" name="Day" id="Day">
            <input type="hidden" name="Month" id="Month">  
                <input type="text" name="Name">
                </div>
                <input type="submit" name="AddItem" value="Submit">
              
            </div>
             </form>

                 </div>
         </div>



    </div>


    <script src="../JS/calendarStart.js"></script>
    <script src="../JS/modalWindow.js"></script>
<?php

    class CalendarData{


     public function init(){
        $con = new mysqli("localhost","root","");


    $command =  "CREATE DATABASE IF NOT EXISTS calendar";
    $result =  mysqli_query($con, $command); 
    
    $con->close(); 
   $this->CreateTable();

      }


      private function CreateTable(){
        $con1 = new mysqli("localhost","root","","calendar");

        $command =  "CREATE Table IF NOT EXISTS reminders(
                 Id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
                 Name varchar(30) NOT NULL,
                 DayNumber int NOT NULL,
                 Month varchar(50) NOT NULL,
                 Year varchar(50) NOT NULL 
               )";
        $result =  mysqli_query($con1, $command);
       $con1->close();


     }
     

     public function AddNewRem(){
        $item = $_GET["Name"];
        $day = $_GET["Day"];
        $month = $_GET["Month"];
        $con1 = new mysqli("localhost","root","","calendar");
   
      $sql = "INSERT INTO reminders(Name,DayNumber,Month,Year) VALUES ('$item', ' $day ','$month',2023)";
      $con1->query($sql);
      $con1->close();

     }




    }
    
    $calendar = new CalendarData(); 
    
   $calendar->init();



   if(isset($_GET['AddItem']))
   {
     $calendar->AddNewRem();
   }








  ?>
</body>

</html>


