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
  selector: 'app-electronica',
  templateUrl: './electronica.page.html',
  styleUrls: ['./electronica.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, ActividadComponent],
})
export class ElectronicaPage {
  private navCtrl = inject(NavController);

  readonly actividades: readonly Actividad[] = [
    {
      id: 'resistencias-paralelo-1',
    titulo: 'Dos resistencias en paralelo',
    dificultad: 'BASICO',
    resumen: 'Calcular y medir la resistencia equivalente de dos resistencias iguales en paralelo.',
    recursos: ['2 resistencias de 220Ω', 'Protoboard', 'Multímetro'],
    pasos: [
      'Conecta las dos resistencias en paralelo en la protoboard',
      'Calcula la equivalente con Req = (R1 × R2) / (R1 + R2)',
      'Mide con el multímetro en modo ohmios',
    ],
    comprobacion: 'La medición es cercana a 110Ω (la mitad de 220Ω).',
    },
    {
      id: 'resistencias-paralelo-2',
    titulo: 'Dos resistencias en paralelo 2',
    dificultad: 'INTERMEDIO',
    resumen: 'Calcular y medir la resistencia equivalente de dos resistencias iguales en paralelo.',
    recursos: ['2 resistencias de 220Ω', 'Protoboard', 'Multímetro'],
    pasos: [
      'Conecta las dos resistencias en paralelo en la protoboard',
      'Calcula la equivalente con Req = (R1 × R2) / (R1 + R2)',
      'Mide con el multímetro en modo ohmios',
    ],
    comprobacion: 'La medición es cercana a 110Ω (la mitad de 220Ω).',
    },
    {
      id: 'resistencias-paralelo-3',
    titulo: 'Dos resistencias en paralelo 3',
    dificultad: 'INTERMEDIO',
    resumen: 'Calcular y medir la resistencia equivalente de dos resistencias iguales en paralelo.',
    recursos: ['2 resistencias de 220Ω', 'Protoboard', 'Multímetro'],
    pasos: [
      'Conecta las dos resistencias en paralelo en la protoboard',
      'Calcula la equivalente con Req = (R1 × R2) / (R1 + R2)',
      'Mide con el multímetro en modo ohmios',
    ],
    comprobacion: 'La medición es cercana a 110Ω (la mitad de 220Ω).',
    }
    
  ];

  mostarInstrucciones(miActividad: Actividad):void {
    this.actividadActiva = miActividad;
  }
  actividadActiva: Actividad | null = null;

  volver() {
    this.navCtrl.navigateBack('/home');
  }
}