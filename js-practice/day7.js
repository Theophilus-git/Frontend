function speaksomething(say= "I will be a millionaire",ntimes=10){
 if (typeof say === "string" && typeof ntimes === "number"){
 for (let i=0;i<ntimes;i+=1){
 console.log(say + ":"+i)
 }
 }else{
 console.error("INVALID INPUTS")
 }
 }


 function favSwitch(Jhay){
 if (typeof Jhay !== "object"){
 console.error("This is not an object")
 return
 }
 
 let randonNumber = Math.floor(Math.random()*5)+1;
 
 switch(randonNumber){
 case 1:
 Jhay.favorite = "Football"
 break;
 
 case 2:
 Jhay.favorite = "Tennis"
 break;
 
 case 3:
 Jhay.favorite = "Volley ball"
 break;
 
 case 4:
 Jhay.favorite = "swimming"
 break;
 
 case 5:
 Jhay.favorite = "Golf"
 break;
 
 default:
 Jhay.favorite = "BasketBall"
 }
 }