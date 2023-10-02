function pizzaOven(tipoCorteza, tipoSalsa, quesos, condimentos) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.condimentos = condimentos;
    return pizza;
}
    
var p1 = pizzaOven("estilo chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(p1);

var p2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones","aceitunas", "cebollas"])
console.log(p2);

var p3 = pizzaOven("crocante", "de tomate", ["cheddar", "mozzarella"], ["pollo", "choclo", "champiñon"])
console.log(p3)

var p4 = pizzaOven("fina", "BBQ", "provolone", ["pepperoni", "cebolla"])
console.log(p4)