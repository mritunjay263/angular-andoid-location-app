import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-android-app';
  public getJioLocation:{latitude:number | null,longitude:number | null} ={latitude:null, longitude:null};
  ngOnInit(): void {
    this.printCurrentPosition();
  }

  // requestPermission =async () => {
  //   const res= await Geolocation.requestPermissions();
  //   console.log(res);
  // }

  printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    this.getJioLocation.latitude = coordinates.coords.latitude;
    this.getJioLocation.longitude = coordinates.coords.longitude;
    console.log('Current position:', this.getJioLocation);
  };

 /**
  * added into the AndroidManifest.xml
  * 
  *  <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
  *  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
  *  <uses-feature android:name="android.hardware.location.gps" />
  */

}
