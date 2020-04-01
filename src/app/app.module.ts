import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IonicStorageModule } from '@ionic/storage';
import { AuthGuardService } from './core/services/auth-guard.service';
import { AuthenticationService } from './core/services/authentication.service';


/** 
 * Animation
*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** 
 * Get Camera 
*/
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

/** 
 * Get Current Address and tracking
*/
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

/**
 * For modal purpose
 */
import { OtpVerificationPageModule } from './auth/otp-verification/otp-verification.module';
import { ForgotPasswordModalPageModule } from './auth/forgot-password-modal/forgot-password-modal.module';
import { PasswordModalPageModule } from './auth/password-modal/password-modal.module';
import { TourDetailsPackagePageModule } from './layout/tour-travels/tour-details-package/tour-details-package.module';
import { RouteStoppageModalPageModule } from './layout/office-pool-car-service/route-stoppage-modal/route-stoppage-modal.module';


/**
 * For Network conection
 */
import { Network } from '@ionic-native/network/ngx';

/**
 * For Firebae Notification
 */
import { FirebaseX } from '@ionic-native/firebase-x/ngx';

import { Device } from '@ionic-native/device/ngx';

import { LocalNotifications } from '@ionic-native/local-notifications/ngx';


/**
 * For social Sharing
 */
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

/**
 * For copy to clipboard
*/
import { Clipboard } from '@ionic-native/clipboard/ngx';
/**
 * For FontAwesomeModule
 */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

/**
 * For phonecall
 */
import { CallNumber } from '@ionic-native/call-number/ngx';
/**
 * For sms
 */
import { SMS } from '@ionic-native/sms/ngx';
/**
 * For Email
 */
import { EmailComposer } from '@ionic-native/email-composer/ngx';
/**
 * For Trakcking
 */
import { environment } from '../environments/environment';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation/ngx';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

/**
 * For search selectable
 */
import { IonicSelectableModule } from 'ionic-selectable';
/**
 * Bar Code Scanner (Qr code)
 */
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

import { Insomnia } from '@ionic-native/insomnia/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    TourDetailsPackagePageModule,
    OtpVerificationPageModule,
    FontAwesomeModule,
    ForgotPasswordModalPageModule,
    PasswordModalPageModule,
    RouteStoppageModalPageModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    IonicSelectableModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthGuardService,
    AuthenticationService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera,
    File,
    WebView,
    FilePath,
    BackgroundGeolocation,
    Geolocation,
    NativeGeocoder,
    Network,
    FirebaseX,
    Device,
    LocalNotifications,
    SocialSharing,
    Clipboard,
    CallNumber,
    SMS,
    EmailComposer,
    BarcodeScanner,
    FileTransfer,
    Insomnia

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
