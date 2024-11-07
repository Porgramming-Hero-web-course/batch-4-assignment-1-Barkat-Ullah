type Person = {
  name: string;
  age: number;
};

type personDetails = keyof Person;

function getProperty<A, B extends keyof A>(obj: A, key: B) {
    return obj[key]
}


const person = { name: "Alice", age: 30 };
// console.log(getProperty(person, "name"));



