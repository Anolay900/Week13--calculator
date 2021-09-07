function sum() {
    x = prompt("Первое слагаемое")
    y = prompt("Второе слагаемое")
    alert(`${x} + ${y} = ${Number(x) + Number(y)}`)
}

function sub() {
    x = prompt("Уменьшаемое")
    y = prompt("Вычитаемое")
    alert(`${x} - ${y} = ${Number(x) - Number(y)}`)
}

function mult() {
    x = prompt("Множимое")
    y = prompt("Множитель")
    alert(`${x} * ${y} = ${Number(x) * Number(y)}`)
}

function division() {
    x = prompt("Делимое")
    y = prompt("Делитель")
    alert(`${x} / ${y} = ${Number(x) / Number(y)}`)
}