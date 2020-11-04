/* eslint-disable no-console */

var fs = require("fs");
var path = require("path");

var Buffer;

if (typeof Buffer === 'undefined')
  Buffer = require("buffer");

module.exports = {
  load: function(fn, binary){
    try {
      console.log("Processing: "+path.resolve(process.cwd(), fn));
      if (binary) return fs.readFileSync(path.resolve(process.cwd(), fn));
      return fs.readFileSync(path.resolve(process.cwd(), fn))+'';
    } catch (e) {return null;}
  },
  loadRaw: function(fn){
    try {
      return fs.readFileSync(path.resolve(process.cwd(), fn));
    } catch (e) {return null;}
  },
  save: function(fn,data){
    fs.writeFileSync(path.resolve(process.cwd(), fn),data);
  },
  saveRaw: function(fn,data){
    fs.writeFileSync(path.resolve(process.cwd(), fn),new Buffer(data));
  }
};
