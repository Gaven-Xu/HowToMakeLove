## 1.install

install karma karmr-coverage jasmine --save-dev

## 2.karma Init
cmd:karma init;
then choose jasmine

## config karma.conf.js
```javascript
//modified
preprocessors: {
    './src/scripts/**/*.js':['coverage']
},

//modified
reporters: ['progress','coverage'],

//add
coverageReporter:{
    type:'html',
    dir:'./reports/'
}
```
