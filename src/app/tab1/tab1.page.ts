import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  disableButton(element) {
    element.setAttribute('disabled', 'true');
  }

  toggleButtonColour(element) {
    const colour = element.getAttribute('color');
    if (colour === 'primary') {
      element.setAttribute('color', 'secondary');
    } else {
      element.setAttribute('color', 'primary');
    }
  }
}
