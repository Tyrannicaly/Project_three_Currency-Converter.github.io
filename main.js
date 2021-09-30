// (['one', 'two']).forEach(id => {
//     const buttons = document.querySelectorAll(`#${id} div`);
//     const select = document.querySelector(`#${id} select`);
//     select.addEventListener("change", ()=> {
//         select.style.backgroundColor = "#833AE0";
//         buttons.forEach(btn=>{
//             btn.style.backgroundColor ="white"
//             btn.style.color = "";
//             // a = select[i].value
//             // console.log(a)
//         })
        
        
//     })
//     buttons.forEach(button => {
//         button.addEventListener("click", () => {
//             buttons.forEach(btn =>{
//                 if(btn !== button){
//                     btn.style.backgroundColor = "white";
//                     btn.style.color = "";
//                 }
//             })
            
//             if(button.style.backgroundColor === "rgb(131, 58, 224)"){
//                 button.style.backgroundColor = "white";
//                 button.style.color = "";
//             }else {
//                 button.style.backgroundColor = "#833AE0";
//                 button.style.color = "#FFFFFF"
//                 select.style.backgroundColor ="#FFFFFF"
//             }
            
//         })
        
//     });
// })



// async function getRate(){
//     let response = await fetch(`https://api.exchangerate.host/latest`)
//     let data = await response.json();
//     console.log(data)
// }


// getRate()

const blockOne = document.querySelectorAll('#one div.tab')
const blockTwo = document.querySelectorAll('#two div.tab')
let select =document.querySelector(".selector.tab")
let select2 =document.querySelector(".selector.tab2") // tak obrashautsya k selectory 
let str = "RUB"
let str2 = "USD"
// let obj = {
//     str1: "",
//     str2: ""
// }

// console.log(blockOne)
// console.log(blockTwo)

// function changeTab(block, obj, propName){
//     block.forEach(element => {
//         element.addEventListener('click', (event) => {
//             block.forEach(elem => {
//                 // console.log(elem)
//                 elem.style.background = 'white'
//             })
//             event.target.style.background = 'red'
//             obj[propName] = event.target.innerText
//             console.log(obj.str1)
//         })
//     })
// }
// changeTab(blockOne, obj, "str1")
// changeTab(blockTwo, obj, "str2")
// console.log(obj.str1)


blockOne.forEach(element => {
        element.addEventListener('click', (event) => {
            blockOne.forEach(elem => {
                // console.log(elem)
                elem.style.background = 'white'
            })
            event.target.style.background = "rgb(131, 58, 224)"
            str = event.target.innerText
            select.style.background = "white"
            getRate()
        })
    })

blockTwo.forEach(element => {
    element.addEventListener('click', (event) => {
        blockTwo.forEach(elem => {
            // console.log(elem)
            elem.style.background = "white"
        })
        event.target.style.background = 'rgb(131, 58, 224)'
        str2 = event.target.innerText
        select2.style.background = "white"
        getRate()
    })
})
select2.addEventListener('change', (event) => {
    event.currentTarget.style.background = 'rgb(131, 58, 224)'
    str2 = event.currentTarget.value;
    blockTwo.forEach(element =>{
        element.style.background = "white"
    })
    getRate() 
})
select.addEventListener('change',()=>{
    select.style.background = 'rgb(131, 58, 224)'
    str = select.value
    blockOne.forEach(element =>{
        element.style.background = "white"
    })
    getRate()
})






let buttonValue = document.querySelector(".buttonValue")
let buttonValue2 = document.querySelector(".buttonValue2")

async function getRate() {
    // console.log(str, str2)
    let response = await fetch(`https://api.exchangerate.host/latest?base=${str}&symbols=${str2}`)
    let data = await response.json();

    console.log(data.rates[str2])
    buttonValue2.innerText= `1 ${str2}=${data.rates[str2]}`
    buttonValue.innerText = `1 ${str}=${1 / Number(data.rates[str2])}`
    let a = moneyValue * data.rates[str2]
    input2.value = a
    
}
const input = document.querySelector(".input")
const input2 = document.querySelector(".input2")
let button6 = document.querySelector("gdcm")
let amount = 1
let moneyValue = 1
let moneyRes = 1
async function getRes(){
    let response = await fetch(`https://api.exchangerate.host/latest?base=${str}&symbols=${str2}`)
    let data = await response.json()
}

input.addEventListener("keyup",async (event)=>{
    console.log(111)
    moneyValue = event.currentTarget.value

    
        let response = await fetch(`https://api.exchangerate.host/latest?base=${str}&symbols=${str2}&amount=${moneyValue}`)
        let data = await response.json();
        console.log(moneyValue)
        console.log(data.rates[str2])
        let a = data.rates[str2]
        input2.value = a
        
    
})
// button6.addEventListener("click",()=>{
    

getRate()
