"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actor = void 0;
class Actor {
    constructor() {
        this.actors = [];
        this.currentId = 1;
    }
    getAllActors() {
        return this.actors;
    }
    getActorDetail(actorId) {
        return this.actors.find((actor) => actor.id === actorId);
    }
    createActor(actorData) {
        const newActorId = this.generateUniqueId();
        actorData.id = newActorId;
        this.actors.push(actorData);
    }
    generateUniqueId() {
        const uniqueId = this.currentId;
        this.currentId++;
        return uniqueId;
    }
}
exports.Actor = Actor;
