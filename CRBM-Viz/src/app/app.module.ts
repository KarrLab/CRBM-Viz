import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './Modules/app-material.module';
import { TopbarComponent } from './components/Layout/topbar/topbar.component';
import { SearchBarComponent } from './components/Layout/search-bar/search-bar.component';
import { SidebarComponent } from './components/Layout/sidebar/sidebar.component';
import { LogoComponent } from './components/Layout/logo/logo.component';
@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SearchBarComponent,
    SidebarComponent,

    LogoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
