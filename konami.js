/*
	* Konami-JS ~ 
	* :: Now with support for touch events and multiple instances for 
	* :: those situations that call for multiple easter eggs!
	* Code: http://konami-js.googlecode.com/
	* Examples: http://www.snaptortoise.com/konami-js
	* Copyright (c) 2009 George Mandis (georgemandis.com, snaptortoise.com)
	* Version: 1.4.1 (3/1//2013)
	* Licensed under the GNU General Public License v3
	* http://www.gnu.org/copyleft/gpl.html
	* Tested in: Safari 4+, Google Chrome 4+, Firefox 3+, IE7+, Mobile Safari 2.2.1 and Dolphin Browser
*/

var Konami = function(callback) {
	var konami= {

			/**
			 * This overrides the default cheat code of this konami instance.
			 * Takes in an array of cheat codes that will be used for both default and touch devices.
			 * Codes must be "UP", "DOWN", "LEFT", "RIGHT", "ENTER", or any single characters
			 * Example cheat code: ["UP", "DOWN", "LEFT", "RIGHT", "A", "C", "ENTER"]
			 *
			 * Note: When used on a mobile device, "ENTER" or any single characters just translate into a "TAP"
			 */
			cheatCode: function(codeArray) {
				// Adjust the code array for both our default code pattern and also iphone pattern
				// The code for iphone should be pretty much same, except we change
				// non-direction codes into just a tap.
				adjustedNormalCode = "";
				adjustedIphoneCode = [];

				for (var i = 0; i < codeArray.length; i++) {
					code = codeArray[i];
					if (code === "UP") {
						adjustedNormalCode += "38";
						adjustedIphoneCode.push(code);
					}else if (code === "DOWN") {
						adjustedNormalCode += "40";
						adjustedIphoneCode.push(code);
					}else if (code === "LEFT") {
						adjustedNormalCode += "37";
						adjustedIphoneCode.push(code);
					}else if (code === "RIGHT") {
						adjustedNormalCode += "39";
						adjustedIphoneCode.push(code);
					}else if (code === "ENTER") {
						adjustedNormalCode += "13";
						adjustedIphoneCode.push("TAP");
					}else {
						// If not in the list then we just use the char(code of the first letter)
						adjustedNormalCode += code.charCodeAt(0).toString();
						adjustedIphoneCode.push("TAP");
					}
				};
				this.pattern = adjustedNormalCode;
				this.iphone.keys = adjustedIphoneCode;
			},
			addEvent:function ( obj, type, fn, ref_obj )
			{
				if (obj.addEventListener)
					obj.addEventListener( type, fn, false );
				else if (obj.attachEvent)
				{
					// IE
					obj["e"+type+fn] = fn;
					obj[type+fn] = function() { obj["e"+type+fn]( window.event,ref_obj ); }
					obj.attachEvent( "on"+type, obj[type+fn] );
				}
			},
	        input:"",
	        pattern:"3838404037393739666513",		
	        load: function(link) {					
				this.addEvent(document,"keydown", function(e,ref_obj) {											
					if (ref_obj) konami = ref_obj; // IE
					konami.input+= e ? e.keyCode : event.keyCode;
					if (konami.input.length > konami.pattern.length) konami.input = konami.input.substr((konami.input.length - konami.pattern.length));
					if (konami.input == konami.pattern) {
                    konami.code(link);
					konami.input="";
                   	return;
                    }
            	},this);
           this.iphone.load(link);

				},
	        code: function(link) { window.location=link},
	        iphone:{
	                start_x:0,
	                start_y:0,
	                stop_x:0,
	                stop_y:0,
	                tap:false,
	                capture:false,
					orig_keys:"",
	                keys:["UP","UP","DOWN","DOWN","LEFT","RIGHT","LEFT","RIGHT","TAP","TAP","TAP"],
	                code: function(link) { konami.code(link);},
	                load: function(link){
									this.orig_keys = this.keys;
	    							konami.addEvent(document,"touchmove",function(e){
	                          if(e.touches.length == 1 && konami.iphone.capture==true){ 
	                            var touch = e.touches[0]; 
	                                konami.iphone.stop_x = touch.pageX;
	                                konami.iphone.stop_y = touch.pageY;
	                                konami.iphone.tap = false; 
	                                konami.iphone.capture=false;
	                                konami.iphone.check_direction();
	                                }
	                                });               
	                        konami.addEvent(document,"touchend",function(evt){
	                                if (konami.iphone.tap==true) konami.iphone.check_direction(link);           
	                                },false);
	                        konami.addEvent(document,"touchstart", function(evt){
	                                konami.iphone.start_x = evt.changedTouches[0].pageX;
	                                konami.iphone.start_y = evt.changedTouches[0].pageY;
	                                konami.iphone.tap = true;
	                                konami.iphone.capture = true;
	                                });               
	                                },
	                check_direction: function(link){
	                        x_magnitude = Math.abs(this.start_x-this.stop_x);
	                        y_magnitude = Math.abs(this.start_y-this.stop_y);
	                        x = ((this.start_x-this.stop_x) < 0) ? "RIGHT" : "LEFT";
	                        y = ((this.start_y-this.stop_y) < 0) ? "DOWN" : "UP";
	                        result = (x_magnitude > y_magnitude) ? x : y;
	                        result = (this.tap==true) ? "TAP" : result;                     

	                        if (result==this.keys[0]) this.keys = this.keys.slice(1,this.keys.length);
	                        if (this.keys.length==0) { 
								this.keys=this.orig_keys;
								this.code(link);
								}
	                        }
	                }
	}
	
	typeof callback === "string" && konami.load(callback);
	if(typeof callback === "function")  {
		konami.code = callback;
		konami.load();
	}

	return konami;
}
