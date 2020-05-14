const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
    this.currendState = PENDING;
    this.value = undefined;
    this.resolvedCallbacks = [];
    this.rejectedCallbacks = [];

    this.resolve = value => {
        if (value instanceof MyPromise) {
            return value.then(this.resolve, this.reject);
        }
        setTimeout(() => {
            if (this.currendState == PENDING) {
                this.currendState = RESOLVED;
                this.value = value;
                this.resolvedCallbacks.forEach(cb => cb());
            }
        })
    }

    this.reject = reason => {
        setTimeout(() => {
            if (this.currendState == PENDING) {
                this.currendState = REJECTED
                this.value = reason
                this.rejectedCallbacks.forEach(cb => cb())
            }
        })
    }

    try {
        fn(this.resolve, this.reject)
    } catch(e) {
        this.reject(e)
    }
}

MyPromise.prototype.then = function  (onResolved, onRejected) {
    let promise2;
    onResolved = typeof onResolved === 'function' ? onResolved : v => v;
    onRejected = typeof onRejected === 'function' ? onRejected : r => { throw r };

    if (this.currendState === RESOLVED) {
        return (promise2 = new MyPromise((resolve, reject) => {
            setTimeout(() => {
                let x = onResolved(this.value);
                resol
            })
        }))
    }
}

function resolutionProcedure(promise2, x, resolve, reject) {
    if (promise2 === x) {
        return reject(new TypeError("Error"))
    }
    if (x instanceof MyPromise) {
        if (x.currendState === PENDING) {
            x.then(function (value) {
                resolutionProcedure(promise2, value, resolve, reject)
            })
        } else {
            x.then(resolve, reject)
        }
    }
    let called = false
    if (x != null && (typeof x === 'object' || typeof x === 'function')) {
        try {
            let then = x.then
            if (typeof then === 'function') {
                then.call(
                    x,
                    y => {
                        if (called) return;
                        called = true;
                        resolutionProcedure(promise2, y, resolve, reject)
                    },
                    e => {
                        if (called) return
                        called = true;
                        reject(e)
                    }
                )
            } else {
                resolve(x)
            }
        } catch (e) {
            if (called) return;
            called = true;
            reject(e)
        }
    } else {
        resolve(x)
    }
}