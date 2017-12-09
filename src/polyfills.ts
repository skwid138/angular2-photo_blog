// this will allow code to be used in older browsers 
// and will likely be similar in most angular applications
// tsconfig.json is for typescript, but works better with webpack 
// and will likely be the same in most angular apps

// libs
import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');

if (process.env.ENV === 'release') {
    // Release
} else {
    // Develop
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}