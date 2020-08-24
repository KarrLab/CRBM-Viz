import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialWrapperModule } from './material-wrapper.module';
import { RouterModule } from '@angular/router';
import { BreadCrumbsModule } from './bread-crumbs/bread-crumbs.module';
import { TopbarComponent } from './topbar/topbar.component';
import { TopbarMenuComponent } from './topbar/topbar-menu.component';
import { TopbarMenuItemComponent } from './topbar/topbar-menu-item.component';
import { HoverOpenMenuComponent } from './hover-open-menu/hover-open-menu.component';
import { DropdownMenuItemComponent } from './dropdown-menu-item/dropdown-menu-item.component';
import { StepperButtonsComponent } from './next-previous-buttons/next-previous-buttons.component';
import { BiosimulationsNavigationComponent } from './biosimulations-navigation/biosimulations-navigation.component';
import { BiosimulationsNavigationItemComponent } from './biosimulations-navigation/biosimulations-navigation-item.component';
import { BiosimulationsNavigationSubitemComponent } from './biosimulations-navigation/biosimulations-navigation-subitem.component';
import { HyperLinkComponent } from './hyper-link/hyper-link.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { LogoTextComponent } from './logo-text/logo-text.component';
import { LogoImageComponent } from './logo-image/logo-image.component';
import { RouterLinkComponent } from './router-link/router-link.component';
import { BiosimulationsIconsModule } from '@biosimulations/shared/icons'
import { PrivacyNoticeComponent } from './privacy-notice/privacy-notice.component';
import { TextPageComponent } from './text-page/text-page.component';
import { TextPageSectionComponent } from './text-page/text-page-section.component';
import { TextPageSideBarSectionComponent } from './text-page/text-page-side-bar-section.component';
import { TextPageContentSectionComponent } from './text-page/text-page-content-section.component';
import { TextPageTocItemComponent } from './text-page/text-page-toc-item.component';
import { QAComponent } from './q-a/q-a.component';
import { HomeSectionComponent } from './home/home-section.component';
import { HomeSubsectionComponent } from './home/home-subsection.component';
import { HomeTeaserComponent } from './home/home-teaser.component';
import { HomeLogoComponent } from './home/home-logo.component';
@NgModule({
  imports: [CommonModule, MaterialWrapperModule, RouterModule, BiosimulationsIconsModule, BreadCrumbsModule],
  exports: [MaterialWrapperModule, TopbarComponent, TopbarMenuComponent, TopbarMenuItemComponent,
    HoverOpenMenuComponent, DropdownMenuItemComponent,
    StepperButtonsComponent,
    BiosimulationsNavigationComponent, BiosimulationsNavigationItemComponent, BiosimulationsNavigationSubitemComponent,
    HyperLinkComponent, SpinnerComponent, LogoTextComponent, LogoImageComponent, RouterLinkComponent, PrivacyNoticeComponent,
    TextPageComponent, TextPageSectionComponent, TextPageSideBarSectionComponent, TextPageContentSectionComponent, TextPageTocItemComponent,
    QAComponent,
    HomeSectionComponent, HomeSubsectionComponent, HomeTeaserComponent, HomeLogoComponent,
  ],
  declarations: [TopbarComponent, TopbarMenuComponent, TopbarMenuItemComponent,
    HoverOpenMenuComponent, DropdownMenuItemComponent,
    StepperButtonsComponent,
    BiosimulationsNavigationComponent, BiosimulationsNavigationItemComponent, BiosimulationsNavigationSubitemComponent,
    HyperLinkComponent,
    SpinnerComponent, LogoTextComponent, LogoImageComponent, RouterLinkComponent, PrivacyNoticeComponent,
    TextPageComponent, TextPageSectionComponent, TextPageSideBarSectionComponent, TextPageContentSectionComponent, TextPageTocItemComponent,
    QAComponent,
    HomeSectionComponent, HomeSubsectionComponent, HomeTeaserComponent, HomeLogoComponent,
  ],
})
export class SharedUiModule { }
