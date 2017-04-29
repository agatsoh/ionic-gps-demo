import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { PlacesService } from '../../services/places.service';

@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

  constructor(private  placesService: PlacesService, public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPlacePage');
  }

  onAddPlace(value: {title: string}) {
    this.placesService.addPlace(value);
    this.navCtrl.pop();
  }


}
