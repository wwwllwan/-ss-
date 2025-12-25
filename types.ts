
export interface TreeConfig {
  particleCount: number;
  height: number;
  baseWidth: number;
  glowColor: string;
  speed: number;
}

export interface ParticleData {
  positions: Float32Array;
  colors: Float32Array;
  sizes: Float32Array;
}
