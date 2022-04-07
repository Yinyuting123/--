const Ajax = {
    get(url, callback) {
        let xhr = XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send();
        // 监听 onreadystatechange 事件
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 && xhr.status == 200) {
                callback(xhr.responseText)
            }
        }
    },
    post(url, data, callback) {
        let  xhr = XMLHttpRequest()
        // 第三个参数为是否异步执行
        xhr.open("POST", url, true)
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
        xhr.send(data)
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 && xhr.status == 200) {
                callback(xhr.responseText)
            }
        }
    }
}