const Carro = function(brand, speed){
    this.brand = brand
    this.speed = speed
    this.accelerate = function(){
        this.speed = this.speed + 10
        //this.speed += 10
        console.log(this.speed)
    }
    this.slowDown = function(){
        this.speed = this.speed - 5
        console.log(this.speed)
    }
}

// - Data Carro1: "BMW" con una velocidad de 120 km/h
// - Data Carro2: "Mercedes" con una velocidad de 95 km/h

const Carro1 = new Carro('BMW', 120);
console.log(Carro1)
Carro1.accelerate()
Carro1.slowDown()

const Carro2 = new Carro('Mercedes', 95);
console.log(Carro2)
Carro2.accelerate()
Carro2.slowDown()