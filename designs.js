// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() { // make the gride
 let pixelBlockes=$('#pixelCanvas');//set the table workspace
 let blockCode=""; //html string holding value
 let Height,width; // size of table
 pixelBlockes.empty(); //remove any table bocks
 Height=$('#inputHeight').val(); //set size values
 width=$('#inputWeight').val();
 for (let columns =0; columns<Height;columns++){ //make the table string
     blockCode+="<tr>";
     for (let rows =0; rows<width;rows++){
         blockCode +="<td></td>";
     }
     blockCode += "</tr>";
 }
    pixelBlockes.html(blockCode);//insert table code into web page
    pixelBlockes.css('background-color',"#ffffff");//white blocks
// Your code goes here!

}
$(document).ready(function(){ //wait for subit button to be pressed
    $('#submitPress').click(function(evtSubmit){
    evtSubmit.preventDefault();
    makeGrid();

});
$('#pixelCanvas').click(function(evtColor){ // change the clicked block's color
    let BlockColor=$('#colorPicker').val();
    $(evtColor.target).css('background-color',BlockColor);
    });
});
