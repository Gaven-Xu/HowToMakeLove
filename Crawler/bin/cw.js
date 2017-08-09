#!/usr/bin/env node
const request = require('request');
const cheerio = require('cheerio');
const config = require('../package.json')['crawler'];
// const reg = /^(http|ftp|https):\/\/[\w\-\%]+(\.[\w\-\%]+)+([\x21-\x7e]*[\x21-\x7e])?$/;
// const reg = /^(http|ftp|https):\/\/[\w\-\%]+(\.[\w\-\%]+)+([\x21-\x7eA-Za-z0-9])*$/;
const reg = /^(http|ftp|https):\/\/[\w\-\%]+(\.[\w\-\%]+)+([\x21-\x7eA-Za-z0-9])*=[\w\W]+$/
const url_decode = /^(http|ftp|https):\/\/(.*)$/;
const head_0 = /^\/\//;             //  //
const head_1 = /^\//;              // /
const head_2 = /^\.\.\/|^\.\//;    // ./ ../
console.log(reg);

const allUrl = {}

{

    /**
     * [getAllUrl description]
     * @param  {string} _site website like: http://www.baidu.com
     * @param  {string} _url  url for now page like: http://www.baidu.com/?s=afadf&wd=web
     * @param  {array} _Urls array to store result
     * @return {array} _Urls
     */
    function getAllUrl(_site,_url,_Urls) {

        if(typeof _Urls != 'undefined'&&_Urls instanceof Object){
            var Urls = _Urls;
        }else{
            var Urls = [];
        }

        var protocol = url_decode.exec(_url)[1];
        var domain = url_decode.exec(_url)[2];

        request(_url, function(err, res, body) {
            console.log('error:', err);
            console.log('status code:', res && res.statusCode);
            // console.log(body);

            var $ = cheerio.load(body);

            var dom = $('.main_img').toArray();

            for (var i = 0; i < dom.length; i++) {

                // console.log(dom[i]);
                var the_link = dom[i].attribs.src;

                if (typeof the_link != 'undefined') {
                    if (reg.test(the_link)) {

                        // console.log('is absolute link ' + the_link);
                        Urls[the_link] = true;

                    }else if(head_0.test(the_link)){

                        // console.log('is no protocol' + the_link+'\n'+ protocol+ ':' + the_link);
                        Urls[protocol + the_link] = true;

                    }else if(head_1.test(the_link)){

                        // console.log('is root link' + the_link+'\n'+ _site + the_link);
                        Urls[_site + the_link] = true;

                    }else if(head_2.test(the_link)){

                        // console.log('is realative link' + the_link+'\n'+ _url + the_link);
                        Urls[_url + the_link] = true;

                    }
                    else {

                    }
                }

            }
            Urls[_url] = false;
            console.log(Urls); 
            return Urls;
        })
    }

    /**
     * 从地址对象中，移除忽略的部分
     * @param  {object} _urls        地址对象
     * @param  {array} _ignoreArray 忽略地址数组
     * @return {object}             清理过之后的对象
     * 2017/4/19 下午2:58:09
     */
    function removeIgnore(_urls, _ignoreArray) {
        for (var i = 0; i < _ignoreArray.length; i++) {
            for (var variable in _urls) {
                if (variable.indexOf(_ignoreArray[i]) != -1) {
                    delete _urls[variable];
                }
            }
        }
    }
}

var run = function() {
    var arg = arguments[0][0];
    var site = arg;
    if(typeof arg != "undefined"){

        console.log(arg);

        if(reg.test(arg)){
            getAllUrl(site,arg,allUrl);
        }else{
            console.log('参数格式不正确');
        }

    }else{
        console.log('参数不正确');
    }

}

run(process.argv.slice(2));
