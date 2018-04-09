// Copyright (c) 2018 Weaverize SAS <dev@weaverize.com>.

/**
 * Creates a function to synchronize multiple callbacks
 * @param {Number} targetCount number of call to wait before triggering callback
 * @param {function} callback function(err, data) to callback when correct number of calls is reached
 */
function syncer(targetCount, callback) {
	var cpt = 0;
	var values = [];
	var errors = [];
	return function (err, value) {
		errors.push(err);
		values.push(value);
		if (++cpt >= targetCount) {
			if (values.length > 1 || errors.length > 1) {
				callback(errors, values);
			}
			else {
				callback(error, value);
			}
		}
	};
}

module.exports = syncer;