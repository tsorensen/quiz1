'use strict';

/**
 * @function fileExtension
 * @description gets the file extension from the given filename
 * @param {String} name - The name of the file
 * @return {String|Boolean} The extension (without the period) or false if no
 * extension
 */
module.exports = function fileExtension(name) {
	var ext = name.match(/\./) ? name.split('.').pop():'';
	return  ext ? ext:false;
};
