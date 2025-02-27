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

module.exports = {getMinNumber};