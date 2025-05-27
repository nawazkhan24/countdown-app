 const endDate = new Date("27 May, 2025 14:32:00").getTime();
const startDate = new Date().getTime();

let x = setInterval(function updateTimer(){
    const now = new Date().getTime();
    const distanceCovered = now-startDate;
    const distancePending = endDate-now;

    const oneDayInMillis = (24*60*60*1000);
    const oneHourInMillis = (60*60*1000);
    const oneMinInMillis = (60*1000);
    const oneSecInMillis = (1000);

    const days = Math.floor(distancePending/oneDayInMillis);
    const hrs = Math.floor(distancePending%oneDayInMillis/oneHourInMillis);
    const mins = Math.floor(distancePending%oneHourInMillis/oneMinInMillis);
    const secs = Math.floor(distancePending%oneMinInMillis/oneSecInMillis);

    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hrs;
    document.getElementById("minutes").innerHTML=mins;
    document.getElementById("seconds").innerHTML=secs;
    const totalDistance = endDate-startDate;

    const percentCdistance = (distanceCovered/totalDistance)*100;

    document.getElementById("progress-bar").style.width = percentCdistance + "%";

    if(distancePending < 0 ) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML="Expired";
        document.getElementById("progress-bar").style.width="100%";
    }
   
}
,1000);