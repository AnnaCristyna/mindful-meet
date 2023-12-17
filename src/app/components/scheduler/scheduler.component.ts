import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatCardModule } from '@angular/material/card'
import { MatTabsModule } from '@angular/material/tabs'
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'
import { CalendarService } from '@services/calendar/calendar.service'
import { TimetableService } from '@services/timetable/timetable.service'
import { DataService } from '@services/service/service.service'

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
  endIndex: number = 5
  showButtonForMore: boolean = false

  constructor(
    private timetableService: TimetableService,
    private calendarService: CalendarService,
    private dataService: DataService,
  ) {}

  ngOnInit(): void {
    this.timetable = this.timetableService.getTimetableFullTime(this.startIndex, this.endIndex)
    this.calendar = this.calendarService.getDaysOfNextMonths()

    const teste = this.dataService.getData()
    console.log(teste)
  }
  getTimezoneString(today: Date) {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const timezoneOffset = today.getTimezoneOffset() / 60
    const value = timezoneOffset > 0 ? '+' : '-'
    this.timezone = timezone + ` (${value + timezoneOffset})`
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
