[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=16982817&assignment_repo_type=AssignmentRepo)

**<u>Union and Intersection Types in TypeScript</u>**

## Union Types: In Typescript , Union types can allow a variable or function accept multiple types ,These types enable more flexible and powerful type checks in TypeScript, helping developers ensure correctness while keeping code versatile.

### For an example :

type CombineBlog = string | number;

function combineBlog(param1: Combinable, param2: Combinable) {
if (typeof param1 === 'string' && typeof param2 === 'string') {
return param1 + param2;
} else {
return param1 + param2;
}
}

## Intersection Type : In Typescript, An intersection type combines multiple types into a single type that includes all properties of both types.

### For an example : 
type Person = { name: string };
type Manager = Person & { department: string };

const manager: Manager = {
    name: "Alice",
    department: "Engineering"
};

function getManagerInfo(manager: Manager) {
    console.log(`Manager ${manager.name} from ${manager.department} department .`);
}

getManagerInfo(manager)