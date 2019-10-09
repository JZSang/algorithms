/*
You are on a flight and wanna watch two movies during this flight.
You are given List<Integer> movieDurations which includes all the movie durations.
You are also given the duration of the flight which is d in minutes.
Now, you need to pick two movies and the total duration of the two movies is less than or equal to (d - 30min).

Find the pair of movies with the longest total duration and return they indexes. If multiple found, return the pair with the longest movie.

Example 1:

Input: movieDurations = [90, 85, 75, 60, 120, 150, 125], d = 250
Output: [0, 6]
Explanation: movieDurations[0] + movieDurations[6] = 90 + 125 = 215 is the maximum number within 220 (250min - 30min)
*/

function solution(movieDurations, d) {
    d = d - 30;
    let obj = {};
    for (let i = 0; i < movieDurations.length; i++) {
        obj[movieDurations[i]] = i;
    }
    movieDurations.sort((a,b) => {
        return a - b;
    })

    let i = 0;
    let j = movieDurations.length-1;

    let indexes = [0,0];
    while (i <= j) {
        let currentI = movieDurations[i];
        let currentJ = movieDurations[j];
        if (currentI + currentJ <= d) {
            indexes = [i, j];
            i++;
        } else {
            j--;
        }
    }
    

    return [obj[movieDurations[indexes[0]]], obj[movieDurations[indexes[1]]]];
}

let movieDurations = [90, 85, 75, 60, 120, 150, 125];
let d = 250;

console.log(solution(movieDurations, d))