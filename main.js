const blockOne = document.querySelectorAll('#one div.tab')
const blockTwo = document.querySelectorAll('#two div.tab')
let select =document.querySelector(".selector.tab")
let select2 =document.querySelector(".selector.tab2") // tak obrashautsya k selectory 
let str = "RUB"
let str2 = "USD"

blockOne.forEach(element => {
    element.addEventListener('click', (event) => {
        const clearBtn = document.querySelector('#one .action');
        clearBtn.classList.remove('action');
    
        event.target.classList.add('action');
        str = event.target.innerText;
        
        getRate();
    });
});

blockTwo.forEach(element => {
    element.addEventListener('click', (event) => {
        const clearBtn = document.querySelector('#two .action');
        clearBtn.classList.remove('action');
        
        event.target.classList.add('action');
        str2 = event.target.innerText;
        
        getRate();
    })
})
select2.addEventListener('change', (event) => {
    const clearBtn = document.querySelector('#two .action');
    console.log(clearBtn)
    clearBtn.classList.remove('action');

    str2 = select2.value;
    select2.classList.add('action');

    getRate();
});

select.addEventListener('change',() => {
    const clearBtn = document.querySelector('#one .action');
    clearBtn.classList.remove('action');
    
    str = select.value;
    select.classList.add('action');

    getRate();
});


let buttonValue = document.querySelector(".buttonValue")
let buttonValue2 = document.querySelector(".buttonValue2")

async function getRate() {
    // console.log(str, str2)
    let response = await fetch(`https://api.exchangerate.host/latest?base=${str}&symbols=${str2}`)
    let data = await response.json();

    console.log(data.rates[str2])
    buttonValue2.innerText= `1 ${str2}=${(data.rates[str2].toFixed(4))}`
    let reversedRate=1 / Number(data.rates[str2]);
    buttonValue.innerText = `1 ${str}=${reversedRate.toFixed(4)}`
    let a = moneyValue * data.rates[str2]
    input2.value = a
    
}
const input = document.querySelector(".input")
const input2 = document.querySelector(".input2")
let button6 = document.querySelector(".buttonImg")
let amount = 1
let moneyValue = 1
let moneyRes = 1

input.addEventListener("keyup",async (event)=>{
    moneyValue = event.currentTarget.value
    
    const response = await fetch(`https://api.exchangerate.host/latest?base=${str}&symbols=${str2}&amount=${moneyValue}`)
    const data = await response.json();
    const a = data.rates[str2];
    input2.value = a;
})

button6.addEventListener("click",()=>{ 
    const inputValue = input.value;
    const input2Value = input2.value;
  
    const actionOne = document.querySelector('#one .action');
    const oneBlockValue = actionOne.value ? actionOne.value : actionOne.innerHTML;
    actionOne.classList.remove("action");

    const actionTwo = document.querySelector('#two .action');
    const twoBlockValue = actionTwo.value ? actionTwo.value : actionTwo.innerHTML;
    actionTwo.classList.remove("action"); 

    blockOne.forEach(btn => {
        if(btn.innerHTML === twoBlockValue) {
            btn.classList.add('action');
            
        }
    });
    blockTwo.forEach(btn => {
        if (btn.innerHTML === oneBlockValue) {
            btn.classList.add('action');
        }
    });

    if (!document.querySelector('#one .action')) {
        select.value = twoBlockValue;
        select.classList.add('action');
    }

    if (!document.querySelector('#two .action')) {
        select2.value = oneBlockValue;
        select2.classList.add('action');
    }
      
    str = twoBlockValue
    str2 = oneBlockValue
    getRate()
});
Math.floor

getRate();
typeof(classList)