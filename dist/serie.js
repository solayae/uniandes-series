"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Series = void 0;
class Series {
    constructor() {
        this.series = [];
        this.currentId = 1;
    }
    getAllSeries() {
        return this.series;
    }
    getSeriesDetail(seriesId) {
        return this.series.find((series) => series.id === seriesId);
    }
    createSeries(seriesData) {
        const newSeriesId = this.generateUniqueId();
        seriesData.id = newSeriesId;
        this.series.push(seriesData);
    }
    addCategoryToSeries(seriesId, categoryId) {
        const series = this.getSeriesDetail(seriesId);
        if (series) {
            series.categories.push(categoryId);
        }
    }
    addActorToSeries(seriesId, actorId) {
        const series = this.getSeriesDetail(seriesId);
        if (series) {
            series.actors.push(actorId);
        }
    }
    addDirectorToSeries(seriesId, directorId) {
        const series = this.getSeriesDetail(seriesId);
        if (series) {
            series.directors.push(directorId);
        }
    }
    generateUniqueId() {
        const uniqueId = this.currentId;
        this.currentId++;
        return uniqueId;
    }
}
exports.Series = Series;
