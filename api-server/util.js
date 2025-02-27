function getMinNumber(num1,num2){
    if((isNaN(num1) || isNaN(num2))){
        return {
            status: 400,
            data: {
                error: "Both parameters should be numbers"
            },
        };
    };
    return{
        status: 400,
        data: {
            min: Math.min(num1,num2)
        },
    };
}

function getMaxNumber(num1,num2){
    if((isNaN(num1) || isNaN(num2))){
        return {
            status: 400,
            data: {
                error: "Both parameters should be numbers"
            },
        };
    };

    return{
        status: 400,
        data: {
            max: Math.max(num1,num2)
        },
    };
}

function getMaxFromNumbers(numbers){


    if(numbers.some(isNaN)){
        return {
            status: 400,
            data: {
                error: "Please provide all numbers in valid type"
            },
        };
    };

    return{
        status: 400,
        data: {
            max: Math.max(...numbers)
        },
    };
}

function getAverageValue(numbers){
    if(numbers.some(isNaN)){
        return {
            status: 400,
            data: {
                error: "Please provide all numbers in valid type"
            },
        };
    };

    let sum = numbers.map(number => sum += number);

    return{
        status: 400,
        data: {
            avg: sum / numbers.length
        },
    };
}

function sortNumbers(numbers){
    if(numbers.some(isNaN)){
        return {
            status: 400,
            data: {
                error: "Please provide all numbers in valid type"
            },
        };
    };

    return{
        status: 400,
        data: {
            type: "Ascending Order",
            sort: numbers.sorted()
        },
    };
}

function countOccurrance(values,search){
    if(!values || !search){
        return {
            status: 400,
            data: {
                error: "Please provide both values and search occurrance"
            },
        };
    };
    return{
        status: 400,
        data: {
            count: values.count(search)
        },
    };
}

module.exports = {
    getMinNumber,
    getMaxNumber,
    getMaxFromNumbers,
    getAverageValue,
    sortNumbers,
    countOccurrance
};