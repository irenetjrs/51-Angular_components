import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  profile = {
    name: '',
    status: '',
    avatar: ''
  }
  addProfile(newProfile: any){
    this.profile.name = newProfile.name;
    this.profile.status = newProfile.status;
    this.profile.avatar = newProfile.avatar;
  }
  removeProfile(){
    this.profile.name = '';
    this.profile.status = '';
    this.profile.avatar = '';
  }
}
