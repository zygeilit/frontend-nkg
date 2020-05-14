
let REQ_TOTAL = 0;
window.exports = [];
let exp_arr = [];

function require(arr, callback) {
    var req_list;
    if (Array.isArray(arr)) {
        req_list = arr;
    } else {
        req_list = [arr]
    }
    var req_len = req_list.length;
    for (let i = 0; i < req_len; i++) {
        let src = req_list[i]
        let $script = createScript(src, i);
        let $node = document.querySelector('head');

        (function ($script) {
            $script.onload = function () {
                REQ_TOTAL++;
                let script_index = $script.getAttribute('index');
                exp_arr[script_index] = exports;
                window.exports = [];
                if (REQ_TOTAL == req_len) {
                    callback && callback.apply(exports, exp_arr)
                }
            }
            $node.appendChild($script);
        })($script)
    }
}

function createScript(src, index) {
    let $script = document.createElement('script');
    $script.setAttribute('src', src);
    $script.setAttribute('index', index);
    return $script;
}