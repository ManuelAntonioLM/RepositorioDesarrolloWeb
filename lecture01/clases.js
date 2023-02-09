//class Persona{
//    constructor(nombre, apellido){
//        this.nombre = nombre;
//       this.apellido = apellido;
//    }
//    quienSoy(){
//        console.log(`Hola, me llamo ${nombre} ${apellido}`);
//    }
//}
//const merik = new Persona('Merik','X');
//merik.quienSoy();

class Animal{
    constructor(nombre){
        this.velocidad = 0;
        this.nombre = nombre
    }
    empezoAmoverse(velocidad){
        this.velocidad = velocidad;;
        return `${this.nombre} se mueve conuna velocidad de ${this.velocidad} km/h`
    }
    seDetuvo(){
        this.velocidad = 0;
        return `${this.nombre} se detuvo y te mira`
    }
}

let animal = Animal('Animal');
console.log(animal.empezoAmoverse(20));