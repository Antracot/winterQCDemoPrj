$(document).ready(function() {

	//set height of viewport
    var myViewportHeight = $(window).height();
	$('body').css({'height': myViewportHeight});

    elementShower('.loader_wrapper', 3000, 'hide');

	//START ANIMATION
    setTimeout (function() {
    	elementShower('.elem_earth', 1500, 'show');
        showTitle();
        moveEarth();
        elementShower('.btn_wrapper', 5000, 'show');
    }, 3000);


	//Move elements Earth
	function moveEarth (){
		var moveElems = new TimelineMax();
		moveElems.to($("#elem1"), 1,{aplha:0, delay:2})
			.to($("#elem1"), .5,{x:0, delay:-.5})
			.to($("#elem2"), .5,{x:-100, delay:-.5})
			.to($("#elem3"), .5,{x:-200, delay:-.5})
			.to($("#elem4"), .5,{x:-300, delay:-.5})
			.to($("#elem5"), .5,{x:-400, delay:-.5})
			.to($("#elem6"), .5,{x:-500, delay:-.5})

		}

	// add Google map
    $('<figure><object data="ajax/map.html"></object></figure>').appendTo('#map');

    //submit registration form
    $('#submitOk, #submitOk2').on('click', function(){
    	$('#checkYourInfo').fadeOut(500);
		$('form').trigger("reset");
    });

	//show title
	function showTitle() {
		var showT = new TimelineMax();
		showT.to($(".port"), .3,{height:100 ,delay: 1})
		showT.to($(".h1_wrap h1"), 1.5,{x:710 ,delay: 0.5})
		showT.to($(".h2_wrap"), 1,{height:100})
		showT.to($(".port"), .2,{height:0, delay: 0})
	}

	// sleep func 
	function elementShower(elem, time, status) {
		if(status=='show'){
			setTimeout (function() {
				$(elem).fadeIn(500);
			}, time);
		}
		if(status=='hide'){
            setTimeout (function() {
                $(elem).fadeOut(500);
            }, time);
		}

	};

    $('#messageBtn').on('click', function(){
        $('#msg_content').fadeIn(500);
    });

    $('#registration_btn').on('click', function(){
        $('#reg_content').fadeIn(500);
    });


    $('#closeBtnMsg, #closeBtnReg').on('click', function(){
        $('#msg_content').fadeOut(500);
        $('#reg_content').fadeOut(500);
    });

    $('#submitOk2').on('click', function(){
        $('#closeBtnReg').trigger('click');
    });


	let dataArr = new Array();
    $("form").submit(function(e) {
        e.preventDefault();
            $('.getInfo').each( function( index, element) {	
            	var getData = $(element).val();
            	dataArr.push(getData);
            });
            $.ajax({
                success: function() {
    		    	$("#checkYourInfo").fadeIn(500);
                    $("#checkYourInfo").children('.data_wrapper').children('.info').html('<p class="checkInfo">' + dataArr[0] + '<p><p class="checkInfo">' + dataArr[1] + '<p><p class="checkInfo">' + dataArr[2] + '<p><p class="checkInfo">' + dataArr[3] + '<p><p class="checkInfo">' + dataArr[4] + '<p><p class="checkInfo">' + dataArr[5] + '<p><p class="checkInfo">' + dataArr[6] + '<p>');
                }
            });

    });

     $("#formMsg").submit(function(e) {
        e.preventDefault();
            $.ajax({
                success: function() {
                    $('#msg_content .content h2').fadeOut(500);
                    $('#msg_content .content #formMsg').fadeOut(500);
                    $('.msgSuccess').fadeIn(750);
                }
           });
    });

     let dataArrReg = new Array();
     $("#formReg").submit(function(e) {
        e.preventDefault();
           $('.getInfoReg').each( function( index, element) {  
                var getData2 = $(element).val();
                dataArrReg.push(getData2);
            });
            $.ajax({
                success: function() {
                    $("#checkYourInfo").fadeIn(500);
                    $("#checkYourInfo").children('.data_wrapper').children('.info').html('<p class="checkInfo">' + dataArrReg[0] + '<p><p class="checkInfo">' + dataArrReg[1] + '<p><p class="checkInfo">' + dataArrReg[2] + '<p><p class="checkInfo">' + dataArrReg[3] + '<p><p class="checkInfo">' + dataArrReg[4] + '<p><p class="checkInfo">' + dataArrReg[5] + '<p><p class="checkInfo">' + dataArrReg[6] + '<p>');
                }
           });
    });




});


