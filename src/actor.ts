export class Actor {
  private actors: ActorInfo[];
  private currentId: number;

  constructor() {
    this.actors = [];
    this.currentId = 1; // Inicializar el contador en 1

  }

  getAllActors(): ActorInfo[] {
    return this.actors;

  }

  getActorDetail(actorId: number): ActorInfo | undefined {
    return this.actors.find((actor) => actor.id === actorId);
  }

  createActor(actorData: ActorInfo): void {
    const newActorId = this.generateUniqueId();
    actorData.id = newActorId;
    this.actors.push(actorData);
  }

  private generateUniqueId(): number {
    const uniqueId = this.currentId;
    this.currentId++; // Incrementar el contador para el siguiente ID
    return uniqueId;
  }
}

interface ActorInfo {
  id: number;
  name: string;
  photo: string;
  description: string;
  series: number[];
}

export {  ActorInfo };
