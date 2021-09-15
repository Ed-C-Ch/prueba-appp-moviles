import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {

  scanActive = true;
  scanResult = null;
  @ViewChild('video', { static: false }) video: ElementRef;

  videoElement: any;

  constructor(private toastCtrl: ToastController) {}

  ngAfterViewInit(){
    this.videoElement = this.video.nativeElement;
  }

  async startScan(){
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {facingMode: 'environment'}
    });
    this.videoElement.srcObject = stream;
    this.videoElement.setAttribute('playsinline', true);
    this.videoElement.play();
  }

  stopScan(){
    this.scanActive = false;
  }

  reset(){
    this.scanResult = null;
  }

  async showQrToast(){
    const toast = await this.toastCtrl.create({
      message: `open ${this.scanResult}?`,
      position: 'top',
      buttons: [
        {
          text: 'open',
          handler: () => {
            window.open(this.scanResult, '_system', 'location=yes');
          }
        }
      ]
    });
    toast.present();
  }
}
