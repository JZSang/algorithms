var circularPermutation = function(n, start) {
    let set = new Set([start]);
    let finish = []
    let ans = [start];
    function backtrack(num) {
        if (ans.length >= 2 ** n) {
            for (let i = 0; i < n; i++) {
                if (num ^ (1 << i) === ans[0]) {
                    finish = ans.slice();
                }
                
            }
            return;
        }
        for (let i = 0; i < n; i++) {
            let prod = num ^ (1 << i);
            if (set.has(prod)) continue;
            set.add(prod);
            ans.push(prod);
            backtrack(prod);
            ans.pop();
            set.delete(prod);
            if (finish.length) return;
            
        }
    }
    backtrack(start);
    return finish;
};

console.log(circularPermutation(16, 25768))