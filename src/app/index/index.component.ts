import { Component } from '@angular/core';

import { BlockquoteComponent } from '../blockquote/blockquote.component';
import { ResumeSectionComponent } from '../resume-section/resume-section.component';
import { EntryGridComponent, GridItem } from '../entry-grid/entry-grid.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [ BlockquoteComponent, ResumeSectionComponent, EntryGridComponent ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  public languageCards: LanguageCardGridItem[];
    
  constructor() {
      // TODO: Pull this from a json file and then populate the data at compile time
      this.languageCards = []
      this.LoadLanguageCards();
  }

  private LoadLanguageCards() {
      this.languageCards = [
          // Just use pngs
          new LanguageCardGridItem("CSS", "Created multiple sites for personal and commercial use, with and without additional frameworks to assist in styling", LanguageCardCategory.Language, "#2965f1", "/assets/logoCss.svg"),
          new LanguageCardGridItem("JavaScript", "Experience scripting with Nodejs for multiple personal projects. Experience creating multiple sites for personal and commercial use", LanguageCardCategory.Language, "#F7DF1E", '/assets/logoJavascript.jpg'),
          new LanguageCardGridItem("HTML", "Experience creating websites for personal and commercial use", LanguageCardCategory.Language, "#EF652A", "/assets/logoHtml.svg"),
          new LanguageCardGridItem("NodeJS", "Experience making apps using REST APIs, sites using web frameworks, and various CLI tools", LanguageCardCategory.Environment, "#689f63", "/assets/logoNodejs.svg"),
          new LanguageCardGridItem("C / C++", "2+ years professional experience working on large collaborative repositories with many dependencies, standalone programs,", LanguageCardCategory.Language, "#659AD2", "/assets/logoCpp.svg", undefined, "\u2122"),
          new LanguageCardGridItem("Python", "3+ years working experience and 2+ years professional experience. Experience working with data processing, machine learning, computer vision, CLI scripts, servers, ", LanguageCardCategory.Language, "#FFC331", '/assets/logoPython.svg'),
          new LanguageCardGridItem("TypeScript", "Experience creating websites and cli tools for multiple personal projects and commercial use", LanguageCardCategory.Language, "#3178C6", "/assets/logoTypescript.svg"),
          new LanguageCardGridItem("C#", "3+ years professional experience working on large collaborative repositories with many dependencies along with standalone programs, extensions, plugins", LanguageCardCategory.Language, "#9b4993", "/assets/logoCsharp.svg"),
          new LanguageCardGridItem("dotNet", "2+ years professional experience working on compiled binaries, reflection, MSIL debugging, ", LanguageCardCategory.Environment, "#512BD4", "/assets/logoDotNet.svg", undefined, "\u2122"),    
      ];
  }
}

enum LanguageCardCategory {
  Language,
  Environment,
  Library,
  System,
}

class LanguageCardGridItem implements GridItem {
  public Name: string;
  public Description: string;
  public Category: string;
  public Color: string;
  public Icon?: string;
  public IconClass?: string;
  public Flourish?: string;
  public FlourishTip?: string;

  constructor(name: string, description: string, category: LanguageCardCategory, color: string, icon?: string, iconClass?: string, flourish?: string, flourishTip?: string) {
      this.Name = name;
      this.Description = description;
      this.Category = category.toString();
      this.Color = color;
      this.Icon = icon;
      this.IconClass = iconClass;
      this.Flourish = flourish;
      this.FlourishTip = flourishTip;
  }
}