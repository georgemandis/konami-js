---
title: "Using with React"
sidebar_position: 2
---

# Using Konami JS with [React](https://reactjs.org/).

You'll want to import Konami JS in your main `App` component and initialize it when the component mounts.

The import part is pretty straight-forward and should appear at the top of your file like this:

```javascript
import Konami from "konami";
```

The last step is initializing Konami JS when the component mounts. In most hook-based React apps this will require using `userEffect` and look something like this:

```javascript
  useEffect(()=>{
    const easterEgg = new Konami("https://konamijs.mand.is");
  },[])
```

That's it!

Here is a React-based project on Glitch you can remix, already up-and-running with Konami JS:

[https://konami-js-react.glitch.me](https://konami-js-react.glitch.me)

<!-- Copy and Paste Me -->
<div class="glitch-embed-wrap" style={{height: "420px", width: "100%"}}>
  <iframe
    src="https://glitch.com/embed/#!/embed/konami-js-react?path=src/app.jsx&previewSize=0"
    title="konami-js-react on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style={{height: "100%", width: "100%", border: 0}}>
  </iframe>
</div>


