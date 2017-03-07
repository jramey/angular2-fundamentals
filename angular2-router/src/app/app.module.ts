import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import appRoutes from "./app.routes";

@NgModule({
    imports:[BrowserModule, appRoutes],
    declarations:[AppComponent, HomeComponent],
    bootstrap:[AppComponent]
})
export class AppModule{}