// First problem

function feetToMile(feet) {
    let result = (feet / 5280);
    return result + ' Miles';
};


// Second Problem

function woodCalculator(chair, table, bed) {
    let total = ((chair * 1) + (table * 3) + (bed * 5));
    return (total + ' cubic feet of woods');
};


// Third Problem

function brickCalculator(floorNumber){
    if (floorNumber <=10 && floorNumber >=1){
        let brickNumber = floorNumber * 15000;
        return brickNumber + ' bricks';
    }
    else if (floorNumber > 10 && floorNumber <= 20) {
        let brickNumber = ((floorNumber - 10) * 12000) + 150000;
        return brickNumber + ' bricks';
    }
    else if (floorNumber > 20){
        let brickNumber =((floorNumber - 20) * 10000) + 270000;
        return brickNumber + ' bricks';
    }
    else {
        return 'Please input a valid floor number!';
    }
};

// Fourth Problem

function tinyFriend(name) {
    let smallerName = name[0];
    for (let i = 0; i < name.length; i++) {
        let currentName = name[i];
        if(currentName.length < smallerName.length) {
            smallerName = currentName;
        }
    }
    return smallerName;
};




