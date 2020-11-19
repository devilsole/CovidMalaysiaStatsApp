import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CovidComponent } from './covid/covid.component';
import { FormsModule } from '@angular/forms';
import { CovidService } from './services/covid.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MatSliderModule} from '@angular/material/slider';
import { ConnectionService } from './services/connection.service';

const firebaseConfig = {
  apiKey: "AIzaSyBkXKYfOu2WRvNMYeKgZPVr0zntIVgBw1A",
  authDomain: "covidmalaysiastats.firebaseapp.com",
  databaseURL: "https://covidmalaysiastats.firebaseio.com",
  projectId: "covidmalaysiastats",
  storageBucket: "covidmalaysiastats.appspot.com",
  messagingSenderId: "763223909964",
  appId: "1:763223909964:web:fb433cc7de7194369076e9",
  measurementId: "G-EN9T9QQ5TZ"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CovidComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage,
    MatSliderModule
  ],
  providers: [CovidService],
  bootstrap: [AppComponent]
})
export class AppModule { }