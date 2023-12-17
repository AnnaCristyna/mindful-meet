import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatTabsModule } from '@angular/material/tabs'
import { MatCardModule } from '@angular/material/card'
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'
import { CalendarService } from '@services/calendar/calendar.service'
import { TimetableService } from '@services/timetable/timetable.service'

@Component({
  selector: 'app-scheduler',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTabsModule, MatTableModule, MatButtonModule],
  templateUrl: './scheduler.component.html',
  styleUrl: './scheduler.component.scss',
})
export class SchedulerComponent {
  calendar: Date[] = []
  timezone: string = ''
  timetable: String[] = []
  startIndex: number = 0
  endIndex: number = 7
  showButtonForMore: boolean = false

  constructor(
    private timetableService: TimetableService,
    private calendarService: CalendarService,
  ) {}

  ngOnInit(): void {
    this.timetable = this.timetableService.getTimetableFullTime(this.startIndex, this.endIndex)
    this.calendar = this.calendarService.getDaysOfNextMonths()
  }
  getMoreTimes() {
    const timetableLenght = this.timetable.length
    const moreTimes = this.timetableService.getTimetableFullTime(timetableLenght)
    this.timetable = [...moreTimes]
  }

  formatDayOfWeek(date: Date) {
    return new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date)
  }
  formatMonthYear(date: Date) {
    return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(date)
  }
}
