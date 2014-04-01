"use strict";
/*global socket*/

$(document).ready(function() {
	navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

	if (navigator.vibrate) {
		socket.on('event:new_notification', function(data) {
			if (data.text) {
				navigator.vibrate([500, 300, 100]);
			}
		});
	}
});