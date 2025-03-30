import { Component, Inject } from '@angular/core';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';

import Analytics from '@vercel/analytics';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [ RouterOutlet, HeaderComponent, FooterComponent ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'portfolio';
}