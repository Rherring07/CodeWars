//create a function that subtracts one list from another and returns the result
//It should remove all values from list a, which are present in list b keeping their order.

function array_diff(a, b) {

    var arr = new Array();
    
    for(var i = 0;i<a.length;i++){
        if(b.indexOf(a[i])<0){
            arr.push(a[i]);
        }
    }
  
    return arr;
}


function array_diff(a, b) {

    //if b does not include value, keep it in a
    return a.filter(value => !b.includes(value));
  }
