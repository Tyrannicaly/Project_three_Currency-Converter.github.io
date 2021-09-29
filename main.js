
(['one', 'two']).forEach(id => {
    const buttons = document.querySelectorAll(`#${id} div`);
    const select = document.querySelector(`#${id} select`);
    select.addEventListener("change", ()=> {
        select.style.backgroundColor = "#833AE0";
        buttons.forEach(btn=>{
            btn.style.backgroundColor ="white"
            btn.style.color = "";
        })
        
        
    })
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn =>{
                if(btn !== button){
                    btn.style.backgroundColor = "white";
                    btn.style.color = "";
                }
            })
            
            if(button.style.backgroundColor === "rgb(131, 58, 224)"){
                button.style.backgroundColor = "white";
                button.style.color = "";
            }else {
                button.style.backgroundColor = "#833AE0";
                button.style.color = "#FFFFFF"
                select.style.backgroundColor ="#FFFFFF"
            }
            
        })
        
    });
})
let buttomText = select.value
async function getRate(){
    let response = await fetch(`https://api.exchangerate.host/latest${buttomText}`)
    let data = await response.json();
    console.log(data)
}
getRate()
