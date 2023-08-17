"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Command {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
}
exports.default = Command;
