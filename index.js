// re-defined the person object before
//// with modification of role property: enum
// defined enum Role
// enum Role { ADMIN, READ_ONLY, AUTHOR };
// //            0        1         2
// you can specify the enum value
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 500] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
;
//              "ADMIN"           500             "AUTHOR"         
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];         // tuple
// } = {
var person = {
    name: "Sarah",
    age: 24,
    hobbies: ["Cooking", "Reading"],
    role: Role.ADMIN // enum Role
};
// person.role.push("admin");           // EXCEPTION
// person.role[1] = 0;                  // ERROR element index 1 only receives string
// person.role = [0, "admin", "user"];  // ERROR only receives 2 elements [number, string]
console.log(person.role);
