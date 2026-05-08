const filterEvenNumbers =(array : number[]) : number[]=>{
    return array.filter (num => num%2 ===0)
}


const reverseString=(str : string) : string =>{
    return str.split('').reverse().join('')
}
