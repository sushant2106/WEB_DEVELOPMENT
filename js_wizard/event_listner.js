const grandparent=document.querySelector('.grandparent');
const parent=document.querySelector('.parent');
const child=document.querySelector('.child');

grandparent.addEventListener('click',(e)=>{
    //console.log(e.target);
    console.log('grandparent 1');
})
parent.addEventListener('click',(e)=>{
 
    console.log('parent 1');
})

child.addEventListener('click',(e)=>{

    console.log('child 1');
})


