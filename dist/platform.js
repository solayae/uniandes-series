"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Platform = void 0;
class Platform {
    constructor() {
        this.platforms = [];
        this.currentId = 1;
    }
    getAllPlatforms() {
        return this.platforms;
    }
    getPlatformDetail(platformId) {
        return this.platforms.find((platform) => platform.id === platformId);
    }
    createPlatform(platformData) {
        const newPlatformId = this.generateUniqueId();
        platformData.id = newPlatformId;
        this.platforms.push(platformData);
    }
    generateUniqueId() {
        const uniqueId = this.currentId;
        this.currentId++;
        return uniqueId;
    }
}
exports.Platform = Platform;
