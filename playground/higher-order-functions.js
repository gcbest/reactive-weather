// function one (name, location) {
//     console.log(name, location);
// }
//
// function two () {
//     console.log('Args', arguments);
//     one.apply(undefined, arguments);
// }
//
// two('Andrew', 'Philly');

var square = (num) => {
    return num * num;
};

var callAndLog = (func) => {
    return function () {
        var res = func.apply(undefined, arguments);
        console.log(res);
        return res;
    }
};



var squareAndLog = callAndLog(square);
squareAndLog(3);