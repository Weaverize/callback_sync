# Syncer
Tool use to synchronize asynchronous callback

## Example
Here is a small example on how to use this module
```js
const syncer = require("syncer");

var sync = syncer(4, function(err, val) {
	console.log("sync",err,val);
});

sync(null, 8);
sync(null, 6);
sync(new Error("erreur"), 10);
sync(null, 4);
```

## `syncer(targetCount, callback(err, data))`
This is the only function of the module.
- `targetCount` is the number of calls to wait before calling back.
- `callback` is the function to callback once the number is reached or there is an error
	- `err` is the error object (`null` if no error)
	- `data` is an array of values given through every callback (empty on error)

If there is an error no data will be passed along the callback.
If many errors, each one will call the callback function with it's error.

## Tips
This syncer can be used as a `callback(err, data)` to other asynchronous functions (it was build for this).

# Credit
Copyright (c) 2018, [Weaverize SAS](http://www.weaverize.com). All rights reserved. Contact: <dev@weaverize.com>.