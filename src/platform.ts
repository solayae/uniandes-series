export class Platform {
  private platforms: PlatformInfo[];
  private currentId: number;

  constructor() {
    this.platforms = [];
    this.currentId = 1;
  }

  getAllPlatforms(): PlatformInfo[] {
    return this.platforms;
  }

  getPlatformDetail(platformId: number): PlatformInfo | undefined {
    return this.platforms.find((platform) => platform.id === platformId);
  }

  createPlatform(platformData: PlatformInfo): void {
    const newPlatformId = this.generateUniqueId();
    platformData.id = newPlatformId;
    this.platforms.push(platformData);
  }

  private generateUniqueId(): number {
    const uniqueId = this.currentId;
    this.currentId++; // Incrementar el contador para el siguiente ID
    return uniqueId;
  }
}

interface PlatformInfo {
  id: number;
  name: string;
  website: string;
  plansAndPrices: PlanPrice[];
}

interface PlanPrice {
  plan: string;
  price: number;
}

export { PlatformInfo };
