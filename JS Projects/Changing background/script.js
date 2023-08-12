const button=document.querySelector("button")
const body=document.querySelector("body")
// const color= ['aqua','purple','pink','#f4459a','#753cf8','#fff700','#3b117e','palevioletred']

body.style.backgroundColor='violet'

button.addEventListener('click',changeB)

function changeB(){
    // const colorIndex = parseInt(Math.random()*color.length)
    const r=Math.floor(Math.random() * 255)
    const g=Math.floor(Math.random() * 255)
    const b=Math.floor(Math.random() * 255)

    body.style.backgroundColor=`rgb(${r},${g},${b})`
}
