/*
**  Author: Elias Sundby Aukan
**  For testing in the future
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DashboardComponent } from './dashboard.component';

let comp:     DashboardComponent;
let fixture:  ComponentFixture<DashboardComponent>;
let de:       DebugElement;
let el:       HTMLElement;

describe('DashboardComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
    });

    fixture = TestBed.createComponent(DashboardComponent);

    comp = fixture.componentInstance; // The test instance

    de = fixture.debugElement.query(By.css('h1'));

    el =de.nativeElement;
  });
});
