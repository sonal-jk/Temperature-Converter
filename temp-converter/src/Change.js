function Change(){
    var from=document.getElementById("first").value;
    var to=document.getElementById("second").value;
    var inp1=document.getElementById("input").value;
    inp1=parseFloat(inp1);
    var inp2=document.getElementById("output");
    if (from==='Farenheit' && to==='Celsius'){
      inp2.value=(inp1-32)/1.8;
    }
    else if (from==='Farenheit' && to==='Kelvin'){
      inp2.value=((inp1-32)/1.8)+273.15; 
    }
    else if (from==='Celsius' && to==='Farenheit'){
      inp2.value=(inp1*1.8)+32; 
  
    }
    else if (from==='Celsius' && to==='Kelvin'){
      inp2.value=inp1+273.15; 
  
    }
    else if (from==='Kelvin' && to==='Farenheit'){
      inp2.value=((inp1-273.15)*1.8)+32; 
    }
    else if (from==='Kelvin' && to==='Celsius'){
      inp2.value=inp1-273.15; 
    }
}  
export default Change;