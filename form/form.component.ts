import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Output() onForm = new EventEmitter();
nameInputValue = '';
statusInputValue = '';
avatarInputValue = '';

onName(event: any){
  this.nameInputValue = event.target.value;
}

onStatus(event: any){
  if(event.target.value.length >= 50){
    this.statusInputValue = event.target.value.slice(49);
    alert ('Only 50 characters!');

  }
  this.statusInputValue = event.target.value;
}

onAvatar(event: any){
  this.avatarInputValue = event.target.value;
}

addNewProfile(nameValue: string, statusValue: string, avatarValue:any){
  const value = {
    name: nameValue,
    status: statusValue,
    avatar: avatarValue,
  }
this.onForm.emit(value)
this.nameInputValue = '';
this.statusInputValue = '';
this.avatarInputValue = '';
}
}
