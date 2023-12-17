import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class TimetableService {
  readonly timetable24Hours: String[] = []
  readonly timetableFullTime: String[] = [
    '8:00',
    '8:30',
    '9:00',
    '9:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '17:30',
  ]
  readonly timetablePartTime: String[] = []

  constructor() {}

  getTimetableFullTime(start: number | undefined = 0, end: number | undefined = 5) {
    const timetable = this.timetableFullTime
    return timetable.slice(start, end)
  }
}
