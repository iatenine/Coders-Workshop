const { assert } = require("console");

//Should return 2
const testSlots = [
    [30, 75],
    [0, 50],
    [60, 150]
]

//Should return 3
const testSlots2 = [
    [0, 150],
    [10, 30],
    [45, 60],
    [25, 160]
]

function roomsNeeded(times){
    //Eliminate edge cases
    if(times.length === 0)
        return 0;

    //Make start times a non-factor
    times.sort(
        function compareFunction(a, b){
            if (a === b)
                return 0;
            else if (a > b)
                return 1;
            else
                return -1;
        }
    )

    //Decrease need for for-loop logic and avoid undefined comparison
    let rooms = [times.shift()[1]];

    for(let time in times){
        for(let room in rooms){
            //Compare start time but store end time
            if(rooms[room] < times[time][0]){
                rooms[room] = times[time][1]
                break;
            }
            //Only push if on final room and slot invalid
            else if(room == rooms.length -1){
                rooms.push(times[time][1])
            }
        }
    }

    //Uncomment to see table of rooms with final end time
    //console.table(rooms)

    return rooms.length
}

assert(roomsNeeded(testSlots) == 2)
assert(roomsNeeded(testSlots2) == 3)
console.log("Test cases passed")