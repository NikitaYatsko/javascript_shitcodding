const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block');

/**
console.log(btns[0].classList.item(1));
console.log(btns[1].classList.add('red'));
console.log(btns[0].classList.remove('blue'));
console.log(btns[0].classList.toggle('blue'));

if (btns[1].classList.contains('red')) {
    console.log("log");
}
 */

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches("button.red")) {
        console.log("Hello");

    }
});
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Hello!');
    });
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);
