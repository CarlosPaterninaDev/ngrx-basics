import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PadreComponent } from './contador/padre/padre.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';
import { RouterModule, Routes } from '@angular/router';
import { PadreNgrxComponent } from './contadorNgrx/padre-ngrx/padre-ngrx.component';
import { HijoNgrxComponent } from './contadorNgrx/hijo-ngrx/hijo-ngrx.component';
import { NietoNgrxComponent } from './contadorNgrx/nieto-ngrx/nieto-ngrx.component';

const route: Routes = [
  { path: 'input-output', component: PadreComponent },
  { path: 'ngrx', component: PadreNgrxComponent },
  { path: '**', redirectTo: 'input-output' },
];

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoComponent,
    NietoComponent,
    PadreNgrxComponent,
    HijoNgrxComponent,
    NietoNgrxComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(route)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
