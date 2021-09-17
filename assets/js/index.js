function sum() {
    let x = document.getElementById('numberOne').value;
    let y = document.getElementById('numberTwo').value;
    let effect = document.getElementById('outcome');
    effect.textContent = (`${x} + ${y} = ${Number(x) + Number(y)}`);
}

function sub() {
    let x = document.getElementById('numberOne').value;
    let y = document.getElementById('numberTwo').value;
    let effect = document.getElementById('outcome');
    effect.textContent = (`${x} - ${y} = ${Number(x) - Number(y)}`);
}

function mult() {
    let x = document.getElementById('numberOne').value;
    let y = document.getElementById('numberTwo').value;
    let effect = document.getElementById('outcome');
    effect.textContent = (`${x} * ${y} = ${Number(x) * Number(y)}`);
}

function division() {
    let x = document.getElementById('numberOne').value;
    let y = document.getElementById('numberTwo').value;
    let effect = document.getElementById('outcome');
    effect.textContent = (`${x} / ${y} = ${Number(x) / Number(y)}`);
}

function cleaning() {
    let effect = document.getElementById('outcome');
    effect.textContent = '';
}