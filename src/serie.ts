import { Category } from "./category.js";
import { Director } from "./director.js";
import { Actor } from "./actor.js";
import { Platform } from "./platform.js";

class Series {
  private series: SeriesInfo[];
  private currentId: number;


  constructor() {
    this.series = [];
    this.currentId = 1;
  }

  getAllSeries(): SeriesInfo[] {
    return this.series;
  }

  getSeriesDetail(seriesId: number): SeriesInfo | undefined {
    return this.series.find((series) => series.id === seriesId);
  }

  createSeries(seriesData: SeriesInfo): void {
    const newSeriesId = this.generateUniqueId();
    seriesData.id = newSeriesId;
    this.series.push(seriesData);
  }

  addCategoryToSeries(seriesId: number, categoryId: number): void {
    const series = this.getSeriesDetail(seriesId);
    if (series) {
      series.categories.push(categoryId);
    }
  }

  addActorToSeries(seriesId: number, actorId: number): void {
    const series = this.getSeriesDetail(seriesId);
    if (series) {
      series.actors.push(actorId);
    }
  }

  addDirectorToSeries(seriesId: number, directorId: number): void {
    const series = this.getSeriesDetail(seriesId);
    if (series) {
      series.directors.push(directorId);
    }
  }

  private generateUniqueId(): number {
    const uniqueId = this.currentId;
    this.currentId++; // Incrementar el contador para el siguiente ID
    return uniqueId;
  }
}

interface SeriesInfo {
  id: number;
  name: string;
  image: string;
  categories: number[];
  directors: number[];
  actors: number[];
  episodes: Episode[];
  platformId: number;
}

interface Episode {
  name: string;
  summary: string;
  duration: number;
}

export { Series, SeriesInfo };