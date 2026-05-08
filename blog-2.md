# How Do the Four Pillars of OOP Help Manage Logic and Reduce Complexity in Large-Scale TypeScript Projects?

---

## Introduction

Object-Oriented Programming (OOP) is a programming paradigm that helps developers structure code in a more organized and scalable way.  
In large-scale TypeScript projects, managing complexity becomes very important, and OOP provides four key pillars to solve this problem:

- Inheritance  
- Polymorphism  
- Abstraction  
- Encapsulation  

These principles help us write cleaner, reusable, and maintainable code.

---

## 1. Encapsulation (Hiding Internal Logic)

Encapsulation means **bundling data and methods inside a class and restricting direct access to some of the internal details**.

### How it helps:
- Protects data from unwanted changes
- Reduces complexity by exposing only necessary parts
- Improves maintainability

---

### Example:
```
class BankAccount {
  private balance: number = 0;

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}
```
Here, Balance is a private property you can not access it directly. You have to call the getBalance method to get the balance. Here the balance is encapsulated or protected.


## 2. Abstraction (Hiding Implementation Details)

Abstraction means **hiding the internal details of a class and exposing only the necessary parts to the outside world**.

### How it helps:
- Reduces complexity by exposing only necessary parts
- Improves maintainability

---

### Example:
```
abstract class Shape {
  abstract draw(): void;
}

class Circle extends Shape {
  draw(): void {
    console.log("Drawing a circle");
  }
}

const circle = new Circle();
circle.draw();
```
In this example, Shape is an abstract class that defines a common interface for different shapes. Circle is a concrete class that extends Shape and implements the draw method.

## 3. Inheritance (Reusing Code)

Inheritance means **allowing a class to inherit properties and methods from another class**.

### How it helps:
- Reduces code duplication
- Improves maintainability

---

### Example:
```
class Animal {
  move(): void {
    console.log("Moving");
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("Barking");
  }
}

const dog = new Dog();
dog.move();
dog.bark();
```
In this example, Animal is the parent class and Dog is the child class. Dog inherits the move method from Animal and adds the bark method.

## 4. Polymorphism (Handling Different Types)

Polymorphism means **allowing objects of different classes to be treated as objects of a common base class**.

### How it helps:
- Reduces code duplication
- Improves maintainability

---

### Example:
```
class Shape {
  draw(): void {
    console.log("Drawing a shape");
  }
}

class Circle extends Shape {
  draw(): void {
    console.log("Drawing a circle");
  }
}

class Rectangle extends Shape {
  draw(): void {
    console.log("Drawing a rectangle");
  }
}

const shapes: Shape[] = [new Circle(), new Rectangle()];
for (const shape of shapes) {
  shape.draw();
}

```
In this example, Shape is a base class that defines a common interface for different shapes. Circle and Rectangle are concrete classes
that inherit from Shape and implement the draw method.


# Conclusion

These four pillars of OOP help manage logic and reduce complexity in large-scale TypeScript projects.
By using encapsulation, abstraction, inheritance, and polymorphism, we can write cleaner, reusable, 
and maintainable code.


