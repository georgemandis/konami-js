/*
 * Konami-JS
 * http://snaptortoise.com/projects/konami-js
 * Copyright (c) 2009 George Mandis (georgemandis.com)
 * Version: 1.0 (04/27/2009)
 * Licensed under the Artistic License/GPL
 * http://dev.perl.org/licenses/
 * Tested in: Safari 4, Firefox 3, IE7
 */

var konami = {
	input:"",
	clear:setTimeout('konami.clear_input()',2000),
	load: function(link) {
		window.document.onkeydown = function(e) {
			konami.input+= e.keyCode	
			if (konami.input == "38384040373937396566656613") {
				konami.code(link)
				clearTimeout(konami.clear)
				}
			clearTimeout(konami.clear)
			konami.clear = setTimeout("konami.clear_input()",2000)
			}
	},
	code: function(link) { window.location=link},
	clear_input: function() {
		konami.input="";
		clearTimeout(konami.clear);
	}
}
