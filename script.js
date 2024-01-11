const url = "https://api.adviceslip.com/advice";
const adviceNumberSpan = document.querySelector('.adviceNumber');
const adviceTexto = document.querySelector('.advice-texto');
const adviceBtn = document.querySelector('.generate-btn');



const fetchNewAdvice = async ()=>{
    const response = await fetch(url);
    const advice = await response.json()
    return advice;


}
const renderAdvice = (adviceObj)=>{
    
    const {id,advice}= adviceObj;
    adviceNumberSpan.textContent = `ADVICE #${id}`;
    adviceTexto.textContent = advice;
}

const generateNewAdvice = async ()=>{
    const data = await fetchNewAdvice();
    const advice = data.slip;

    renderAdvice(advice);
}

window.addEventListener('DOMContentLoaded',()=>{
    
    adviceBtn.addEventListener('click',generateNewAdvice);
    
})

function showWarning (msg){
    document.querySelector('.aviso').innerHTML = msg;

}






