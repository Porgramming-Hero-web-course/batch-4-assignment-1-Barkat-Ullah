type PersonDetails = {
  name: string;
  age: number;
  email: string;
};

function validateKeys<T extends PersonDetails>(
  obj: T,
  keys: (keyof T)[]
): boolean {
  return keys.every((key) => key in obj);
}

const obj = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(validateKeys(obj, ["name", "age"]));
