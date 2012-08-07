require.config({
    paths:{
	jquery: "../libs/jquery-1.6.2",
	async: "../libs/async",
	google: "google",
	location: "location"
    }
});

require(
    [ "jquery", "google", "location" ],
    function( $, google, location ) {

	var mapCanvas = $("#map_canvas").get(0);
	var myMap = google.addMapToCanvas(mapCanvas);
	location.addMyPosition(myMap);
	location.addStuff(myMap);
    }
);

