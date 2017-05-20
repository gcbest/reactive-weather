var names = ['Me', 'Him', 'Her'];

var person = {
    name: 'Goff',
    greet: function () {
        names.forEach(function(name) {
            console.log(`${this.name} says hi to ${name}` );
        });
    }
};

// arrow functions take the this of their parent

person.greet();