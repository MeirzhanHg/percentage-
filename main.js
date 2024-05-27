let add = document.querySelector('.adds')
let res = document.querySelector('.res')

let sum = document.querySelector('.summ')

let a; 

add.addEventListener('input', (e) => {
   add = e.target.value

   resSum()

   sum.innerHTML  = a
})

res.addEventListener('input', (e) => {
   res = e.target.value

   resSum()

   
})

function resSum() {
   a = add * 100 / res
   
   sum.innerHTML  = a + "%"

   console.log(a);
}
