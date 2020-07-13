const A=[2,3,9,2,5,1,3,7,10];
const B=[2,1,3,4,3,10,6,6,1,7,10,10,10];
let C=[];

const myFunction = (A, B) => {
    let helper = { };

    B.forEach(current => {
        if(helper.hasOwnProperty(current)) {
            helper[current]++
        } else {
            helper[current] = 1;
        }
    });

    C = A.filter(current => {
        if( helper[current] && !isPrimeNumber(helper[current]) ) {
            return current;
        } else if ( !helper[current] ) {
            return current
        }
    })
    
    return C;
}


const isPrimeNumber = number => {
    const square = Math.sqrt(number);

    for(let i = 2; i <= square; i++) {
        if(number % i === 0) {
            return false;
        }
    }
    
    return number > 1;
}

myFunction(A, B);