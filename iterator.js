function someObj() {
    let a = 0;
    return {
        next() {
            if(a>10){
                return {
                    "done": true,
                    "value": a
                }            
            }
            a = a + 1;
            return {
                "done": false,
                "value": a-1
            }
        }
    }
}


const myIterable = {};
myIterable[Symbol.iterator] = someObj

console.log(9,...myIterable)


//Now myIterable Object can be iterated over for..of construct
//for (const i of myIterable) {
  //  console.log(i)
//}
