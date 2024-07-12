function clickme()
{
    alert ("Hey mahn this is aravind, nice to meet you")
}
//ugvuv
let box = document.getElementById('box');


box.addEventListener('mouseover', ()=>
{
    box.style.background='yellow'
});

box.addEventListener('mouseout', ()=>{
    box.style.background = 'green'
})