import { Vector3 } from "three";

export const getVec3 = (v: [number, number, number] | Vector3) => {
  if (v instanceof Vector3) {
      return v;
  }
  return new Vector3(v[0], v[1], v[2]);
}