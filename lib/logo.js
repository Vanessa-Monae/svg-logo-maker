class Logo {
    constructor() {
        this.textContent = "";
        this.shapeContent = "";
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
    }
}