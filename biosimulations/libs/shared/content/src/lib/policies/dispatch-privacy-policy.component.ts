import { Component, ViewChild } from '@angular/core';
import {
  TocSection,
  TocSectionsContainerDirective,
} from '@biosimulations/shared/ui';
import { ConfigService } from '@biosimulations/shared/services';

@Component({
  selector: 'biosimulations-dispatch-privacy-policy',
  templateUrl: './dispatch-privacy-policy.component.html',
  styleUrls: ['./dispatch-privacy-policy.component.scss'],
})
export class DispatchPrivacyPolicyComponent {
  emailUrl!: string;
  tocSections!: TocSection[];

  @ViewChild(TocSectionsContainerDirective)
  set tocSectionsContainer(container: TocSectionsContainerDirective) {
    setTimeout(() => {
      this.tocSections = container.getToc();
    });
  }

  constructor(public config: ConfigService) {
    this.emailUrl = 'mailto:' + config.email;
  }
}
