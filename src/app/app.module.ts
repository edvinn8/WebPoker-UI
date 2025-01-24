import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LobbyComponent } from './pages/lobby/lobby.component';
import { VcardComponent } from './pages/lobby/components/vcard/vcard.component';
import { TableComponent } from './pages/lobby/components/table/table.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptorService } from './security/auth-interceptor.service';
import { ActionMenuFriendsComponent } from './pages/lobby/components/action-menu-friends/action-menu-friends.component';
import { SoonModalComponent } from './utils/components/soon-modal/soon-modal.component';

@NgModule({ declarations: [
        AppComponent,
        LoginComponent,
        LobbyComponent,
        VcardComponent,
        TableComponent,
        ActionMenuFriendsComponent,
        SoonModalComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule], providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
        },
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
