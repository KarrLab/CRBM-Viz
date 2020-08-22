import { Component, Inject, OnInit } from '@angular/core';

@Component({
  templateUrl: './help.component.html',
  styleUrls: ['../help.module.sass', './help.component.sass'],
})
export class HelpComponent implements OnInit {
  tocFixed = false;

  constructor() { 
    window.addEventListener('scroll', this.scroll, true);
  }

  ngOnInit(): void { }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (event: any): void => {
    this.tocFixed = event.srcElement.scrollTop > 64;
  };

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
