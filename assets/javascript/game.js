let teamOneShotButton= document.querySelector("#teamone-shoot-button")

teamOneShotButton.addEventListener("click",function() {
    
    let teamOneCounter= document.querySelector("#teamone-numshots")
    let teamOneGoals= document.querySelector("#teamone-numgoals")
    
    let nextValueofteamOneCounter= Number(teamOneCounter.innerHTML) + 1
    teamOneCounter.innerHTML= nextValueofteamOneCounter

    let score = Math.random ()
    if (score <0.5){


        let nextvalueofteamOneGoals= Number (teamOneGoals.innerHTML) + 1
        teamOneGoals.innerHTML= nextvalueofteamOneGoals
    }
   
})

let teamTwoShotButton= document.querySelector("#teamtwo-shoot-button")

teamTwoShotButton.addEventListener("click",function() {
    
    let teamTwoCounter= document.querySelector("#teamtwo-numshots")
    let teamTwoGoals= document.querySelector("#teamtwo-numgoals")
    
    let nextValueofteamTwoCounter= Number(teamTwoCounter.innerHTML) + 1
    teamTwoCounter.innerHTML= nextValueofteamTwoCounter

    let score = Math.random ()
    if (score <0.3){


        let nextvalueofteamTwoGoals= Number (teamTwoGoals.innerHTML) + 1
        teamTwoGoals.innerHTML= nextvalueofteamTwoGoals
    }
   
})

let numresets= document.querySelector ("#num-resets")
const resetbutton = document.querySelector ("#reset-button");

resetbutton.addEventListener ("click", function(){

let newCounterValue= Number (numresets.innerHTML) + 1;
numresets.innerHTML= newCounterValue;
teamOneCounter.innerHTML= 0
teamOneGoals.innerHTML= 0
teamOneCounter.innerHTML= 0
teamTwoGoals.innerHTML= 0

})