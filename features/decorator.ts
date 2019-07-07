@classDecorator
class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boat's color is ${this.color}`
  }

  pilot(@parameterDecorator speed: string): void {
    if (speed === 'fast') {
      console.log("swish")
    } else {
      console.log("nothing")
    }
  }


}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor)
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index)

}
function testDecorator(target: any, key: string): void {
  console.log(target);
  console.log(key)

}
// function logError(errorMsg: string) {
//   return function (target: any, key: string, desc: PropertyDescriptor): void {
//     const method = desc.value;

//     desc.value = function () {
//       try {
//         method();
//       } catch (error) {
//         console.log(errorMsg)
//       }
//     }
//   }
// }
