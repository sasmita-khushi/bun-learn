export default function sleep(time:number) {
return new Promise((resolve)=>{
    setTimeout(()=>{
       resolve(null);
        },time)
})
}
console.log(sleep(2000))