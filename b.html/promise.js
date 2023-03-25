console.log('person1:shows ticket');
console.log('person2:shows ticket');
const preMovie= async()=>'preMovie';
const promiseWifeBringTickets=new Promise((resolve,reject)=>{
setTimeout(()=>{
resolve('ticket');
},3000)
console.log('person4:shows ticket');
console.log('person5:shows ticket');
});
const getPopcorn=promiseWifeBringTicks.then((t)=> {
    new Promise ((resolve,reject)=>resolve('${t}Popcorn'));
    let ticket=await promiseWifeBringTickets;
preMovie().then((m)=>console.log('person3:shows ticket${m}'));
console.log('wife:i have the ticks');
console.log('husband:we should go in');
console.log('wife:no i am hungry');
return ticket;
})
let Popcorn=await getPopcorn;
console.log('husband:i got some${popcorn}');
console.log('husband:we should go in');
console.log('wife:i need butter on my popcorn');
let butter=await addButter;
console.log('husband:i got some${butter}on popcorn');
console.log('husband:anything else darling?');
console.log('wife:lets got we are getting late');
console.log('husband:thank you for the reminder*grins*');

