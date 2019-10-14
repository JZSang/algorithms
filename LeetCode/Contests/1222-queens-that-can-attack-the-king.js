
/*
On an 8x8 chessboard, there can be multiple Black Queens and one White King.

Given an array of integer coordinates queens that represents the positions of the Black Queens, and a pair of coordinates king that represent the position of the White King, return the coordinates of all the queens (in any order) that can attack the King.
*/

/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function(queens, king) {
    let ans = [];
    let eight = new Array(8);
    for (let i = 0; i < eight.length; i++) {
        eight[i] = [500, 500];
    }
    for (let i = 0; i < queens.length; i++) {
        diagonal(queens[i], king, eight)
        straight(queens[i], king, eight)
    }
    for (let i = 0; i < eight.length; i++) {
        if (eight[i][2]) {
            ans.push(eight[i][2])
        }
    }
    return ans;
};

var adjust = function(eight, x, y, queen, index) {
    if (!eight[index]) {
        eight[index][0] = Math.abs(x);
        eight[index][1] = Math.abs(y);
        eight[index][2] = queen;
    }
    else {
                if (eight[index][0] >= Math.abs(x) && eight[index][1] >= Math.abs(y)) {
                    eight[index][0] = Math.abs(x);
                    eight[index][1] = Math.abs(y);
                    eight[index][2] = queen;
                }
            }
}

var diagonal = function(queen, king, eight) {
    // 4 top right
    // 5 bottom right
    // 6 bottom left
    // 7 top left
    
    // If the absolute value of the vector components between queen and king are equal to each other then they are diagonal
    
    let x = queen[0] - king[0]
    let y = queen[1] - king[1]
    
    if (Math.abs(x) === Math.abs(y)) {
        // this is indeed something that is diagonal.
        if (x < 0 && y < 0) {
            // queen is in the top left
            adjust(eight, x, y, queen, 7);
        } else if (x < 0 && y > 0) {
            // queen if in the top right
            adjust(eight, x, y, queen, 4);
        } else if (x > 0 && y < 0) {
            // queen is bottom left
            adjust(eight, x, y, queen, 6);
        } else {
            // bottom right
            adjust(eight, x, y, queen, 5);
        }
    } else {
        return false;
    }
}

var straight = function(queen, king, eight) {
    // 0 top
    // 1 right
    // 2 down
    // 3 left
    let x = queen[0] - king[0]
    let y = queen[1] - king[1]
    
    if (Math.abs(x) === 0 || Math.abs(y) === 0) {
        // this is indeed something that is horizontal
        if (x < 0) {
            // queen is in the top left
            adjust(eight, x, y, queen, 0);
        } else if (y > 0) {
            // queen if in the top right
            adjust(eight, x, y, queen, 1);
        } else if (y < 0) {
            // queen is bottom left
            adjust(eight, x, y, queen, 2);
        } else {
            // bottom right
            adjust(eight, x, y, queen, 3);
        }
    }
}