// 提前确认

let on = function () {
    if (document.addEventListener) {
        return function (element, event, handler) {
            if (element && event && handler) {
                element.addEventListener(event, handler, false)
            }
        }
    } else {
        return function (element, event, hander) {
            if (element && event && handler) {
                element.attachEvent('on' + event, hander)
            }
        }
    }
}

Function.prototype.bind = function (context) {
    let args = Array.prototype.slice.call(arguments, 1)
    return function () {
        return this.apply(context, args)
    }
}

let currying = function (fn) {
    let args = Array.prototype.slice.call(arguments, 1);
    return function () {
        let newArgs = args.concat(Array.prototype.slice.call(arguments))
        return fn.apply(this, newArgs)
    }
}

let currying1 = function (fn) {
    let args = Array.prototype.slice.call(arguments, 1);
    return function () {
        let newArgs = args.concat(Array.prototype.slice.call(arguments))
        return fn.apply(this, newArgs)
    }
}

const execCur = currying1(
    () => console.log(1),
    1, 2, 3
)
execCur(4, 5, 6)

let progressCurrying = function (fn, args) {
    let _this = this
    let len = fn.length
    args = args || []
    return function () {
        let _args = Array.prototype.slice.call(arguments)
        console.log(args, 'args')
        console.log(_args, '_args')
        Array.prototype.push.apply(args, _args);
        if (args.length < len) {
            return progressCurrying.call(_this, fn, _args)
        }
        return fn.apply(this, args)
    }
};

let execCur1 = progressCurrying((...args_) => {
    console.log(args_)
});
execCur1(1)(2)(3)(4)(5)(6)(9)

let argets = (...args) => {
    console.log(args)
}

function add () {
    let _args = Array.prototype.slice.call(arguments)
    let _addr = () => {
        // 这里的 arguments 是什么
        _args.push(...arguments)
        return _addr
    }                                                                                             
    _addr.toString = function() {
        return _args.reduce(function (prev, curent) {
            return prev + curent
        })
    }
    return _addr
}

add(1)(2)(3)                // 6
add(1, 2, 3)(4)             // 10
add(1)(2)(3)(4)(5)          // 15
add(2, 6)(1)  
