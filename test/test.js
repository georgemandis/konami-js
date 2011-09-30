(function (){
  "use strict";

  // test that it loads locally with ender.js and globally with vanilla konami.js
  var Konami = window.Konami && require('konami')
    , konami = new Konami()
    ;

  konami.code = function() {
    alert("Nice keyboarding, friend! +30 lives for you!");
  };

  konami.iphone.code = function() {
    alert("Nice gesturing, friend! +30 lives for you and your kin!");
  };

  konami.load()
}());
