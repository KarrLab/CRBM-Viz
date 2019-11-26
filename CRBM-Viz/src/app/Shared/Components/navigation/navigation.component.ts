import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavItemDisplayLevel } from 'src/app/Shared/Enums/nav-item-display-level';
import { NavItem } from 'src/app/Shared/Models/nav-item';
import { BreadCrumbsService } from 'src/app/Shared/Services/bread-crumbs.service';
import { AuthService } from 'src/app/Shared/Services/auth0.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass'],
})
export class NavigationComponent implements OnInit, OnDestroy {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  private crumbsSubscription: Subscription;
  public moduleCrumbs;
  public moduleButtons: NavItem[];
  public moduleClasses: string[] = [];
  public NavItemDisplayLevel = NavItemDisplayLevel;

  constructor(
    private breakpointObserver: BreakpointObserver,
    @Inject(BreadCrumbsService) private breadCrumbsService: BreadCrumbsService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.crumbsSubscription = this.breadCrumbsService.data.subscribe(
      data => {
        this.moduleCrumbs = data['crumbs'];
        this.moduleButtons = data['buttons'];
        this.moduleClasses = data['classes'];
      }
    )
  }

  ngOnDestroy() {
    this.crumbsSubscription.unsubscribe();
  }
}
