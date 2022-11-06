const result =()=>{
    const Name = document.getElementById('name');
    const NameText = Name.value;
    
    
   

    const Roll = document.getElementById('roll');
    const rollText = Roll.value;


     const Sec = document.getElementById('sec');
     const secText = Sec.value;

     const Year = document.getElementById('year');
     const yearText = Year.value;
    const forName = 'ash';
 const forRoll = '756';
     const forSec = 'E';
     const forYear = 2022;

     if(NameText==forName && rollText==forRoll && secText==forSec && yearText==forYear ){
        document.location.href="table.html"
       
       
     }
     else{
         alert('Error')
     }
}
