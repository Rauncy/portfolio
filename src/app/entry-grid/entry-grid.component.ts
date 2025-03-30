import { NgIf, CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-entry-grid',
    standalone: true,
    imports: [ NgIf, CommonModule ],
    templateUrl: './entry-grid.component.html',
    styleUrl: './entry-grid.component.css'
})
export class EntryGridComponent {
    @Input() items!: GridItem[];
}

export interface GridItem {
    /// The name of the item
    Name: string;
    /// The type of the item
    Category: string;
    /// The description of the item
    Description: string;
    /// The accent color of the item in any CSS format
    Color: string;
    
    /// Use this to define an image's location
    Icon?: string;
    /// Use this to define an icon's class
    IconClass?: string;
    /// The text flourish to add after the icon
    Flourish?: string;
}