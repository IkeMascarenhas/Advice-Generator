const advice = document.getElementById("advice")
const refresh = document.getElementById("refresh")

function getAdvice() {
    fetch("https://api.adviceslip.com/advice").then(ele => {
        return ele.json()
    }).then((adv) => {
        advice.innerHTML=adv.slip.advice
    })
}

getAdvice()

refresh.addEventListener("click", (evt)=>{
    advice.innerHTML="Looking..."
    getAdvice()
    console.log("worked")
})