import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonBadge, IonTitle, IonButton } from '@ionic/angular';
import { Actividad } from '../../models/actividad';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.scss'],
  imports: [IonButton, IonTitle, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonBadge],
})
export class ActividadComponent {
  @Input({ required: true }) miActividad!: Actividad;
  @Output() seleccionada = new EventEmitter<Actividad>();

  selecionar():void {
    this.seleccionada.emit(this.miActividad);
  }
}