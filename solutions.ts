//Problem - 1
const filterEvenNumbers =(array : number[]) : number[]=>{
    return array.filter (num => num%2 ===0)
}

//Problem - 2

const reverseString=(str : string) : string =>{
    return str.split('').reverse().join('')
}

//Problem - 3

type StringOrNumber = string | number;

const checkType=(type : StringOrNumber ) : string =>
{
    if( typeof type === "string")
    {
        return "String";
    }
    else 
    {
        return "Number";
    }
}

//Problem - 4

const getProperty =<X extends object , K extends keyof X>(obj : X , key : K ): X[K] =>{
    return obj[key];
}
