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

function getAverageNumber(numbers){
    
}

function sortNumbers(numbers){
    
}

function countOccurrance(numbers){
    
}

module.exports = {
    getMinNumber,
    getMaxNumber
};