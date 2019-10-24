let find_pythagorean_triplets = function(arr) {
    arr.sort((a,b) => {
        return (a**2) - (b**2);
    })
    let ans = [];
    for (let i = arr.length-1; i >= 0; i--) {
        let j = i;
        let k = 0;
        let answer = arr[i] ** 2;
        while (k <= j) {
            if (arr[k] ** 2 + arr[j] ** 2 === answer) {
                ans.push([arr[k],arr[j],arr[i]]);
                k++;
                j--;
            } else if (arr[k] ** 2 + arr[j] ** 2 < answer) {
                k++;
            } else {
                j--;
            }
        }
    }
    console.log(ans);
    return ans;
};