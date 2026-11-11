import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  private navCtrl = inject(NavController);

  irAElectronica() {
    this.navCtrl.navigateForward('/electronica');
  }

  irAProgramacion() {
    this.navCtrl.navigateForward('/programacion');
  }
}
