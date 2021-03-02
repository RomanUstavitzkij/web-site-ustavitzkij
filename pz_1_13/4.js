function createGreetable (name) {
    this.name = name;
}
createGreetable.prototype.greet = function(greeting) {
    return ${greeting}, ${this.name}!;
};
const g = new createGreetable('Oleg');
console.log(g)
console.log (g.greet("Hello"));