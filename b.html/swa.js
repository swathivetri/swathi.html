const promise1=promise.resolve('Hello World');
const promise2=10;
const promise3=new promise((resolve,reject) =>
     setTimeout(resolve,2000,'Good bye'));
     promise.all([promise1,promise2,promise3]).then(value=>console.log(value));