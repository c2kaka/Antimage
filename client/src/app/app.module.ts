import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import {HttpClientModule} from "@angular/common/http";
import { ChatComponent } from './chat/chat.component';
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    RxjsComponent,
    ChatComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        SocketIoModule.forRoot(config),
        BrowserAnimationsModule,
        MatToolbarModule,
        MatCardModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatSidenavModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
