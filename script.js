const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})


// let count = 1;

// btn.addEventListener('click', () => {
//     console.log(1)
//     if(count === 1){
//         search.classList.add('active');
//         count--
//     } else {
//         search.classList.remove('active');
//         count++
//     }
// })