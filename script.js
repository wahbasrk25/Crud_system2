
let productname = document.getElementById('product-name');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let total = document.getElementById('total');
let submit = document.getElementById('btn-count');
let proname = document.getElementById('proname');
let proprice = document.getElementById('proprice');
let protaxes = document.getElementById('protaxes');
let proads = document.getElementById('proads');
let prototal = document.getElementById('prototal');




submit.onclick = ()=> {


     if(price.value<= 1000){
 
      taxes.value = price.value * 2.5/100;
      ads.value = price.value * 2.5/100;
      total.innerHTML = +price.value + +ads.value + +taxes.value;
      
       proname.innerHTML = productname.value;
       proprice.innerHTML = price.value;
       protaxes.innerHTML = taxes.value;
       proads.innerHTML = ads.value;
       prototal.innerHTML = total.innerHTML;
        
     }else{
         
         alert(' price is out of rang !!!!! max rang is 1000 $');
     }
      
     
}


