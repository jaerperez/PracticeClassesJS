let mi_promesa = new Promise((resolve, reject) => {
	const number = Math.floor(Math.random() * 10 + 1);
  if(number > 0){
    setTimeout(function(){resolve((number % 2)? "es impar " + number : "es par " + number);},150); 
  }else{
    setTimeout(function(){reject("es cero")},300); 
  }
});

mi_promesa
	.then(number => console.log(number))
	.catch(error => console.error(error));
