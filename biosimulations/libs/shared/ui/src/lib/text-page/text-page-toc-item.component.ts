import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'biosimulations-text-page-toc-item',
  templateUrl: './text-page-toc-item.component.html',
  styleUrls: ['./text-page-toc-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextPageTocItemComponent implements OnInit {
  @Input()
  title = '';

  @Input()
  scrollTarget!: HTMLElement;

  constructor() {}

  ngOnInit(): void {}

  scrollToElement(): void {
    const scrollContainer = document.getElementsByTagName('mat-sidenav-content')[0];
    const y = this.scrollTarget.getBoundingClientRect().top + scrollContainer.scrollTop - 96;
    scrollContainer.scrollTo({top: y, behavior: 'smooth'});
  }
}
