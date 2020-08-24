class Phone{
    /**
     * Esta es la clase de telefonos
     * 
     * @param {string} brand 
     * @param {string} name 
     * @param {string} capacity 
     * @param {string} price 
     */
    constructor(brand, name, capacity, price){
        this.brand = brand
        this.name = name
        this.capacity = capacity
        this.price = price
    }

    static showPhones() {
        return [
            new Phone('Samsung', 's8', '64gb', 700000),
            new Phone('Samsung', 's9', '64gb', 800000),
            new Phone('Samsung', 's10', '128gb', 900000),
            new Phone('Samsung', 's20', '256gb', 1200000),
            new Phone('Motorola', 'g7 plus', '64gb', 600000),
            new Phone('Motorola', 'g8 plus', '64gb', 800000),
            new Phone('Huawei', 'p20', '64gb', 500000),
            new Phone('Huawei', 'p30', '128gb', 800000),
            new Phone('Huawei', 'p40', '256gb', 2100000),
            new Phone('Iphone', '8s pro max', '128gb', 2000000),
            new Phone('Iphone', '11 pro max', '256gb', 5600000)
        ]
    }
}

/*
 * Aquí se exporta la clase Phone 
 */
module.exports = Phone