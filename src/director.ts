class Director {
  private directors: DirectorInfo[];
  private currentId: number;


  constructor() {
    this.directors = [];
    this.currentId = 1; // Inicializar el contador en 1


  }

  getAllDirectors(): DirectorInfo[] {
    return this.directors;
  }

  getDirectorDetail(directorId: number): DirectorInfo | undefined {
    return this.directors.find((director) => director.id === directorId);
  }

  createDirector(directorData: DirectorInfo): void {
    const newDirectorId = this.generateUniqueId();
    directorData.id = newDirectorId;
    this.directors.push(directorData);
  }

  private generateUniqueId(): number {
    const uniqueId = this.currentId;
    this.currentId++; // Incrementar el contador para el siguiente ID
    return uniqueId;
  }
}

interface DirectorInfo {
  id: number;
  name: string;
  photo: string;
  description: string;
  series: number[];
}

export { Director, DirectorInfo };
