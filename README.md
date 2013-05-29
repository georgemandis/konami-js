Konami-JS
=========

#### Important Update

**NOTE:** I've decided to simplify the repository. Just the JavaScript file and the README, with some links to examples. 

Recently I started receiving requests to including Konami-JS in a variety of JavaScript module loaders. If that feature is important to you I'd encourage you to fork the repo and implement it yourself &mdash; I have no plans of introducing anything like that here.

#### Simplified Implementation

Previously the simplest version of a Konami-JS implementation looked like this:

	var easter_egg = new Konami().
	easter_egg.load('http://your-special-easter-egg-website.com')
	
This would redirect the user to a specified website upon successfully completing the Konami Code.

You could also pass along a function to execute when the easter egg is completed. The simplest version of that looked like this:

	var easter_egg = new Konami();
	easter_egg.code = function() { alert('Konami code!'); }
	easter_egg.load();

That is even sillier than the other implementation. 

You can now set  either the URL to redirect to OR the function to execute when you instantiate the class:

	var easter_egg = new Konami('http://your-special-easter-egg-website.com');
	
OR:

	var easter_egg = new Konami(function() { alert('Konami code!')});

A passed string is assumed to be the URL to redirect to. A passed function will be executed when the code is successfully entered:

This is why you do code reviews more often than once ever two years. 


#### Custom Cheat Codes

To use your own custom cheat code you can use the `cheatCode()` function of the konami instance.

	success = function() { 
    		console.log("Custom trigger!"); 
  	}
  	ko = new Konami(success);
  	ko.cheatCode(["LEFT", "RIGHT", "A", "B", "R", "RIGHT", "ENTER"]);

`cheatCode()` automatically converts your cheat code into a format that can be used on touch devices as well.
Direction keys are matched into swipes while uppercase letters and ENTER are matched into TAPS on touch devices.
The code array passed into `cheatCode()` must be one of `["UP", "DOWN", "LEFT", "RIGHT", "ENTER", [any uppercase letter from A-Z]`.


#### Overview

Every site should have an implementation of the Konami Code. It makes things more fun. If you're unfamiliar with it, the Konami Code is a "cheat code" that appeared in many of Konami's video games going all the way back to 1986.  It was typically entered on a Nintendo controller. Recently, ESPN received attention for the funny, flashy things that would happen when the code was entered on their website. Those shenanigans were the inspiration for whipping up this script.

#### Gesture Support

As of version 1.1, Konami-JS includes support for gestures on iOS and Android devices.  Technically the code becomes "up, up, down, down, left, right, left, right, tap, tap, tap," on these devices but that's close enough!

Support for touch gestures is automatically loaded when `konami.load()` is called.  See the [example page](http://snaptortoise.com/konami-js) for details on how to deliver touch-specific easter eggs.

As Seen On...
=============

  * Newsweek
  * Marvel
  * [Almost half the sites in this Mashable article](http://mashable.com/2010/07/31/konami-code-sites)
  * [Smashing Magazine](http://uxdesign.smashingmagazine.com/2012/04/26/gamification-ux-users-win-lose/)
  * ...and MANY more!
