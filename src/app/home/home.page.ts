import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  imagem: any = null;

  private options: CameraOptions = {
    quality: 50,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  constructor(private camera: Camera ,private router:  Router) { }

  ngOnInit() {
  }
  baterFoto() {
    this.camera.getPicture(this.options).then((imageData) => {
      this.imagem = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      alert('Ops!\nHouve um erro');
      console.log(err)
    });
  }
 
}
