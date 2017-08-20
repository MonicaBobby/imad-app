console.log('Loaded!');
var display=document.getElementById("btn");
var number=document.getElementById("txt");

display.onclick(function(){
    var start=1;
    var result;
    number=Number(number);
    for(var i=0;i<number;i++){
        result=start;
        result=result+"<br/>";
        div.innerHTML(result);
    }
});