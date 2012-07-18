$(function() { 
    demo.add(function() {
	var markers = [
            {'position': '59.435573, 18.030946', 'title': 'Maxis plejz'},
	    {'position': '59.434920, 18.032470', 'title': 'Nathans plejz'},
	    {'position': '56.505500, 12.947173', 'title': 'Mellbystrand'}
	];
	$('#map_canvas').gmap({'zoom': 16, 'disableDefaultUI':true, 'callback': function() {
	    var self = this;
	    $.each(markers, function(i, marker) {
		self.addMarker(marker).click(function() {
		    self.openInfoWindow({'content': this.title}, this);
		});
	    });
	}}).gmap('pagination', 'title');
    }).load();
});