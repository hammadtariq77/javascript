var btn=document.querySelectorAll('button')
var result=document.getElementById('result')
 btn.forEach(element => {
    element.addEventListener('click',(e)=>{
        
        if(e.target.textContent==="C"){
            result.innerText=""
        }
        else if(e.target.textContent==="="){
            result.innerText=eval(result.innerText)

        }
        else if(e.target.textContent==="del"){
            result.innerText=result.innerText.slice(0,-1)

        }

        else{
            result.innerText +=e.target.textContent
        }

    })
    
});