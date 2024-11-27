import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { listFormComponent } from './components/list-form/game-form.component';
import { ListComponent } from './components/list-list/game-list.component';
import { FormsModule } from '@angular/forms';
import { ListService } from './services/Listservice';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    listFormComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    
    ListService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
