/*
 * Konami-JS ~
 * :: Now with support for touch events and multiple instances for
 * :: those situations that call for multiple easter eggs!
 * Code: https://github.com/snaptortoise/konami-js
 * Copyright (c) 2009 George Mandis (georgemandis.com, snaptortoise.com)
 * Version: 1.6.2 (7/17/2018)
 * Licensed under the MIT License (http://opensource.org/licenses/MIT)
 * Tested in: Safari 4+, Google Chrome 4+, Firefox 3+, IE7+, Mobile Safari 2.2.1+ and Android
 */

const Konami = (callback) => {
  const konami = {
    addEvent(obj, type, fn, ref_obj) {
      if (obj.addEventListener) obj.addEventListener(type, fn, false);
      else if (obj.attachEvent) {
        // IE
        obj[`e${type}${fn}`] = fn;
        obj[type + fn] = function () {
          obj[`e${type}${fn}`](window.event, ref_obj);
        };
        obj.attachEvent(`on${type}`, obj[type + fn]);
      }
    },
    removeEvent(obj, eventName, eventCallback) {
      if (obj.removeEventListener) {
        obj.removeEventListener(eventName, eventCallback);
      } else if (obj.attachEvent) {
        obj.detachEvent(eventName);
      }
    },
    input: '',
    pattern: '38384040373937396665',
    keydownHandler(e, ref_obj) {
      if (ref_obj) {
        konami = ref_obj;
      } // IE
      konami.input += e ? e.keyCode : event.keyCode;
      if (konami.input.length > konami.pattern.length) {
        konami.input = konami.input.substr(konami.input.length - konami.pattern.length);
      }
      if (konami.input === konami.pattern) {
        konami.code(konami._currentLink);
        konami.input = '';
        e.preventDefault();
        return false;
      }
    },
    load(link) {
      this._currentLink = link;
      this.addEvent(document, 'keydown', this.keydownHandler, this);
      this.iphone.load(link);
    },
    unload() {
      this.removeEvent(document, 'keydown', this.keydownHandler);
      this.iphone.unload();
    },
    code(link) {
      window.location = link;
    },
    iphone: {
      start_x: 0,
      start_y: 0,
      stop_x: 0,
      stop_y: 0,
      tap: false,
      capture: false,
      orig_keys: '',
      keys: ['UP', 'UP', 'DOWN', 'DOWN', 'LEFT', 'RIGHT', 'LEFT', 'RIGHT', 'TAP', 'TAP'],
      input: [],
      code(link) {
        konami.code(link);
      },
      touchmoveHandler(e) {
        if (e.touches.length === 1 && konami.iphone.capture === true) {
          const touch = e.touches[0];
          konami.iphone.stop_x = touch.pageX;
          konami.iphone.stop_y = touch.pageY;
          konami.iphone.tap = false;
          konami.iphone.capture = false;
          konami.iphone.check_direction();
        }
      },
      touchendHandler() {
        konami.iphone.input.push(konami.iphone.check_direction());

        if (konami.iphone.input.length > konami.iphone.keys.length) konami.iphone.input.shift();

        if (konami.iphone.input.length === konami.iphone.keys.length) {
          let match = true;
          for (let i = 0; i < konami.iphone.keys.length; i++) {
            if (konami.iphone.input[i] !== konami.iphone.keys[i]) {
              match = false;
            }
          }
          if (match) {
            konami.iphone.code(konami._currentLink);
          }
        }
      },
      touchstartHandler(e) {
        konami.iphone.start_x = e.changedTouches[0].pageX;
        konami.iphone.start_y = e.changedTouches[0].pageY;
        konami.iphone.tap = true;
        konami.iphone.capture = true;
      },
      load(link) {
        this.orig_keys = this.keys;
        konami.addEvent(document, 'touchmove', this.touchmoveHandler);
        konami.addEvent(document, 'touchend', this.touchendHandler, false);
        konami.addEvent(document, 'touchstart', this.touchstartHandler);
      },
      unload() {
        konami.removeEvent(document, 'touchmove', this.touchmoveHandler);
        konami.removeEvent(document, 'touchend', this.touchendHandler);
        konami.removeEvent(document, 'touchstart', this.touchstartHandler);
      },
      check_direction() {
        const xMagnitude = Math.abs(this.start_x - this.stop_x);
        const yMagnitude = Math.abs(this.start_y - this.stop_y);
        const x = this.start_x - this.stop_x < 0 ? 'RIGHT' : 'LEFT';
        const y = this.start_y - this.stop_y < 0 ? 'DOWN' : 'UP';
        let result = xMagnitude > yMagnitude ? x : y;
        result = this.tap === true ? 'TAP' : result;
        return result;
      },
    },
  };

  typeof callback === 'string' && konami.load(callback);
  if (typeof callback === 'function') {
    konami.code = callback;
    konami.load();
  }

  return konami;
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Konami;
} else if (typeof define === 'function' && define.amd) {
  define([], () => Konami);
} else {
  window.Konami = Konami;
}
