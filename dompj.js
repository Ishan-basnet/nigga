const nigga=document.getElementById('menu');
const american=document.querySelector('#drop')

nigga.addEventListener('click',()=>{

    if (american.classList.contains('java')){
    american.classList.remove('java');
    american.classList.add('dropdown')}
else{
    american.classList.remove('dropdown');
    american.classList.add('java')
}
}
)


