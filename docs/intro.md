---
sidebar_position: 1
---

# Let's Get Started!

Konami JS is easy-peasy to use and framework agnostic. Let's get you up and running in 5 minutes!

## Installation

The first thing you'll need to do is install Konami JS for your project. 

If you're building modern things on the web, it's highly probable you already have a build tool like [Webpack](https://webpack.js.org/), [Parcel](https://parceljs.org/) or [Snowpack](https://www.snowpack.dev/) setup. It's even _more_ probable you ran a script like `npx creat-react-app` that did all of this stuff for you and you're not even thinking about it.


You can install Konami JS with npm:

```shell
npm install konami
```

Or with yarn:

```shell
yarn add konami
```


This should add the [Konami JS npm package](https://www.npmjs.com/package/konami) to your `package.json` file and allow you to import it into your project like this:

```javascript
import Konami from 'konami';
```

## Old School

If you want to be super old-school about it you can simply [download the files](https://github.com/georgemandis/konami-js/archive/master.zip) from GitHub,  stick `konami.js` in your project via a `script` tag and rock it like it's 2006. It might look something like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🤫 Secrets</title>
</head>
<body>
  
<script src="/konami.js"></script>
<script>
  const easterEgg = new Konami("https://konamijs.mand.is/")
</script>
</body>
</html>
```

If you want to use a CDN you can use the one hosted at UNPKG:

[https://unpkg.com/konami](https://unpkg.com/konami)


## Next Steps

At its core, every implementation will look something like this:

```javascript
const easterEgg = new Konami("https://konamijs.mand.is/")
```
With that one line your project should now redirect to the website passed in as a string whenver a visitor enters the the Konami Code via the keyboard or gestures.

Exactly how you implement Konami JS from this point forward will vary a bit depending on which framework you're using (see examples).