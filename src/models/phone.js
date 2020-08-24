class Phone{
    /**
     * Esta es la clase de telefonos
     * @param {number} serial
     * @param {string} brand 
     * @param {string} name 
     * @param {string} capacity 
     * @param {string} price 
     */
    constructor(serial, brand, name, capacity, price){
        this.serial = serial
        this.brand = brand
        this.name = name
        this.capacity = capacity
        this.price = price
    }

    static showPhones() {
        return [
            new Phone(1, 'Samsung', 's8', '64gb', 700000),
            new Phone(2, 'Samsung', 's9', '64gb', 800000),
            new Phone(3, 'Samsung', 's10', '128gb', 900000),
            new Phone(4, 'Samsung', 's20', '256gb', 1200000),
            new Phone(5, 'Motorola', 'g7 plus', '64gb', 600000),
            new Phone(6, 'Motorola', 'g8 plus', '64gb', 800000),
            new Phone(7, 'Huawei', 'p20', '64gb', 500000),
            new Phone(8, 'Huawei', 'p30', '128gb', 800000),
            new Phone(9, 'Huawei', 'p40', '256gb', 2100000),
            new Phone(10, 'Iphone', '8s pro max', '128gb', 2000000),
            new Phone(11, 'Iphone', '11 pro max', '256gb', 5600000)
        ]
    }
}

/*
 * Aquí se exporta la clase Phone 
 */
module.exports = Phone