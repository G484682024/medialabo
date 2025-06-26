function greeting() {
  f1 = document.querySelector('input[name="left"]'); 
  f2 = document.querySelector('input[name="right"]'); 
  
  t1 = Number(f1.value);
  t2 = Number(f2.value);

  answer = t1 + t2;

  p = document.querySelector('span'); 
  p.textContent = answer;

}

b = document.querySelector('button#calc'); 
b.addEventListener('click' , greeting); 