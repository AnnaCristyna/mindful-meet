import { ComponentFixture, TestBed } from '@angular/core/testing'
import { SchedulerComponent } from './scheduler.component'
import { CalendarService } from '@services/calendar/calendar.service'
import { TimetableService } from '@services/timetable/timetable.service'

describe('SchedulerComponent', () => {
  let component: SchedulerComponent
  let fixture: ComponentFixture<SchedulerComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchedulerComponent],
      providers: [TimetableService, CalendarService],
    })

    fixture = TestBed.createComponent(SchedulerComponent)
    component = fixture.componentInstance
  })

  it('should create the component', () => {
    expect(component).toBeTruthy()
  })

  it('should initialize default properties correctly', () => {
    expect(component.calendar).toEqual([])
    expect(component.timezone).toBe('')
    expect(component.timetable).toEqual([])
    expect(component.startIndex).toBe(0)
    expect(component.endIndex).toBe(5)
    expect(component.showButtonForMore).toBe(false)
  })

  it('should call services correctly during initialization', () => {
    const timetableService = TestBed.inject(TimetableService)
    spyOn(timetableService, 'getTimetableFullTime').and.returnValue(['time1', 'time2'])

    const calendarService = TestBed.inject(CalendarService)
    spyOn(calendarService, 'getDaysOfNextMonths').and.returnValue([new Date(), new Date()])

    component.ngOnInit()

    expect(component.timetable).toEqual(['time1', 'time2'])
    expect(component.calendar.length).toBe(2)
  })

  it('should call getMoreTimes method correctly', () => {
    const timetableService = TestBed.inject(TimetableService)
    spyOn(timetableService, 'getTimetableFullTime').and.returnValue(['time3', 'time4'])

    component.getMoreTimes()

    expect(component.timetable).toEqual(['time3', 'time4'])
  })

  it('should format the day of the week correctly', () => {
    const date = new Date('2023-01-17')
    const formattedDay = component.formatDayOfWeek(date)

    expect(formattedDay).toBe('Tue')
  })

  it('should format the month and year correctly', () => {
    const date = new Date('2023-01-17')

    const formattedMonthYear = component.formatMonthYear(date)

    expect(formattedMonthYear).toBe('Jan 2023')
  })
})
