'use strict';

var FORMAT_NAME = "ass";

//Compatible format
var ssa = (await import('./ssa.js')).default;

export default{
  name: FORMAT_NAME,
  helper: ssa.helper,
  detect: ssa.detect,
  parse: ssa.parse,
  build: ssa.build
};