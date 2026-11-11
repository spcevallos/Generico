import { Component, inject } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  NavController,
} from '@ionic/angular';
import { ActividadComponent } from '../../components/actividad/actividad.component';
import { Actividad } from '../../models/actividad';

@Component({
  selector: 'app-programacion',
  templateUrl: './programacion.page.html',
  styleUrls: ['./programacion.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, ActividadComponent],
})
export class ProgramacionPage {
  private navCtrl = inject(NavController);

  actividades: Actividad[] = [
    {
      titulo: 'Hola mundo en TypeScript',
      dificultad: 'BASICO',
      resumen: 'Crear y ejecutar tu primer programa.',
      recursos: ['Node.js', 'VS Code'],
      pasos: ['Crea el archivo hola.ts', 'Escribe console.log("Hola")', 'Ejecútalo'],
      comprobacion: 'La consola muestra "Hola".',
    },
    {
      titulo: 'Funciones y arreglos',
      dificultad: 'INTERMEDIO',
      resumen: 'Recorrer un arreglo y aplicar una función a cada elemento.',
      recursos: ['Node.js', 'VS Code'],
      pasos: ['Declara un arreglo de números', 'Usa map para duplicarlos', 'Imprime el resultado'],
      comprobacion: 'Se imprime el arreglo con los valores duplicados.',
    },
  ];

  
  mostarInstrucciones(miActividad: Actividad):void {
    this.actividadActiva = miActividad;
  }
  actividadActiva: Actividad | null = null;


  volver() {
    this.navCtrl.navigateBack('/home');
  }
}