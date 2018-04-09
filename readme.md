# Syncer
Tool use to synchronize asynchronous callbacks together.
This calls the main callback when the correct number of calls is reached.

## Install
```
npm install --save callback_sync
```

## Example
Here is a small example on how to use this module
```js
const syncer = require("callback_sync");

var sync = syncer(4, function(err, val) {
	console.log("sync",err,val);
});

sync(null, 8);
sync(null, 6);
sync(new Error("erreur"), 10);
sync(null, 4);
```

## `#(targetCount, callback(err, data))`
This is the only function of the module.
- `targetCount` is the number of calls to wait before calling back.
- `callback` is the function to callback once the number is reached or there is an error
	- `err` is the error object (`null` if no error)
	- `data` is an array of values given through every callback (empty on error)

For every call to the returned method, the data and error will be aggregated in an array.

## Tips
This syncer can be used as a `callback(err, data)` to other asynchronous functions (it was build for this).

# Credit
Copyright (c) 2018, [Weaverize SAS](http://www.weaverize.com). All rights reserved. Contact: <dev@weaverize.com>.