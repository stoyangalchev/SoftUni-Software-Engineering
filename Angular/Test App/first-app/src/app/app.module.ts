import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NavigationComponent } from './navigation/navigation.component';
import { UserListComponent } from './user-list/user-list.component';
import { PlaygroundComponent } from './playground/playground.component';

@NgModule({
  declarations: [AppComponent,  NavigationComponent , UserListComponent, PlaygroundComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
