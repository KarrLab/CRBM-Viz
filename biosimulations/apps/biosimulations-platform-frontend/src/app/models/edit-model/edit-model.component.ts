import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'biosimulations-edit-model',
  templateUrl: './edit-model.component.html',
  styleUrls: ['./edit-model.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditModelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
