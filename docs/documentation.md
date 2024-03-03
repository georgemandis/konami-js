---
sidebar_position: 5
---

# Documentation

### Overview

The Konami Code is a sequence of keystrokes that, when entered, typically unlocks hidden features within a game or software. This script activates a callback function (such as redirecting to a specified URL) when the correct sequence is entered. It's designed to be lightweight and easy to integrate into web projects.

### How to Use

1. **Instantiation**: Create a new instance of the `Konami` object by passing a callback function or URL as a parameter. The browser will redirect to the provided URL (or execute the callback) once the correct sequence is detected.
2. **Activation**: The Konami Code sequence is "up, up, down, down, left, right, left, right, B, A" (keyboard arrow keys and letters B, A). On touch devices, directional swipes replace the arrow keys, and taps replace B and A.
3. **Deactivation**: Call the `unload` method to remove event listeners and deactivate the easter egg.

### Detailed Function Documentation

#### Constructor: `Konami(callback)`
- **Parameters**:
  - `callback`: A string (URL to navigate to) or a function to execute when the Konami Code sequence is completed.
- **Behavior**: Initializes the Konami Code listener for both keyboard and touch events. Automatically binds the appropriate event listeners based on the device.

#### `addEvent(obj, type, fn, ref_obj)`
- **Purpose**: Adds an event listener to an object. It supports both modern browsers through `addEventListener` and IE through `attachEvent`.
- **Parameters**:
  - `obj`: The DOM object to attach the event to.
  - `type`: The type of event to listen for (e.g., `keydown`, `touchstart`).
  - `fn`: The function to call when the event occurs.
  - `ref_obj`: Optional. A reference object to use inside the callback function.

#### `removeEvent(obj, eventName, eventCallback)`
- **Purpose**: Removes an event listener from an object, compatible with both `removeEventListener` and IE's `detachEvent`.
- **Parameters**:
  - `obj`: The DOM object to remove the event from.
  - `eventName`: The name of the event (e.g., `keydown`).
  - `eventCallback`: The callback function that was originally added.

#### `keydownHandler(e, ref_obj)`
- **Purpose**: Handles `keydown` events, accumulating input and checking against the Konami Code pattern.
- **Parameters**:
  - `e`: The event object.
  - `ref_obj`: Optional. A reference to the Konami object for use in environments like IE.

#### `load(link)`
- **Purpose**: Initializes the easter egg by setting up the necessary event listeners.
- **Parameters**:
  - `link`: A URL to navigate to upon completing the Konami Code sequence.

#### `unload()`
- **Purpose**: Deactivates the easter egg by removing all related event listeners from the document.
- **Parameters**: None.

#### `code(link)`
- **Purpose**: The default action to execute when the Konami Code sequence is completed. It navigates to the provided URL.
- **Parameters**:
  - `link`: A URL to navigate to.

#### `iphone` Object
- **Description**: Contains methods and properties for handling touch events, translating swipes, and taps into the Konami Code sequence.

### Integration

To integrate this script into your web project:
1. Include the Konami JS file in your HTML document.
2. Instantiate a `Konami` object with your desired callback or URL.
3. Optionally, use the `unload` method to deactivate the easter egg when needed.

This script is versatile and can add an engaging element to websites with minimal setup. The use of both keyboard and touch event support ensures a broad range of devices can trigger the easter egg.