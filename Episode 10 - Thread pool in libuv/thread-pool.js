const fs=require("fs");
const crypto=require("crypto");
// by default thread size is 4  
process.env.UV_THREADPOOL_SIZE=2;

crypto.pbkdf2("mypassword1","salt",5000000,50,"sha512",(err,key)=>{
  console.log("1-cryptoPBKDF2 done");
})


crypto.pbkdf2("mypassword2","salt",5000000,50,"sha512",(err,key)=>{
    console.log("2-cryptoPBKDF2 done");
  })

  
crypto.pbkdf2("mypassword3","salt",5000000,50,"sha512",(err,key)=>{
    console.log("3-cryptoPBKDF2 done");
  })
  
  
  crypto.pbkdf2("mypassword4","salt",50000000,50,"sha512",(err,key)=>{
      console.log("4-cryptoPBKDF2 done");
    })

    
  crypto.pbkdf2("mypassword5","salt",5000000,50,"sha512",(err,key)=>{
    console.log("5-cryptoPBKDF2 done");
  })

  //both results simultanously
  // bcoz lib uv assigned all cryptocalls different
  // threads from thread pool

  //if there is 5 thread then 5th thraed will wait for 
  //a thread to be free


  //we can change thread pool size using 
  // process.env.UV_THREADPOOL_SIZE=X;