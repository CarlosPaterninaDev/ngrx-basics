import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { contadorReducer } from './contadorNgrx/contador.reducer';

import { PadreComponent } from './contador/padre/padre.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';

import { PadreNgrxComponent } from './contadorNgrx/padre-ngrx/padre-ngrx.component';
import { HijoNgrxComponent } from './contadorNgrx/hijo-ngrx/hijo-ngrx.component';
import { NietoNgrxComponent } from './contadorNgrx/nieto-ngrx/nieto-ngrx.component';
import { environment } from '../environments/environment';
import { counterReducer } from './contadorNgrx/contador.reducer';

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
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    StoreModule.forRoot({ contador: counterReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
