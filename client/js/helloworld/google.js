define(
    [ "async!http://maps.google.com/maps/api/js?key=AIzaSyD0XvMCxYSeqeuyEQQ-jR0pWIqS-CDVuKw&sensor=true" ],
    function() {
	return {
	    addMapToCanvas: function(mapCanvas) {
		var self = this;
		var listUrl = 'http://localhost:8001/usr/pwd/list';

		var myOptions = {
		    center: new google.maps.LatLng(0, 0), 
		    zoom: 4,
		    mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		var myMap = new google.maps.Map( mapCanvas, myOptions );
		return myMap;
	    },
	}
    }
);