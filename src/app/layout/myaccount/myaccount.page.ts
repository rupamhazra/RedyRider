import { Component, OnInit, } from '@angular/core';
import { ModalService } from '../../core/services/modal.service';
import { ToasterService } from '../../core/services/toaster.service';
import { LoadingService } from '../../core/services/loading.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { RouteStoppageModalPage } from '../office-pool-car-service/route-stoppage-modal/route-stoppage-modal.page';
import { LoginRegisterService } from '../../core/services/login-register.service';
import { OfficePoolCarService } from '../../core/services/office-pool-car.service';
import { Events, ActionSheetController, Platform } from '@ionic/angular';
import { File } from '@ionic-native/File/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { environment } from '../../../environments/environment';
import { AlertService } from '../../core/services/alert.service';

declare var cordova: any;
@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.page.html',
  styleUrls: ['./myaccount.page.scss', '../layout.page.scss'],
})
export class MyaccountPage implements OnInit {
  visible_myaccount_details_div: boolean;
  name: any = '';
  user_details: any = {};
  contact: string;
  userId: string;
  device_details: any = [];
  address_details: any = {};
  progress_bar: boolean = true;
  lastImage: any;
  currentDate: any;
  profile_img: any;
  constructor(
    public modalService: ModalService,
    private storage: Storage,
    private router: Router,
    private loginRegisterService: LoginRegisterService,
    private toasterService: ToasterService,
    private loadingService: LoadingService,
    private officePoolCarService: OfficePoolCarService,
    public myaccount_event: Events,
    public actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    private transfer: FileTransfer,
    public platform: Platform,
    private filePath: FilePath,
    private file: File,
    private alertService: AlertService,
    public my_account_event: Events,
  ) {
  }
  ngOnInit() {
    this.myaccount_event.subscribe('profile_update', (data) => {
      console.log('data', data)
      if (data.which == 'personal') {
        this.getData('myaccount-personal', data.user_id);
      } else {
        this.getData('myaccount-address', data.user_id);
      }
    });
    this.storage.get('USER_INFO').then((val) => {
      if (val) {
        this.userId = val.id;
        this.name = val.name
        this.contact = val.mobile
        this.device_details = val.user_device;
        this.profile_img = val.photo;
        this.getData('myaccount-address', val.id);
        this.getData('myaccount-personal', val.id);
        this.visible_myaccount_details_div = true
      }
      else {
        this.visible_myaccount_details_div = false
      }
    });
  }
  openModal(which) {
    let data = { 'from_which_page': which, 'userId': this.userId }
    this.modalService.openModal(RouteStoppageModalPage, data, 'stoppage_modal_css');
  }
  openModal1(which) {
    console.log('which', which)
    let data = { 'from_which_page': which, 'userId': this.userId }
    this.modalService.openModal(RouteStoppageModalPage, data, 'stoppage_modal_css');
  }
  changePassword(resendOtp: boolean = false) {
    this.loadingService.present();
    let request_data = { 'type': 'log_by_otp', 'contact': this.contact }
    this.loginRegisterService.loginService(request_data).subscribe(
      res => {
        this.loadingService.dismiss();
        this.router.navigateByUrl('/forgot-password')
      },
      error => {
        this.loadingService.dismiss();
        this.toasterService.showToast(error.error.msg, 2000)
      }
    );
  }
  getData(which, user_id) {
    if (which == 'myaccount-personal') {
      this.progress_bar = true;
      let request_data = { "user_id": user_id };
      this.officePoolCarService.personalService(request_data).subscribe(
        res => {
          this.user_details = res.result;
          this.progress_bar = false;
        },
        error => {
          this.progress_bar = false;
          this.toasterService.showToast(error.error.msg, 2000)
        }
      );
    } else {
      let request_data = { "user_id": user_id };
      this.officePoolCarService.addressService(request_data).subscribe(
        res => {
          this.address_details = res.result;
          this.progress_bar = false;
        },
        error => {
          this.progress_bar = false;
          this.toasterService.showToast(error.error.msg, 2000)
        }
      );
    }
  }
  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      header: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    }).then(actionsheet => {
      actionsheet.present();
    });
  }
  takePicture(sourceType: PictureSourceType) {
    var options: CameraOptions = {
      quality: 60,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    this.camera.getPicture(options).then(imagePath => {
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          });
      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    });

  }
  private copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      this.lastImage = newFileName;

      this.uploadImage();
    }, error => {
      this.toasterService.showToast('Error while storing file.');
    });
  }
  private createFileName() {
    var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".png";
    return newFileName;
  }
  public uploadImage() {
    var targetPath = this.pathForImage(this.lastImage);
    var filename = this.lastImage;
    console.log('filename', filename)
    var today = new Date();
    this.currentDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var options = {
      fileKey: "profile_pic",
      fileName: filename,
      chunkedMode: false,
      params: { 'fileName': filename, 'upload_date': this.currentDate, 'user_id': this.userId, 'type': "update_photo", },
    };

    const fileTransfer: FileTransferObject = this.transfer.create()
    this.loadingService.present();
    fileTransfer.upload(targetPath, environment.apiEndpoint + 'usr/', options).then(data => {
      this.loadingService.dismiss()
      this.toasterService.showToast('Image succesful uploaded.', 3000);
      var userUpdateImg = JSON.parse(data.response);
      this.profile_img = userUpdateImg.result;

      this.storage.get('USER_INFO').then((val) => {
        let val1 = val;
        val1['photo'] = userUpdateImg.result;
        this.storage.set('USER_INFO', val1);
        this.my_account_event.publish('update_profile_image', '1');
      });
    }, err => {
      this.loadingService.dismiss()
      this.toasterService.showToast('Error while uploading file.', 3000);
    });
  }
  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return cordova.file.dataDirectory + img;
    }
  }
  logoutUser() {
    this.alertService.presentAlertConfirm("Are you sure you want to end this session?", "logout");
  }

}
