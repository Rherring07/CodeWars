function rgb(r, g, b){
  // complete this function  
  function componentToHex(c) {
    if(c > 255)
      c = 255;
    
    if(c < 0)
      c = 0;
    
   var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
    return (componentToHex(r) + componentToHex(g) + componentToHex(b)).toUpperCase();


}


//A little cleaner

function rgb(r, g, b){
  return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}
