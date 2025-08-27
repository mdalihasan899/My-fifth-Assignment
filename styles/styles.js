// local time
const callButtons = document.getElementsByClassName('call-btn');
// console.log(callButtons);

for (const callButton of callButtons) {
    console.log(callButton);
    
    callButton.addEventListener('click', function(){
        const serviceTitel = callButton.parentElement.parentElement.children[1].children[0].innerText;
        const serviceNumber = callButton.parentElement.parentElement.children[2].children[0].innerText;
        const currentTime = new Date().toLocaleTimeString([], {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
});
        const callHistory = document.getElementById("call-history");
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





