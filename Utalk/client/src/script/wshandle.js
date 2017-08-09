window.utalk = window.utalk || {};
(function () {

    /**
     * websocket message handle object
     * @param  {[type]} _s [description]
     * @param  {[type]} _n [description]
     * @return [type]      [description]
     */
    var wsHandle = function (_s, _n) {
        this.socket = _s;
        this.nick = _n;
    }

    wsHandle.prototype = {
        listen: function (event, fn) {
            this.socket.on(event, fn)
        },
        clearInput: function (DOMArray, focusElement) {
            if (DOMArray instanceof Array) {
                for (let index = 0; index < DOMArray.length; index++) {
                    DOMArray[index].value = '';
                }
            } else {
                alert(DOMArray + '不是数组')
            }
            if (focusElement) {
                focusElement.focus();
            }
        },
        getDate: function (from, to, m) {

            let data = {
                from: from.value.toString().trim(),
                to: to.value.toString().trim() || 'all',
                m: m.value.toString().trim(),
                time: formatTime(new Date(), '-')
            }

            if (data.m.indexOf('@') == 0) {
                // console.log(data.m.match(/^@(\S+\s*)/));
                data.to = data.m.match(/^@(\S+\s*)/)[1].trim();
                data.m = data.m.match(/^@(\S+\s*)/).input.replace('@' + data.to, '');
                data.command = '@';
            }

            if (data.m.indexOf('>') == 0) {
                // console.log(data.m.match(/^@(\S+\s*)/));
                data.to = data.m.match(/^>(\S+\s*)/)[1].trim();
                data.m = data.m.match(/^>(\S+\s*)/).input.replace('>', '');
                data.command = '>';
                console.log(data)
            }

            return data;
        },
        getClients: function (container) {
            this.socket.emit('getClients', function (userlist) {
                console.log(userlist);
                container.innerHTML = `<option value="all" selected>all</option>`;
                for (var key in userlist) {
                    if (userlist.hasOwnProperty(key) && key != this.nick) {
                        container.innerHTML += `
                            <option value="${key}">${key}</option>
                        `;
                    }
                }
            }.bind(this));
        },
        sendMessage: function (obj, fn) {
            if (obj instanceof Object && fn instanceof Function) {
                this.socket.emit('message', obj, fn);
            }
        },
        sendLocalSearch: function (obj, fn) {
            if (obj instanceof Object && fn instanceof Function) {
                this.socket.emit('localSearch', obj, fn);
            }
        },
        formatImageSet: function (imgArray) {
            var self = this;

            if (imgArray instanceof Array) {

                let containerElement = document.createElement('div');
                containerElement.className = 'imgset remote';

                for (var i = 0; i < imgArray.length; i++) {

                    let imgElement = document.createElement('img');
                    imgElement.className = 'img img' + i;
                    console.log(imgArray[i].imgSrc);
                    imgElement.src = self.decodeBaiduImageUrl(imgArray[i].imgSrc);
                     console.log(imgElement.src);
                    imgElement.title = imgArray[i].title;
                    imgElement.setAttribute('test', imgArray[i].fromSite);

                    containerElement.appendChild(imgElement);

                    if (i == (imgArray.length - 1)) {
                        return containerElement;
                    }

                }

            } else {
                console.log('error');
            }



        },
        searchBaiduImage: function (word, fn) {
            var self = this;
            var xhr = new XMLHttpRequest();
            xhr.open('GET', "http://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&queryWord=" + word + "&cl=&lm=&ie=utf-8&oe=utf-8&adpicid=&st=&z=&ic=&word=" + word + "&s=&se=&tab=&width=&height=&face=&istype=&qc=&nc=&fr=&pn=60&rn=30&gsm=1e&1493171544246=", true);
            xhr.onreadystatechange = function () {

                if (xhr.readyState == 4 && xhr.status == 200) {

                    let baiduImgArray = JSON.parse(xhr.responseText).data;
                    console.log(baiduImgArray);

                    let result = [];
                    let tempImgObj = [];

                    for (let i = 0; i < baiduImgArray.length; i++) {
                        let title = baiduImgArray[i].fromPageTitleEnc;
                        let ls = baiduImgArray[i].replaceUrl ? (baiduImgArray[i].replaceUrl[1] ? baiduImgArray[i].replaceUrl[1] : baiduImgArray[i].replaceUrl[0]) : null;
                        if (ls) {
                            result.push({
                                title: title,
                                fromSite: ls.FromURL,
                                imgSrc: baiduImgArray[i].objURL
                                // imgSrc: ls.ObjURL
                            });
                        }
                        if (i == (baiduImgArray.length - 1)) {
                            fn(result)
                        }

                    }
                } else {
                    // console.log(xhr.readyState,xhr.status);
                    return null;
                }
            }
            xhr.send()

        },
        decodeBaiduImageUrl: function (_url) {

            var f = { w: "a", k: "b", v: "c", 1: "d", j: "e", u: "f", 2: "g", i: "h", t: "i", 3: "j", h: "k", s: "l", 4: "m", g: "n", 5: "o", r: "p", q: "q", 6: "r", f: "s", p: "t", 7: "u", e: "v", o: "w", 8: "1", d: "2", n: "3", 9: "4", c: "5", m: "6", 0: "7", b: "8", l: "9", a: "0", _z2C$q: ":", "_z&e3B": ".", AzdH3F: "/" };
            var url = _url;

            var h = /(_z2C\$q|_z&e3B|AzdH3F)/g;
            var e = url.replace(h, function (t, e) { return f[e] });

            var s = /([a-w\d])/g;
            e = e.replace(s, function (t, e) { return f[e] });
            return e;

        },
        showAlert: function (container, data) {
            var message = `
                <div class="remote">
                    <div class="name">
                        <span>Server</span><span class="time">${data.time}</span>
                    </div>
                    <div class="message">
                        <span>${data.m}</span>
                    </div>
                </div>
            `;
        },
        showSearchResult: function (container, data) {
            console.log(data)
            if (data.command && data.command == ">") {
                container.appendChild(data.m);
                container.scrollTop = container.scrollHeight;
                return true;
            }
        },
        showMessage: function (container, data, isRemote) {

            if (!isRemote) {
                var message = `
                    <div class="local">
                        <div class="name">
                            <span>${data.from}</span><span class="time">${data.time}</span>
                        </div>
                        <div class="message">
                            <span>${data.m}</span>
                        </div>
                    </div>
                    `;
            } else {
                var message = `
                    <div class="remote">
                        <div class="name">
                            <span>${data.from}</span><span class="time">${data.time}</span>
                        </div>
                        <div class="message">
                            <span>${data.m}</span>
                        </div>
                    </div>
                    `;
            }

            container.innerHTML += message;
            container.scrollTop = container.scrollHeight;
            return true;
        }
    }

    function formatTime(date, str) {
        if (typeof str == "string") {
            return date.getHours() + str + date.getMinutes() + str + date.getSeconds();
        } else {
            console.log('the second argument should be string');
        }
    }

    utalk.wsHandle = wsHandle;

})()
