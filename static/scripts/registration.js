/*
 * Find a Bo
 * registration.js
 * Handles registration, where student leaders can submit their contact information to the database
 * Copyright (C) 2018  Sebastian Coates

 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.

 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

$(document).ready(function() {
	let url = window.location.href

	let params = getParams(window.location.href)

	if (params.result == "success") {
		alert("Your submission was successful! You may select another interest and resubmit.")
	} else if (params.result == "failure"){
		alert("Something went wrong with your submission :(")
	}

	if (params.name) {
		$("#name-input").val(params.name)	
	}

	if (params.email) {
		$("#email-input").val(params.email)
	}

        load_interests()
})

/**
 * Get the URL parameters
 * source: https://css-tricks.com/snippets/javascript/get-url-variables/
 * @param  {String} url The URL
 * @return {Object}     The URL parameters
 */
var getParams = function (url) {
	var params = {};
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
	}
	return params;
};