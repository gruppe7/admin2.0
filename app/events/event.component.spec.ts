/*
**  Author: Elias Sundby Aukan
**  For testing in the future
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EventsComponent } from './events.component';

let comp:     EventsComponent;
let fixture:  ComponentFixture<EventsComponent>;
let de:       DebugElement;
let el:       HTMLElement;

describe('EventsComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsComponent ],
    });

    fixture = TestBed.createComponent(EventsComponent);

    comp = fixture.componentInstance; // The test instance

    de = fixture.debugElement.query(By.css('h1'));

    el =de.nativeElement;
  });
});

it('Should display a test event', () => {
  comp.events = [{eventId: 0, name: "test", description: "test"}];
  fixture.detectChanges;
  expect(el.textContent).toContain("eventId: 0, name: test, description: test");
});
