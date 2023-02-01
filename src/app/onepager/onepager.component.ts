import { Component } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { faDoorClosed } from '@fortawesome/free-solid-svg-icons';


library.add(faDoorClosed,faDoorOpen);

@Component({
  selector: 'app-onepager',
  templateUrl: './onepager.component.html',
})
export class OnepagerComponent {
  faDoorOpen = faDoorOpen;
  faDoorClosed = faDoorClosed;
}
