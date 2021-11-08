class PlayerOne {
    constructor(id, name, choice) {
        this.id = id;
        this.name = name;
        this.choice = choice;
    }

    getName() {
        return this.name;
    }

    getChoice() {
        return this.choice;
    }
}


module.exports = PlayerOne;