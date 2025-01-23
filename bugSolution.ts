function printName(person: {firstName: string, lastName?: string}): void {
  console.log(person.firstName + ' ' + (person.lastName || ''));
}

let person1 = { firstName: 'John' };
printName(person1); // This will work fine

let person2 = { firstName: 'Jane', age: 30 };
printName(person2); // This will also work fine. TS ignores extra properties

let person3 = { lastName: 'Doe' };
//let person3 = {lastName: 'Doe'};
printName(person3); // TS error: Property 'firstName' is missing in type '{ lastName: string; }' but required in type '{ firstName: string; lastName?: string; }'

// Solution:  Add a check to handle the missing firstName
function printNameSafe(person: {firstName?: string, lastName?: string}): void {
  const firstName = person.firstName || 'Unknown';
  const lastName = person.lastName || '';
  console.log(`${firstName} ${lastName}`);
}

printNameSafe(person1);
printNameSafe(person2);
printNameSafe(person3); // Works correctly now!
printNameSafe({}); //Also works correctly
