import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-work-calendar',
  templateUrl: './work-calendar.component.html',
  styleUrl: './work-calendar.component.scss'
})
export class WorkCalendarComponent implements OnInit {

  @Input({ required: true }) calendarEvents: Observable<any>;

  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];

  ngOnInit(): void {
    this.calendarEvents.subscribe(events => {
      this.events = events.map(event => {
        return {
          title: event.event_description,
          start: new Date(event.event_start_date),
          end: new Date(event.event_end_date),
          color: getEventColor(event.name)
        }
      });
    });
  }

}
function getEventColor(eventType: string): any {
  switch (eventType) {
    case EventType.CONFERENCE:
      return { primary: '#00D126', secondary: '#7DD38C' };
    case EventType.HOLIDAY:
      return { primary: '#FFD800', secondary: '#FFF1A0' };
    case EventType.SICK:
      return { primary: '#ff0000', secondary: '#FF9494' };
    case EventType.TRAINING:
      return { primary: '#0083FF', secondary: '#8AC6FF' };
    default:
      return { primary: '#1e90ff', secondary: '#D1E8FF' };
  }
}

enum EventType {
  HOLIDAY = 'Holiday',
  CONFERENCE = 'Conference',
  TRAINING = 'Training',
  SICK = 'Sick Leave'
}

