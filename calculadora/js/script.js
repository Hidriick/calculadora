function displaynum(n1) {
    Calculator.text1.value = Calculator.text1.value + n1;
}

document.querySelector('.ball').addEventListener('click', (e) => {
    e.target.classList.toggle('ball-move');
    document.body.classList.toggle('dark');
});