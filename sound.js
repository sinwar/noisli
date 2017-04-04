$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://www.soundjay.com/misc/sounds/bell-ringing-01.mp3');
    
    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
    
    /*
    audioElement.addEventListener("canplay",function(){
        $("#length").text("Duration:" + audioElement.duration + " seconds");
        $("#source").text("Source:" + audioElement.src);
        $("#status").text("Status: Ready to play").css("color","green");
    });
    
    audioElement.addEventListener("timeupdate",function(){
        $("#currentTime").text("Current second:" + audioElement.currentTime);
    });
    */
    
    $('#play').click(function() {
        audioElement.play();
        $("#status").text("Status: Playing");
    });
    
    $('#pause').click(function() {
        audioElement.pause();
        $("#status").text("Status: Paused");
    });
    

    // for cloud sound

    var cloudElement = document.createElement('audio');

    // saurabh - link the proper sound here
    cloudElement.setAttribute('src', 'http://www.soundjay.com/misc/sounds/bell-ringing-01.mp3');

    cloudElement.addEventListener('ended', function() {
        this.play();
    }, false);



    $('#playcloud').click(function() {
        audioElement.play();
    });
    
    $('#pausecloud').click(function() {
        audioElement.pause();
    });


    // for rain sound

    var rainElement = document.createElement('audio');

    // saurabh - link the proper sound here
    rainElement.setAttribute('src', 'http://www.soundjay.com/misc/sounds/bell-ringing-01.mp3');

    rainElement.addEventListener('ended', function() {
        this.play();
    }, false);



    $('#playrain').click(function() {
        audioElement.play();
    });
    
    $('#pauserain').click(function() {
        audioElement.pause();
    });


    // for wind

    var windElement = document.createElement('audio');

    // saurabh - link the proper sound here
    windElement.setAttribute('src', 'http://www.soundjay.com/misc/sounds/bell-ringing-01.mp3');

    windElement.addEventListener('ended', function() {
        this.play();
    }, false);



    $('#playwind').click(function() {
        audioElement.play();
    });
    
    $('#pausewind').click(function() {
        audioElement.pause();
    });


});