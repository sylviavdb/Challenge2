function clock() {
    const fullDate = new Date();
    var hours = fullDate.getHours();
    var mins = fullDate.getMinutes();
    var secs = fullDate.getSeconds();
    var greeting = document.getElementById('greeting');
    body = document.getElementsByTagName('body'),
    tl1 = new TimelineMax();


        if (hours >= 0) {
            greeting.innerHTML = 'Good night';
            tl1.set(body, {backgroundImage: "url('img/night.jpg')"});
            // document.body.style.background = "linear-gradient(to right, #243949 0%, #517fa4 100%)";
           
        }
        
        if (hours >= 6) {
            greeting.innerHTML = 'Good morning';
            tl1.set(body, {backgroundImage: "url('img/dawn.jpg')"});
            // document.body.style.background = "linear-gradient(to right, #e14fad 0%, #f9d423 100%)";          
        }
        
        if (hours >= 12) {
            greeting.innerHTML = 'Good afternoon';
            tl1.set(body, {backgroundImage: "url('img/day.jpg')"});          
        }
        
        if (hours >= 18) {
            greeting.innerHTML = 'Good evening';
            tl1.set(body, {backgroundImage: "url('img/dusk.jpg')"});
        }
          
    if (hours < 10){
        hours = "0" + hours;
        }
    if (mins < 10){
        mins = "0" + mins;
        }
    if (secs <10){
        secs = "0" + secs;
        }


    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = mins;
    document.getElementById('second').innerHTML = secs;

}


setInterval(clock,100);




























