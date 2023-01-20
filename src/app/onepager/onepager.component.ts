import { Component } from '@angular/core';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { faDoorClosed } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-onepager',
  templateUrl: './onepager.component.html',
})
export class OnepagerComponent {
  faDoorOpen = faDoorOpen;
  faDoorClosed = faDoorClosed;

}
