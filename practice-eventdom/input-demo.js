function greeting() {
  console.log("こんにちは");
  i = document.querySelector('input[name="shimei"]');
  shimei = i.value;
  aisatsu = "こんにちは、" + shimei + "さん";
  p = document.querySelector('p#message');
 
  p.textContent = aisatsu;
}

b = document.querySelector('button#print'); 
b.addEventListener('click' , greeting); 



