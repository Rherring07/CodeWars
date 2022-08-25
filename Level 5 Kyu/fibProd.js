The Fibonacci numbers are the numbers in the following integer sequence (Fn):

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
depending on the language if F(n) * F(n+1) = prod.

If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

[F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
F(n) being the smallest one such as F(n) * F(n+1) > prod.

//clean for loop
function productFib(prod){
  // ...
  let pV = 0;
  let cV = 1;
  for(pV; pV * cV < prod; pV = cV - pV) 
    cV += pV;
    
  return [pV, cV, pV * cV === prod];
}


//traditional for loop
/VERY MESSY
function productFib(prod){
  // ...
  let pV = 0;
  let cV = 0;
  let bool = false;
  for(let i = 1; i < prod/pV; i+= pV) {
    pV = i - pV;
    cV = i;
    if(pV * cV === prod) {
      bool = true;
      break;
    } 
  }
  
  if(cV * pV < prod) {
    let temp = pV;
    pV = cV;
    cV += temp;
  }
  return [pV, cV, bool];
}
