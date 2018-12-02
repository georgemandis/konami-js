/*
 * Konami-JS ~
 * Code: https://github.com/snaptortoise/konami-js
 * Documentation: https://snaptortoise.github.io/konami-js/
 * Copyright (c) 2009-2018 George Mandis (george.mand.is, snaptortoise.com)
 * Version: 2.0,0 (12/1/2018)
 * Licensed under the MIT License (http://opensource.org/licenses/MIT)
 */
class Konami {
  constructor(initProperties) {
    const defaultProperties = {
      keyboard: {
        sequence: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'],
        input: [],
        event: '',
      },
      gesture: {
        sequence: ['UP', 'UP', 'DOWN', 'DOWN', 'LEFT', 'RIGHT', 'LEFT', 'RIGHT', 'TAP', 'TAP'],
        input: [],
        event: '',
      },
      gamepad: {
        sequence: ['12', '12', '13', '13', '14', '15', '14', '15', '0', '1'],
        input: [],
        event: '',
      },
    };

    if (typeof initProperties === 'string') {
      Object.keys(defaultProperties).forEach((type) => {
        defaultProperties[type].event = () => { window.location = initProperties; };
      });
    }

    if (typeof initProperties === 'function') {
      Object.keys(defaultProperties).forEach((type) => {
        defaultProperties[type].event = initProperties;
      });
    }

    if (typeof initProperties === 'object') {
      Object.keys(initProperties).forEach((key) => {
        Object.assign(defaultProperties[key], initProperties[key]);
      });
    }

    Object.assign(this, defaultProperties);

    document.addEventListener('keydown', (e) => {
      this.keydownHandler(e);
    });

    document.addEventListener('touchmove', (e) => {
      this.touchmoveHandler(e);
    });

    document.addEventListener('touchstart', (e) => {
      this.touchstartHandler(e);
    });

    document.addEventListener('touchend', (e) => {
      this.touchendHandler(e);
    });
  }

  /**
   * Keyboard handler event
   */
  keydownHandler(e) {    
    // iOS workaround      
    if (e.code === 'Unidentified' && e.key.includes("Arrow")) {
      let key = "Arrow" + e.key.slice(10, e.key.indexOf("Arrow"));
      this.keyboard.input.push(key);
    }else{
      this.keyboard.input.push(e.code);
    }

    if (this.keyboard.input.length > this.keyboard.sequence.length) this.keyboard.input.shift();

    if (this.keyboard.input.toString() === this.keyboard.sequence.toString()) {
      this.keyboard.input.splice(0, this.keyboard.input.length);
      this.keyboard.event();
    }
  }

  /**
   * Touch handler events
   */
  touchstartHandler(e) {
    this.gesture.startX = e.changedTouches[0].pageX;
    this.gesture.startY = e.changedTouches[0].pageY;
    this.gesture.tap = true;
    this.gesture.capture = true;
  }

  touchendHandler(e) {
    const touch = e.changedTouches[0];
    this.gesture.stopX = touch.pageX;
    this.gesture.stopY = touch.pageY;
    this.gesture.input.push(this.checkTouchDirection());

    if (this.gesture.input.length > this.gesture.sequence.length) this.gesture.input.shift();

    if (this.gesture.input.toString() === this.gesture.sequence.toString()) {
      this.gesture.input.splice(0, this.gesture.input.length);
      this.gesture.event();
    }
  }

  touchmoveHandler(e) {
    if (e.touches.length === 1 && this.gesture.capture === true) {
      const touch = e.touches[0];
      this.gesture.stopX = touch.pageX;
      this.gesture.stopY = touch.pageY;
      this.gesture.tap = false;
      this.gesture.capture = false;
    }
  }

  checkTouchDirection() {
    const xMagnitude = Math.abs(this.gesture.startX - this.gesture.stopX);
    const yMagnitude = Math.abs(this.gesture.startY - this.gesture.stopY);
    const x = this.gesture.startX - this.gesture.stopX < 0 ? 'RIGHT' : 'LEFT';
    const y = this.gesture.startY - this.gesture.stopY < 0 ? 'DOWN' : 'UP';
    let result = xMagnitude > yMagnitude ? x : y;
    result = this.gesture.tap === true ? 'TAP' : result;
    return result;
  }

  /**
   *  Gamepad handler events
   */

  gamepadHandler() {

  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Konami;
} else if (typeof define === 'function' && define.amd) {
  define([], () => Konami);
} else {
  window.Konami = Konami;
}
