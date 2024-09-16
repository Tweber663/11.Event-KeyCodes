"use strict";
const keyCode = document.querySelectorAll('span');
const key = document.querySelector('.key p');
const code = document.querySelector('.code p');
const which = document.querySelector('.which p');
const preInfo = document.querySelector('.preInfo');
const mainInfo = document.querySelector('.mainInfo');
window.addEventListener('keydown', (e) => {
    if (!preInfo.classList.contains('hidden')) {
        preInfo.classList.add('hidden');
        mainInfo.classList.remove('hidden');
    }
    keyCode.forEach((k) => {
        k;
        k.innerText = String(e.keyCode);
    });
    key.innerText = String(e.key);
    code.innerText = String(e.code);
    which.innerText = String(e.which);
});
//# sourceMappingURL=app.js.map