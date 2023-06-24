"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Director = void 0;
class Director {
    constructor() {
        this.directors = [];
        this.currentId = 1;
    }
    getAllDirectors() {
        return this.directors;
    }
    getDirectorDetail(directorId) {
        return this.directors.find((director) => director.id === directorId);
    }
    createDirector(directorData) {
        const newDirectorId = this.generateUniqueId();
        directorData.id = newDirectorId;
        this.directors.push(directorData);
    }
    generateUniqueId() {
        const uniqueId = this.currentId;
        this.currentId++;
        return uniqueId;
    }
}
exports.Director = Director;
