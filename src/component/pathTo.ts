import { Vector3 } from "../utils";

export interface PathTo extends Vector3 {
  waypoints: string[]
}

export function pathToFactory(): PathTo {
  return { x: 0, y: 0, z: 0, waypoints: [] };
}
