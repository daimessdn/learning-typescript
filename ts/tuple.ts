// re-defined the person object before
//// with addition of role property: [number, string]
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];         // tuple
} = {
    name: "Sarah",
    age: 24,
    hobbies: ["Cooking", "Reading"],
    role: [2, "author"]              // [number, string]
};

// person.role.push("admin");           // EXCEPTION
// person.role[1] = 0;                  // ERROR element index 1 only receives string
// person.role = [0, "admin", "user"];  // ERROR only receives 2 elements [number, string]

console.log(person.role);