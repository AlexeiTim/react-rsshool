var name = 'asdasd';

var user = {
  name: 'a113123',
  print() {
    console.log(`Hello, ${this.name}`)
  }
};


var other = user.print;
other();