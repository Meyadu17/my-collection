import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-mentions-legales',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './mentions-legales.component.html',
  styleUrl: './mentions-legales.component.scss'
})
export class MentionsLegalesComponent{
  EMAIL: string = "wekogirl@hotmail.fr";
  URL: string = "https://adresse.fr"
  HEBERGEUR: string = "Wix - Wix.com Inc. - 500 Terry A François Blvd San Francisco, CA 94158";

  constructor(
    private router:Router
  ) {}
}
