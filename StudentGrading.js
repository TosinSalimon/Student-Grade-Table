var amountOfAssign = 1;
function calculate(){
    var tab = document.getElementById('table1');
    var rowss = tab.rows;
    var cellss = tab.rows[0].cells;
    var sum = 0;
    var average = 0;
    for(var i = 1; i<rowss.length; i++){
        sum = 0;
      for(var x = 2; x<cellss.length-1; x++){
         
          if(tab.rows[i].cells[x].innerText != "-"){
               
         sum +=parseInt(tab.rows[i].cells[x].innerText);          
       }       
    }
 
        var average = Math.round(sum/amountOfAssign);
        tab.rows[i].cells[cellss.length-1].innerText = average;
        
        if(average<40){
    var color = tab.rows[i].cells[cellss.length-1];
    color.style.backgroundColor = "red";
    color.style.color = "white";
 }
 else{
     var color = tab.rows[i].cells[cellss.length-1];
    color.style.backgroundColor = "white";
    color.style.color = "black";
   }      
 }    
}


  addRows= function(){
    var table = document.getElementById('table1');
    var rowCount = table.rows.length;
    var colCount = table.rows[0].cells.length;
    var row = table.insertRow(rowCount);
   
    for(var i = 0; i<colCount; i++){
      var cells = row.insertCell(i);
        cells.setAttribute('contenteditable', 'true');
        if(i==colCount-1){
            cells.setAttribute('class', 'result');
        }
        else if(i>=2){
             cells.setAttribute('class', 'grades');
        }
      cells.innerHTML = "-";  //now inserting just a dash
    }
      
  }
    
  
  
   var counter = 2;
    addCols = function(){
    amountOfAssign++;
    var table = document.getElementById('table1');
    var rowCount = table.rows.length;
    var colCount = table.rows[0].cells.length;
    for(var i = 0; i<rowCount; i++){
       var cell = table.rows[i].insertCell(colCount-1);
       
        if(i==0){
           cell.innerHTML = "Assignment " + counter + "(%)";
          counter++;
         cell.setAttribute('class', 'headings');
            cell.setAttribute('contenteditable', 'true');
            
     }
        else{
            cell.innerHTML = "-";
          cell.setAttribute('class', 'grades');
            cell.setAttribute('contenteditable', 'true');
      }
    }
}
    


