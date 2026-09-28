function speaksomething(say= "I will be a millionaire",ntimes=10){
 if (typeof say === "string" && typeof ntimes === "number"){
 for (let i=0;i<ntimes;i+=1){
 console.log(say + ":"+i)
 }
 }else{
 console.error("INVALID INPUTS")
 }
 }