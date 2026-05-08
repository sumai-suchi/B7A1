# How Do Generics Make Code Reusable and Strictly Typed in TypeScript?

# Introduction 

TypeScript generics allow us to write flexible and reusable code while maintaining strict type safety.
It lets us create templates that works with different types without losing type checking. In this blog we 
will learn about how generics help us achieve code reusability and type checking in the same time.

## Body 

In JavaScript, we can use variables to store different types of data. Similarly, in TypeScript, we use generics so that we can reuse a function for different data types.Here, we use `T` as a generic type, which represents the type of the passed data. It can handle any data type such as string, number, object, or array.

### 1. A normal Generic Function :


Example :
    ```
       fuction nameofTheFunction<T> (value : T) : T {
         return value;
         }
    ```

Generic can be used in many different ways in typeScript. such as generic functions, arrays, objects, constraints and interface.
---


Example :
#### a. Generic array Fuction :
               
               ```

                  function getFirstElement<T>(arr: T[]): T 
                         {
                            return arr[0];
                        }
               ```
               
Here , we can use any kind of array. It can be array of number , it can be array of string or array of object.

#### b. Generic object Fuction ;
               ```
                   function getObjectvalue <T , K extends of T>(Obj : T , Key : K) : T[K] {
                     
                     return Obj[Key];
                   }

               ```
Here, we can pass any object because the above function is reusable for any object.Also it will prevent invalid key
and ensure exact return type.

#### c. Generic With constraint:
            ```
              type StudentInfo ={
                   id : number;
                   name : string;
                   dateOfBirth : string;
                   class : string;
                               }


                   const addStudentToCourseData=  <T extends StudentInfo>(studentInfo : T)=>{
                       return {
                           CourseName : "Next level",
                           ...studentInfo
                       }
                   }
            ```
            
Here, we use generic with constraint where we can pass any information of student but the studentInfo 
parameter has to contain StudentInfo Type data in it.

### d. Generic with interface :

          ```  
             interface ApiResponse <T>{
                Data : T;
             }
          ```
Here, In real use case generic interface helps us in api data handling. we can make a data interface of any data type through 
generic interface.

---



### Conclusion 

Generics in TypeScript are a powerful feature that help us write code that is both reusable and strictly typed at the same time. 
Instead of writing separate functions or types for different data structures, we can use generics to create a single flexible 
solution that works with multiple data types.In short, generics allow us to write smarter code—not just reusable code, but also
 safer and more predictable code.