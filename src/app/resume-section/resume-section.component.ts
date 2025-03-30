import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-resume-section',
    standalone: true,
    imports: [],
    templateUrl: './resume-section.component.html',
    styleUrl: './resume-section.component.css'
})
export class ResumeSectionComponent {

    // Properties
    @Input() sectionTitle!: string;

    constructor () {
    }
}
