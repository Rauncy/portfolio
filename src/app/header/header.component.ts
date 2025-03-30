import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
    constructor() {
        this.ProperlySizeDropdowns();
    }

    private ProperlySizeDropdowns(): void {
        console.log("Resize dropdowns");
        document.querySelectorAll(".navbar-dropdown").forEach(
            root => root.querySelector(".navbar-dropdown-content")?.setAttribute("style", `min-width: ${root.getBoundingClientRect().width}px;`)
        );
    }
}
