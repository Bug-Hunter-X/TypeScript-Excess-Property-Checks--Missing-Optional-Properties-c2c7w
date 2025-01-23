function printName(person: {firstName: string, lastName?: string}): void {
  console.log(person.firstName + ' ' + person.lastName);
}

let person1 = { firstName: 'John' };
printName(person1); // This will work fine

let person2 = { firstName: 'Jane', age: 30 };
printName(person2); // This will also work fine. TS ignores extra properties

let person3 = { lastName: 'Doe' };
printName(person3); // TS error: Property 'firstName' is missing in type '{ lastName: string; }' but required in type '{ firstName: string; lastName?: string; }'