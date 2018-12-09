const findNameLength = (firstName: string, lastName: string): { fullName: number, greaterLength: string } => {
  const greaterLength: string = firstName > lastName ? firstName : lastName;
  const fullName: number = firstName.length + lastName.length;

  return { fullName, greaterLength};
}

console.log(findNameLength("sdjssdjlkdjklsd", "Saxena"));

let myAge: number | string = 27; //You may also chain more than 2 types!
myAge = "27";

