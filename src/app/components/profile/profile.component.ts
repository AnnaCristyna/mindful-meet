import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  @Input() rating: number | undefined | null
  readonly starsQuantity: number = 5
  starsEmpty: number = this.starsQuantity

  ngOnInit() {
    if (this.rating && this.rating < this.starsQuantity) {
      this.rating = Math.round(this.rating)
      this.starsEmpty = this.starsQuantity - this.rating
      return
    }
  }
}
