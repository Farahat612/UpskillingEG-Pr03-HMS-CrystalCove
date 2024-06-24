import { useState } from "react"

/* eslint-disable @typescript-eslint/no-unused-vars */
const person1: Person = { name: 'Alice', age: 42 }
const person2: Person = { name: 'Bob', age: 42 }

// Inference

console.log(person1)

function greating() {
  console.log('Hello')
}

// void

function add(a: string, b: string) {
  return +(a + b)
}

interface Person {
  name: string
  age: number
}

type Person2 = {
  name: string
  age: number
}

type LastName = 'Ahmed' | 'Ali' | 'Mohamed'

type Age = 20 | 30 | 40

const personLastName: LastName = 'Mohamed'

interface Employee extends Person {
  salary: number
}

const employee1: Employee = {
  name: 'Alice',
  age: 42,
  salary: 100000,
}


  function MyComponent({setCount}: {setCount: React.Dispatch<React.SetStateAction<number>>}) {
    
  const[hname, setName] = useState<string | null >(null)

  const lastName15 = 'Ali'
  
  setName('ahmed')

  const FinalName = hname as string


  }





type femaleName = 'Aya' | 'Asmaa' | 'Sarah'

type maleName = 'Ali' | 'Mohamed' | 'Ahmed'

type Name = femaleName | maleName

// types

const person: Record<string, string | number> = {
  name: 'Alice',
  age: 42,
}

person.salary = 5000
person.mother = 'Sarah'

// {[key:string] : string | number}
// Record<string, string | number>

interface Car {
  model: string
  year?: number
  name: string
  price: number
}

const firstCar: Partial<Car> = {
  model: 'Toyota',
  year: 2020,
  name: 'Camry',
}

const secondCar: Readonly<Car> = {
  model: 'Toyota',
  name: 'Camry',
  price: 20000,
}

// Pick

interface Person6 {
  name: string
  age: number
  email: string
}

const person5: Pick<Person6, 'name' | 'age'> = { name: 'Alice', age: 42 }

// Omit

interface Person6 {
  name: string
  age: number
  email: string
}

const person6: Omit<Person6, 'email'> = { name: 'Alice', age: 42 }




// Generics

function loggerFun<TResponse>(a: TResponse) {
  console.log(a)
}



loggerFun<number>(5)








