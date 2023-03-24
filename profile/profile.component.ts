import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
@Output() removeProfile = new EventEmitter();
@Input() name = ''
@Input() status = ''
@Input() avatar = ''
}
