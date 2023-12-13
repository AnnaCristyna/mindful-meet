import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from "./components/profile/profile.component";
import { SchedulerComponent } from "./components/scheduler/scheduler.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ProfileComponent, SchedulerComponent]
})
export class AppComponent {
  title = 'mindful-meet';
}
