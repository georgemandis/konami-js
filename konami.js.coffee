Konami = (callback) ->
  konami = 
    addEvent: (obj, type, fn, ref_obj) ->
      if obj.addEventListener
        obj.addEventListener type, fn, false
      else if obj.attachEvent 
         # IE
        obj["e" + type + fn] = fn;
        obj[type + fn] = () ->
          obj["e" + type + fn](window.event, ref_obj);
        
        obj.attachEvent("on" + type, obj[type + fn])
      
    input: "",
    pattern: "38384040373937396665",
    load: (link) ->
      this.addEvent document, "keydown", (e, ref_obj) ->
        if ref_obj 
          konami = ref_obj; # IE
        konami.input += if e then e.keyCode else event.keyCode
        if konami.input.length > konami.pattern.length
          konami.input = konami.input.substr konami.input.length - konami.pattern.length
        if konami.input is konami.pattern 
          konami.code link
          konami.input = ""
          e.preventDefault()
          return false
      , this
      this.iphone.load link
    code: (link) ->
      window.location = link
    iphone: {
      start_x: 0
      start_y: 0
      stop_x: 0
      stop_y: 0
      tap: false
      capture: false
      orig_keys: ""
      keys: ["UP", "UP", "DOWN", "DOWN", "LEFT", "RIGHT", "LEFT", "RIGHT", "TAP", "TAP"]
      code: (link) ->
        konami.code link
      load: (link) ->
        this.orig_keys = this.keys;
        konami.addEvent document, "touchmove", (e) ->
          if e.touches.length is 1 && konami.iphone.capture is true
            touch = e.touches[0]
            konami.iphone.stop_x = touch.pageX
            konami.iphone.stop_y = touch.pageY
            konami.iphone.tap = false
            konami.iphone.capture = false
            konami.iphone.check_direction()

        konami.addEvent document, "touchend", (evt) ->
          if konami.iphone.tap is true
            konami.iphone.check_direction(link)
        , false
        konami.addEvent document, "touchstart", (evt) ->
          konami.iphone.start_x = evt.changedTouches[0].pageX
          konami.iphone.start_y = evt.changedTouches[0].pageY
          konami.iphone.tap = true
          konami.iphone.capture = true
      check_direction: (link) ->
        x_magnitude = Math.abs this.start_x - this.stop_x
        y_magnitude = Math.abs this.start_y - this.stop_y
        x = if ((this.start_x - this.stop_x) < 0) then "RIGHT" else "LEFT"
        y = if ((this.start_y - this.stop_y) < 0) then "DOWN" else "UP"
        result = if x_magnitude > y_magnitude then x else y
        result = if (this.tap == true) then "TAP" else result

        if result is this.keys[0] 
          this.keys = this.keys.slice 1, this.keys.length
        if this.keys.length is 0
          this.keys = this.orig_keys
          this.code link
    }
  typeof callback is "string" && konami.load callback
  if typeof callback is "function" 
    konami.code = callback
    konami.load()

  konami;
