import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import  { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { HomeService } from './services/home.service';
import { AddComponent } from './add/add.component';

const appRoutes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'add', component : AddComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    SharedModule

  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
