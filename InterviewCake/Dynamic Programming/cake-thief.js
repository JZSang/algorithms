function maxDuffelBagValue(cakeTypes, capacity) {
    let capacityArray = new Array(capacity + 1).fill(0);
    let maxValue = 0;
    capacityArray[0] = 0;
    for (let i = 1; i <= capacity; i++) {
        let max = 0;
        for (let c of cakeTypes) {
            if (i - c.weight >= 0) {
                max = Math.max(max, capacityArray[i-c.weight] + c.value);
            }
        }
        capacityArray[i] = max;
        maxValue = Math.max(maxValue, max);
    }
    return maxValue;
}

const cakeTypes = [
    { weight: 7, value: 160 },
    { weight: 3, value: 20 },
    { weight: 5, value: 0 },
  ];
  
  const capacity = 20;

console.log(maxDuffelBagValue(cakeTypes, capacity))