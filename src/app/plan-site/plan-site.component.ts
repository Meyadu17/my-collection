import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-plan-site',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './plan-site.component.html',
  styleUrl: './plan-site.component.scss'
})
export class PlanSiteComponent {

}
