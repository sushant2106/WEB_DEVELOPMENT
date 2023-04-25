// const link=document.querySelector('a');
// link.textContent= 'Mozilla Developer Network';
// const para=document.querySelector('p');
// para.textContent='We hope you enjoyed the ride.';
let para=document.getElementById('para');
// para.addEventListener('mouseover',function run(){
//     alert('Mouse INside');
// })
// para.addEventListener('mouseout',function run(){
//     alert('Mouse now went outside');
// })
function togglehide(){
    let btn=document.getElementById('btn');
    let para=document.getElementById('para');
    if(para.style.display!='none'){
        para.style.display='none';
    }
    else{
        para.style.display='block';
    }
}

// const pa=document.querySelector('#pa');
// // pa.addEventListener('click',e=>{
// //     e.classList.toggle('blue');
// // })
// pa.forEach((el)=>{
//  pa.addEventListener('click',el=>{
//     el.classList.toggle('blue');
// })
// el.addEventListener('mouceenter',(e)=>{
//     el.style.backgroundColor="red";
// })
// })

function demo(){
document.getElementById('pa').innerHTML='yes';

}
function demo1(){
    document.getElementById('pa').innerHTML='back';
    
}

function mouseOver(ele){
    ele.style.color='red';
}
function mouseOut(ele){
    ele.style.color='blue';
}

document.getElementById('mouse').addEventListener('mousemove',movingmouse);
var count=0;
function movingmouse(){
    ++count;
    document.getElementById('mouse').innerHTML=count;
}

    
