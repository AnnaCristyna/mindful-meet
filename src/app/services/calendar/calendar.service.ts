import { Injectable } from '@angular/core'
import { addMonths, subDays, startOfMonth, eachDayOfInterval } from 'date-fns'

interface DaysOfWeek {
  abbreviation: string
  utcNumber: number
  fullName: string
}

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  daysOfNextMonths: Date[] = []
  timezone: string = ''
  daysOfWeek: DaysOfWeek[] = [
    { abbreviation: 'Sun', utcNumber: 0, fullName: 'Sunday' },
    { abbreviation: 'Mon', utcNumber: 1, fullName: 'Monday' },
    { abbreviation: 'Tue', utcNumber: 2, fullName: 'Tuesday' },
    { abbreviation: 'Wed', utcNumber: 3, fullName: 'Wednesday' },
    { abbreviation: 'Thu', utcNumber: 4, fullName: 'Thursday' },
    { abbreviation: 'Fri', utcNumber: 5, fullName: 'Friday' },
    { abbreviation: 'Sat', utcNumber: 6, fullName: 'Saturday' },
  ]

  getDaysOfNextMonths(months: number = 1) {
    const today = new Date()
    const dateLimit = addMonths(today, months)
    const intervalMonths = {
      start: today,
      end: subDays(startOfMonth(dateLimit), 1),
    }

    this.daysOfNextMonths = eachDayOfInterval(intervalMonths)
    return this.daysOfNextMonths
  }
  getTimezoneString(today: Date) {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const timezoneOffset = today.getTimezoneOffset() / 60
    const value = timezoneOffset > 0 ? '+' : '-'
    return timezone + ` (${value + timezoneOffset})`
  }
}
