const makeMultiplier = function(factor) {

    return function(num) {
        //If we pass 2 as the factor, is it accurate to have a 
        // mental model such that:
        // let factor = 2 ==> as if this were written here? 
        return num * factor;
    };
};

const double = makeMultiplier(2); //What I'm struggling to brain is how double is able to know the value of factor.
console.log(double(5)); // which is why I used that mental model above.

const quadruple = makeMultiplier(4);
console.log(quadruple(5));