// Implement methods to track the max, min, mean, and mode

class TempTracker {
  constructor() {
    this.modeTracker = new Array(111).fill(0);
    this.mode = -1;
    this.modeCount = -1;
    
    this.length = 0;
    this.sum = 0;
    
    this.max = -1;
    this.min = 111;
  }
  
  
  insert(temperature) {
    if (temperature > this.max) {
      this.max = temperature;
    }
    if (temperature < this.min) {
      this.min = temperature;
    }
    this.length++;
    this.sum += temperature;
    this.modeTracker[temperature]++;
    if (this.modeTracker[temperature] > this.modeCount) {
      this.modeCount = this.modeTracker[temperature];
      this.mode = temperature;
    }
  }

  getMax() {
    return this.max;
  }

  getMin() {
    return this.min;
  }

  getMean() {
    return (this.sum)/(this.length);
  }

  getMode() {
    return this.mode;
  }
}

















// Tests

const t = new TempTracker();

// Step 1
t.insert(50);
assertEquals(t.getMax(), 50, 'step 1 - max');
assertEquals(t.getMin(), 50, 'step 1 - min');
assertEquals(t.getMean(), 50, 'step 1 - mean');
assertEquals(t.getMode(), 50, 'step 1 - mode');

// Step 2
t.insert(80);
assertEquals(t.getMax(), 80, 'step 2 - max');
assertEquals(t.getMin(), 50, 'step 2 - min');
assertEquals(t.getMean(), 65, 'step 2 - mean');
assertEquals(t.getMode() === 50 || t.getMode() === 80, true, 'step 2 - mode');

// Step 3
t.insert(80);
assertEquals(t.getMax(), 80, 'step 3 - max');
assertEquals(t.getMin(), 50, 'step 3 - min');
assertEquals(t.getMean(), 70, 'step 3 - mean');
assertEquals(t.getMode(), 80, 'step 3 - mode');

// Step 4
t.insert(30);
assertEquals(t.getMax(), 80, 'step 4 - max');
assertEquals(t.getMin(), 30, 'step 4 - min');
assertEquals(t.getMean(), 60, 'step 4 - mean');
assertEquals(t.getMode(), 80, 'step 4 - mode');

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}