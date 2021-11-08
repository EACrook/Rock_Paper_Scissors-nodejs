class PlayerTwo {
    constructor(id, name, choice) {
        this.id = id;
        this.name = name;
        this.choice = choice;
    }

    getNameTwo() {
        return this.name;
    }

    getChoice() {
        return this.choice;
    }
}

module.exports = PlayerTwo;