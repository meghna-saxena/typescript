enum Color {
  Gray, //0
  Green = 100, //100
  Blue //101 (continues incrementing from the last no. of item prior to this one, so if we want it 2, 
}

let myColor: Color = Color.Blue;
console.log(myColor)