const keyCode = document.querySelectorAll('span');
const key = document.querySelector('.key p') as HTMLParagraphElement;
const code = document.querySelector('.code p') as HTMLParagraphElement; 
const which = document.querySelector('.which p') as HTMLParagraphElement; 
const preInfo = document.querySelector('.preInfo') as HTMLDivElement; 
const mainInfo = document.querySelector('.mainInfo') as HTMLDivElement; 


window.addEventListener('keydown', (e) => {
    if (!preInfo.classList.contains('hidden')) {
        preInfo.classList.add('hidden'); 
        mainInfo.classList.remove('hidden'); 
    } 

    keyCode.forEach((k) => {
        k as HTMLSpanElement; 
        k.innerText = String(e.keyCode);
    }); 
    key.innerText = String(e.key)
    code.innerText = String(e.code); 
    which.innerText = String(e.which); 
})


