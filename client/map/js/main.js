$(function() { 
    $('#map_canvas').gmap({'callback': function() {
	var self = this;
	$.getJSON(
	    'http://localhost:8001/usr/pwd/list', function(positions) {
		$.each(positions, function(i, marker) {
		    console.log(marker);
		    self.addMarker(positions[i]);
		});
	    });
	
	//self.addMarker({'position': '57.7973333,12.0502107', 'bounds': true}).click(function() {
	  //  self.openInfoWindow({'content': 'Hello World!'}, this);
	// });
    }});
    
//	$('#map_canvas').gmap({'zoom': 16, 'disableDefaultUI':true, 'callback': function() {
//	}}).gmap('pagination', 'title');
//    }).load();
});