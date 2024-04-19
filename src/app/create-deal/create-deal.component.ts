import { Component, OnInit } from '@angular/core';

import { InplaceModule } from 'primeng/inplace';
import { AccordionModule } from 'primeng/accordion';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { SidebarModule } from 'primeng/sidebar';
import { SliderModule } from 'primeng/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { CommonModule } from '@angular/common';
import { Tags } from '../interfaces/tags';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@Component({
  selector: 'app-create-deal',
  standalone: true,
  imports: [
    AccordionModule,
    InplaceModule,
    CascadeSelectModule,
    SidebarModule,
    SliderModule,
    ReactiveFormsModule,
    FormsModule,
    FileUploadModule,
    CommonModule,
    DropdownModule,
  ],
  templateUrl: './create-deal.component.html',
  styleUrl: './create-deal.component.css',
})
export class CreateDealComponent implements OnInit {
  sourcies: { name: string; image: string }[] = [];
  projects: { name: string; image: string }[] = [];

  selectedsource!: { name: string };
  selectedProject!: { name: string };
  value: number = 50;

  ngOnInit() {
    this.sourcies = [
      {
        name: 'منصة الانستيجرام',
        image: '/assets/icons/telegram.png',
      },
      {
        name: 'منصة الفيسبوك',
        image: '/assets/icons/facebook.png',
      },
      {
        name: 'منصة التليجرام',
        image: '/assets/icons/instagram.png',
      },
    ];
    this.projects = [
      {
        name: 'فيكتوريا دي ميرو',
        image: '/assets/icons/project1.png',
      },
      {
        name: 'كايرو ستوديو',
        image: '/assets/icons/project2.png',
      },
      {
        name: 'فالا دوت فان',
        image: '/assets/icons/project3.png',
      },
    ];
    if (this.sourcies.length > 0) {
      this.selectedsource = this.sourcies[0];
    }
    if (this.projects.length > 0) {
      this.selectedProject = this.projects[0];
    }
  }
  dealName: string = 'شراء / تأجير شقة سكنية في منطقة التجمع الأول';

  get getRandomColor(): { bgColor: string; textColor: string } {
    // Generate random values for red, green, and blue components
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Construct the color string in hexadecimal format
    const bgColor =
      '#' +
      red.toString(16).padStart(2, '0') +
      green.toString(16).padStart(2, '0') +
      blue.toString(16).padStart(2, '0');

    // Adjust the color to increase the black slightly
    const adjustedRed = Math.min(255, red + 15);
    const adjustedGreen = Math.min(255, green + 15);
    const adjustedBlue = Math.min(255, blue + 15);

    const textColor =
      '#' +
      adjustedRed.toString(16).padStart(2, '0') +
      adjustedGreen.toString(16).padStart(2, '0') +
      adjustedBlue.toString(16).padStart(2, '0');

    return { bgColor, textColor };
  }

  tags: Tags[] = [
    {
      textColor: this.getRandomColor.textColor,
      bgColor: this.getRandomColor.bgColor,
      text: 'صفقة جديدة',
    },
    {
      textColor: this.getRandomColor.textColor,
      bgColor: this.getRandomColor.bgColor,
      text: 'صفقة جديدة',
    },
    {
      textColor: this.getRandomColor.textColor,
      bgColor: this.getRandomColor.bgColor,
      text: 'صفقة جديدة',
    },
    {
      textColor: this.getRandomColor.textColor,
      bgColor: this.getRandomColor.bgColor,
      text: 'صفقة جديدة',
    },
    {
      textColor: this.getRandomColor.textColor,
      bgColor: this.getRandomColor.bgColor,
      text: 'صفقة جديدة',
    },
    {
      textColor: this.getRandomColor.textColor,
      bgColor: this.getRandomColor.bgColor,
      text: 'صفقة جديدة',
    },
    {
      textColor: this.getRandomColor.textColor,
      bgColor: this.getRandomColor.bgColor,
      text: 'صفقة جديدة',
    },
    {
      textColor: this.getRandomColor.textColor,
      bgColor: this.getRandomColor.bgColor,
      text: 'صفقة جديدة',
    },
    {
      textColor: this.getRandomColor.textColor,
      bgColor: this.getRandomColor.bgColor,
      text: 'صفقة جديدة',
    },
    {
      textColor: this.getRandomColor.textColor,
      bgColor: this.getRandomColor.bgColor,
      text: 'صفقة جديدة',
    },
  ];
}
