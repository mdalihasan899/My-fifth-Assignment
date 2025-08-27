// local time
const callButtons = document.getElementsByClassName('call-btn');
// console.log(callButtons);

for (const callButton of callButtons) { 
    callButton.addEventListener('click', function(){
        const serviceTitel = callButton.parentElement.parentElement.children[1].children[0].innerText;
        const serviceNumber = callButton.parentElement.parentElement.children[2].children[0].innerText;
        const currentTime = new Date().toLocaleTimeString([], {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
});
        const callHistory = document.getElementById("card-container");
        const callHistoryNewCard = document.createElement("div");
        callHistoryNewCard.innerHTML = `
        <div class="space-y-2 mt-4">
                        <div class="flex justify-between items-center bg-gray-100 p-4 rounded-2xl">
                            <div>
                                <h1 class="text-[12px] pb-1">${serviceTitel}</h1>
                                <p>${serviceNumber}</p>
                            </div>
                            <span>${currentTime}</span>
                        </div>
                </div>
      `;
      callHistory.append(callHistoryNewCard);


    
         
    })
}

//   heart click count
const heartButtons = document.getElementsByClassName('heart-btn');
for (const heartButton of heartButtons) {
    // console.log(heartButton);
    heartButton.addEventListener("click", function(){
    const heartCountElement = document.getElementById("heart-count");
    const currentHeartCount = Number(heartCountElement.innerText);
    heartCountElement.innerText = currentHeartCount + 1;
    })
}

// clear the call history
const clearButton = document.getElementById("clear-btn");
clearButton.addEventListener('click', function() {
    const callHistory = document.getElementById("card-container");
    callHistory.innerHTML = "";
})




