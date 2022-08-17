var g_interval;

const verticalSection = new fullpage('#fullpage', {
    autoScrolling: true,
    afterLoad: function (origin, destination, direction, trigger) {
        clearInterval(g_interval);
        let lapse = 3000;
        
        if(destination.item.querySelectorAll('.fp-slides').length){
            g_interval = setInterval(function () {
                fullpage_api.moveSlideRight();
            }, lapse);
            lapse =+ 3500;
        }
    },

    // onSlideLeave: function (origin, destination, direction, trigger) {
	// 	if(direction == "right"){
	// 		alert("First slide loaded");
	// 	}
    // },

    onLeave: function(origin, destination, direction, trigger){
		var leavingSection = this;

        if(origin.index == 0 && direction =='down'){
			showTitle();
		}

        if(origin.index == 12 && direction =='down'){
			quitTitle();
		}

        if(origin.index == 1 && direction =='up'){
			quitTitle();
		}

		if(direction =='down' || direction =='up'){
            closeDescriptions();
        }
	},
    controlArrows: false,
    loopBottom: true,
})