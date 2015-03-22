$(document).ready(function() {

	//Show learn more details
	$('#learnMoreBtn').click(function() {
	    $('#learnMoreInitialDiv').animate({
	        left: '-140%'
	    }, 600);

	    $('#learnMoreDetailsDiv').animate({
	        left: '10%'
	    }, 400);

	    if($('#showVideoBtn').text() == "Watch it.") {
    		$('#headerContentDiv').animate({
		    	backgroundColor: 'rgba(48,48,47,0.6)'
		    }, 400);
    	}
    	else {
	    	$('#headerContentDiv').animate({
		    	backgroundColor: 'rgba(48,48,47,0.8)'
		    }, 400);
    	}
	    
	});

	//Show learn more main
	$('#gotItBtn').click(function() {
	    $('#learnMoreDetailsDiv').animate({
	        left: '140%'
	    }, 600);

	    $('#learnMoreInitialDiv').animate({
	        left: '10%'
	    }, 400);

	    $('#headerContentDiv').animate({
	    	backgroundColor: 'rgba(0,0,0,0)'
	    }, 400);
	});

	//Show learn more video
	$('#showVideoBtn').click(function() {
		
		if($(this).text() == "Watch it.") {
			$(this).text('Read it.');

			$('#hideForVideoDiv').animate({
		        opacity: '0'
		    }, 400);

		    $('#videoDiv').animate({
		        opacity: '1'
		    }, 600);

		    $('#headerContentDiv').animate({
		    	backgroundColor: 'rgba(48,48,47,0.8)'
		    }, 600);
		}
		else {
			$(this).text('Watch it.')

			$('#hideForVideoDiv').animate({
		        opacity: '1'
		    }, 600);

		    $('#videoDiv').animate({
		        opacity: '0'
		    }, 400);

		    $('#headerContentDiv').animate({
		    	backgroundColor: 'rgba(48,48,47,0.6)'
		    }, 600);
		}
	});

	//enable continue button
	$('form :input').keyup(function() {
        var empty = false;
        $('form  :input').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if (empty) {
            $('#mainContinueBtn').attr('disabled', 'disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
        } else {
            $('#mainContinueBtn').removeAttr('disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
        }
    });

	// img button hover/click
    $(".imgButton").hover(function(){
		$(this).find('.labelContainerDiv').toggleClass("hoveredLabelDiv");
    });

    $(".imgButton").mousedown(function(){
		$(this).find('.labelContainerDiv').toggleClass("clickedLabelDiv");
    });
    $(".imgButton").mouseup(function(){
		$(this).find('.labelContainerDiv').toggleClass("clickedLabelDiv");
    });
});
