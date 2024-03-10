import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {AppComponent} from './app.component'

@NgModule({
    imports:[
        BrowserModule
    ], //use to bring in other angular modules w would need
    declarations:[
        AppComponent
    ], //use to make available other components, directives and pipes
    bootstrap:[
        AppComponent
    ]
})
export class AppModule{

}