
function setdate() {
    const secondHand=document.querySelector('.sec-hand');
    const mins=document.querySelector('.min-hand');
    const hours=document.querySelector('.hour-hand');
    const now=new Date();
    const second=now.getSeconds();
    const secondDegree=(second*6)+90;
    secondHand.style.transform=`rotate(${secondDegree}deg)`;
    const min=now.getMinutes();
    const minDegree=(min*6)+90;
    mins.style.transform=`rotate(${minDegree}deg)`;
    const hour=now.getHours();
    const hourDegree=(hour*30)+90;
    hours.style.transform=`rotate(${hourDegree}deg)`;
    hours.style.width="35%";
    console.log(now);

}
setInterval(setdate,1000);