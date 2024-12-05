import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'biosimulations-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit, OnDestroy {
  @Input()
  public label?: string;

  @Input()
  public messages: string[] = []; // Array of messages to display

  @Input()
  public intervalDuration: number = 3000; // Duration for each message in milliseconds

  public currentMessage: string = ''; // Message currently displayed
  private messageIndex: number = 0; // Tracks the index of the current message
  private intervalId: any; // Holds the interval reference

  ngOnInit(): void {
    if (this.messages.length > 0) {
      this.currentMessage = this.messages[0]; // Set the initial message
      this.intervalId = setInterval(() => {
        this.messageIndex = (this.messageIndex + 1) % this.messages.length;
        this.currentMessage = this.messages[this.messageIndex];
      }, this.intervalDuration);
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Clear the interval when the component is destroyed
    }
  }
}
