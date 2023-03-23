
function someObj() {
    let a = 0;
    return {
        next() {
            if (a > 3) {
                return {
                    "done": true,
                    "value": a
                }
            }
            a = a + 1;
            return {
                "done": false,
                "value": a
            }
        }
    }
}

const myIterable = {};
myIterable[Symbol.iterator] = someObj

console.log(9,...myIterable)
