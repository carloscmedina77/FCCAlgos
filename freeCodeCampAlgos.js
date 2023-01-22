function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24) {  // Change this line
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

testLessOrEqual(10);

function testLogicalAnd(val) {
    // Only change code below this line

    if (val <= 50 && val >= 25) {

        return "Yes";

    }

    // Only change code above this line
    return "No";
}

testLogicalAnd(10);

function testLogicalOr(val) {
    // Only change code below this line

    if (val < 10 || val > 20) {
        return "Outside";
    }

    // Only change code above this line
    return "Inside";
}

testLogicalOr(15);

function testElse(val) {
    let result = "";
    // Only change code below this line

    if (val > 5) {
        return "Bigger than 5";
    } else {
        return "5 or Smaller";
    }

    // Only change code above this line
    return result;
}

testElse(4);

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }

    testElseIf(7);
}

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

orderMyLogic(7);

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes === 1) {
        return "Hole-in-one!";
    } else if (strokes === 2) {
        return "Eagle";
    } else if (strokes === 3) {
        return "Birdie";
    } else if (par === 4 && strokes === 4) {
        return "Par";
    } else if (par === 4 && strokes === 5) {
        return "Bogey";
    } else if (par === 4 && strokes === 6) {
        return "Double Bogey";
    } else if (par >= 4 && strokes >= 7) {
        return "Go Home!";
    } else if (par === 5 && strokes === 5) {
        return "Par";
    }
    // Only change code above this line
}

golfScore(5, 4);
