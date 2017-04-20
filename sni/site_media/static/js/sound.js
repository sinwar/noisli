$(document).ready(function() {
    
    

    $('.thunder').click(function() {

        var thunderElement = document.createElement('audio');
        thunderElement.setAttribute('src', '/site_media/media/sounds/thunder.m4a');
    	if($('.thunder').attr('id') == 'playthunder')
    	{
	        thunderElement.play();
	        $('.thunder').attr('id', 'pausethunder');
	        $('.thunder').text('Pause');
    	}
    	else
    	{
    		thunderElement.pause();        
	        $('.thunder').attr('id', 'playthunder');
	        $('.thunder').text('Play');
    	}
        console.log($('.thunder').attr('id'));
    });
    


    var fireElement = document.createElement('audio');
    fireElement.setAttribute('src', '/site_media/media/sounds/fire.m4a');

    $('.fire').click(function() {
    	if($('.fire').attr('id') == 'playfire')
    	{
	        fireElement.play();
	        $('.fire').attr('id', 'pausefire');
	        $('.fire').text('Pause');
    	}
    	else
    	{
    		fireElement.pause();        
	        $('.fire').attr('id', 'playfire');
	        $('.fire').text('Play');
    	}
        console.log($('.fire').attr('id'));
    });
    

    var windElement = document.createElement('audio');
    windElement.setAttribute('src', '/site_media/media/sounds/wind.m4a');

  	$('.wind').click(function() {
    	if($('.wind').attr('id') == 'playwind')
    	{
	        windElement.play();
	        $('.wind').attr('id', 'pausewind');
	        $('.wind').text('Pause');
    	}
    	else
    	{
    		windElement.pause();        
	        $('.wind').attr('id', 'playwind');
	        $('.wind').text('Play');
    	}
        console.log($('.wind').attr('id'));
    });


    var forestElement = document.createElement('audio');
    forestElement.setAttribute('src', '/site_media/media/sounds/forest.m4a');

    $('.forest').click(function() {
    	if($('.forest').attr('id') == 'playforest')
    	{
	        forestElement.play();
	        $('.forest').attr('id', 'pauseforest');
	        $('.forest').text('Pause');
    	}
    	else
    	{
    		forestElement.pause();        
	        $('.forest').attr('id', 'playforest');
	        $('.forest').text('Play');
    	}
        console.log($('.forest').attr('id'));
    });


    var seaSideElement = document.createElement('audio');
    seaSideElement.setAttribute('src', '/site_media/media/sounds/seaside.m4a');

    $('.seaside').click(function() {
    	if($('.seaside').attr('id') == 'playseaside')
    	{
	        seaSideElement.play();
	        $('.seaside').attr('id', 'pauseseaside');
	        $('.seaside').text('Pause');
    	}
    	else
    	{
    		seaSideElement.pause();        
	        $('.seaside').attr('id', 'playseaside');
	        $('.seaside').text('Play');
    	}
        console.log($('.seaside').attr('id'));
    });


    var waterStreamElement = document.createElement('audio');
    waterStreamElement.setAttribute('src', '/site_media/media/sounds/waterstream.m4a');

	$('.waterstream').click(function() {
    	if($('.waterstream').attr('id') == 'playwaterstream')
    	{
	        waterStreamElement.play();
	        $('.waterstream').attr('id', 'pausewaterstream');
	        $('.waterstream').text('Pause');
    	}
    	else
    	{
    		waterStreamElement.pause();        
	        $('.waterstream').attr('id', 'playwaterstream');
	        $('.waterstream').text('Play');
    	}
        console.log($('.waterstream').attr('id'));
    });

    var summerNightElement = document.createElement('audio');
    summerNightElement.setAttribute('src', '/site_media/media/sounds/waterstream.m4a');

    $('.summernight').click(function() {
    	if($('.summernight').attr('id') == 'playsummernight')
    	{
	        summerNightElement.play();
	        $('.summernight').attr('id', 'pausesummernight');
	        $('.summernight').text('Pause');
    	}
    	else
    	{
    		summerNightElement.pause();        
	        $('.summernight').attr('id', 'playsummernight');
	        $('.summernight').text('Play');
    	}
        console.log($('.summernight').attr('id'));
    });


    console.log("usersound");
    $('.playsoundbyuser').click(function() {

            console.log("$('.playsoundbyuser').attr('id')");
            var soundbyuserNightElement = document.createElement('audio');
            soundbyuserNightElement.setAttribute('src', $('.playsoundbyuser').attr('id'));
        
            soundbyuserNightElement.play();
        
            console.log($('.playsoundbyuser').attr('id'));
    });


    $('.pausesoundbyuser').click(function() {

            var soundbyuserNightElement = document.createElement('audio');
            soundbyuserNightElement.setAttribute('src', $('.playsoundbyuser').attr('id'));
            soundbyuserNightElement.pause();
        
        console.log($('.pausesoundbyuser').attr('id'));
    });


});