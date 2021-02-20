// direct-state object
// composed of name: string and age: number
const person: {
	name: string;
	age: number;
	hobbies: string[];              // array of string
} = {
	name: "Sarah",
	age: 24,
	hobbies: ["Cooking", "Reading"] // string[]
};

console.log(person.name);

// defined favoriteActivities
//// as an array of string
let favoriteActivities: string[];

// favoriteActivities = "Sports";        // ERROR since receives array (string) only
favoriteActivities = ["Sports"];         // VALID
// favoriteActivities = ["Sports", 1];   // ERROR since the array only receives strings

// hobby is infered as string
//// since person.hobbies is string[]
for (const hobby of person.hobbies) {
	console.log(hobby);
	console.log(hobby.toLowerCase());
}