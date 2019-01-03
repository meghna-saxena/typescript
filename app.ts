let complex: {data: number[], output: (all: boolean) => number[]} = {
  data: [100, 3.99, 10],

  output: function(all: boolean): number[] {
    return this.data;
  }
};


let variable = "test";
console.log(variable);

variable = "another value";
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);