const input = document.querySelector('.generate-pass input')
const Container = document.querySelector('.slider')
const vue = document.querySelector('.value')
let x = Number(Container.value)
Container.addEventListener('input', function () {
    const value = Number(Container.value)
    vue.innerHTML = value
    x = value
})
const str = {
    lc: 'abcdefghijklmnopqrstuvwxyz',
    up: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    sb: '!@#$%^&*()-_=+[]{};:,.<>?',
    num: '0123456789'
}
const uppercase = document.querySelector('#uppercase')
const numbers = document.querySelector('#numbers')
const symbols = document.querySelector('#symbols')
const bt = document.querySelector('button')
bt.addEventListener('click', () => {
    let chars = str.lc
    let end = ''
    if (uppercase.checked) {
        chars += str.up
    }
    if (numbers.checked) {
        chars += str.num
    }
    if (symbols.checked) {
        chars += str.sb
    }
    end = Array.from({ length: x }, () => Math.floor(Math.random() * chars.length)).map(n => chars[n]).join('')
    input.value = `${end}`
})