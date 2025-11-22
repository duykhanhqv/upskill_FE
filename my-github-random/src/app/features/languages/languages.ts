import { Component } from '@angular/core';

@Component({
  selector: 'app-languages',
  imports: [],
  templateUrl: './languages.html',
  styleUrl: './languages.css',
})
export class Languages {
  openListLanguages(){
    console.log("cccccccccccccccccccccccccccccccc")
    const dropdownListElement = document.querySelector(".drowdown-list")
     if (dropdownListElement?.hasAttribute('hidden')) {
      dropdownListElement.removeAttribute('hidden');
    } else {
      dropdownListElement?.setAttribute('hidden', '');
    }
  }

}
