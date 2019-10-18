function validator(string) {
    let stack = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "{") {
            stack.push("}");
        } else if (string[i] === "(") {
            stack.push(")");
        } else if (string[i] === "[") {
            stack.push("]");
        } else if (string[i] === ")" || string[i] === "}" || string[i] === "]") {
            if (stack.length === 0) return false // check if too many closers
            if (stack[stack.length-1] === string[i]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0; // check if too many openers
}

console.log(validator("{ [ ( ] ) }"))