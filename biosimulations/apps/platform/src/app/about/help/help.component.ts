import { Component, Inject, OnInit } from '@angular/core';



@Component({
  selector: 'biosimulations-help',
  templateUrl: './help.component.html',
  styleUrls: ['../about.component.sass', './help.component.sass'],
})
export class HelpComponent  {



  scrollToElement($element: any): void {
    $element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  scrollToTop($element: any): void {
    $element.parentElement.parentElement.parentElement.parentElement.scrollTo(
      0,
      0,
    );
  }
}
