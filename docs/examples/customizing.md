---
sidebar_position: 4
---

# Customizing Konami JS


The default implementation of Konami JS will trigger a redirect to the URL passed in as a string whenever a visitor enters the Konami Code via a keyboard or gesture input.

You can customize the input sequences and response for more intersting easter eggs.


## Customizing the sequence

If you'd like to change the input sequence to something _other_ than the Konami Code you can specifiy this during initialization:

```javascript
const easterEgg = new Konami("http://konamijs.mand.is/")
// Changes the keyboard pattern to the "ArrowUp" key 10 times
easterEgg.pattern = "38383838383838383838"
// Change the touch input pattern to a clockwise sequence: up, right, down, left
easterEgg.iphone.keys = ["UP", "RIGHT", "DOWN", "LEFT"]
```

Yes, touch events are _still_ hard-coded to an `iphone` property as of v1.6.3. What can I say? I wrote this in 2009 and wasn't really thinking about the future.

## Customizing the response 

If you'd like the Konami JS easter egg to do something a little fancier than redirect your visitor to a different page, all you have to do is provide a callback function:

```javascript
const easterEgg = new Konami(() => {
    const randomNumber = Math.round(Math.random()*100) + 2;
    alert(`Konami JS Lives! May its reign last another ${randomNumber} years`);
  }).
```

That's it!
