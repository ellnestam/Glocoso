define(
    function() {
	return {
	    addMyPosition: function(googleMap) {
		var self = this;
  
		// Try W3C Geolocation (Preferred)
		if(navigator.geolocation) {
		    navigator.geolocation.getCurrentPosition(function(position) {
			initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
			googleMap.setCenter(initialLocation);
		    }, function() {
			self.handleNoGeolocation(true, googleMap);
		    });
		} else {
		    self.handleNoGeolocation(false, googleMap);
		}
	    },
  
	    handleNoGeolocation: function(errorFlag, map) {
		if (errorFlag == true) {
		    alert("Geolocation service failed. We've placed you in Mellbystrand");
		    // Mellby
		    initialLocation = new google.maps.LatLng(56.505500, 12.947173);
		} else {
		    alert("Your browser doesn't support geolocation. We've placed you in Siberia.");
		    initialLocation = new google.maps.LatLng(60, 105);
		}

		map.setCenter(initialLocation);

		 var marker = new google.maps.Marker({
		    position: initialLocation,
		    map: map,
		    title: 'You!'});
	    },

	    addMarker: function(location, map) {
		var p = new google.maps.LatLng(location.lat, location.lng);
		var marker = new google.maps.Marker({
		    position: p,
		    map: map,
		    title: location.title});
	    },

	    addMyMarker: function(latLng, map, title) {
		new google.maps.Marker({
		    position: latLng,
		    map: map,
		    title: title});
	    },

	    addStuff: function(map) {
		var self = this;
		var listUrl = 'http://localhost:8001/usr/pwd/list';		
		$.getJSON(listUrl, function(positions) {
		    $.each(positions, function(i, marker) {
			self.addMarker(marker, map);
		    });
		});
	    }

	}
    }
);