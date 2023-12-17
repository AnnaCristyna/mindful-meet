import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ProfileComponent } from './profile.component'

describe('ProfileComponent', () => {
  let component: ProfileComponent
  let fixture: ComponentFixture<ProfileComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ProfileComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should create with default values', () => {
    expect(component.starsQuantity).toBe(5)
    expect(component.starsEmpty).toBe(5)
  })

  it('should calculate number of stars empty', () => {
    ;(component.rating = 3), 2
    component.ngOnInit()

    expect(component.starsEmpty).toBe(2)
  })

  it('should not calculate when rating is bigger than starsQuantity', () => {
    component.rating = 7
    component.ngOnInit()

    expect(component.starsEmpty).toBe(5)
  })

  it('should not calculate when rating is null', () => {
    component.rating = null
    component.ngOnInit()

    expect(component.starsEmpty).toBe(5)
  })

  it('não deve ajustar as estrelas vazias se a classificação for undefined', () => {
    component.rating = undefined
    component.ngOnInit()

    expect(component.starsEmpty).toBe(5)
  })
})
