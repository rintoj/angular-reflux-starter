import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ENV_PROVIDERS } from './environment';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { SCREENS } from './screen';
import { SERVICES } from './service';
import { STORES } from './store';

// Application wide providers
const APP_PROVIDERS = [
    ...STORES,
    ...SERVICES
];

/**
 * `AppModule` is the main entry point into Angular2's bootstrapping process
 */
@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        ...SCREENS
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        // RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
    ],
    providers: [
        ENV_PROVIDERS,
        APP_PROVIDERS
    ]
})
export class AppModule { }

