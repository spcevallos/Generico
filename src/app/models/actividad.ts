export interface Actividad {
  id?: string;
  titulo: string;
  dificultad: 'BASICO' | 'INTERMEDIO';
  resumen: string;
  recursos: string[];
  pasos: readonly string[];
  comprobacion: string;
}