import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit,AfterViewInit  {
  // @ViewChild("toolbar") toolbar!: MatToolbar;
  // @ViewChild("main") main!: ElementRef;
  @ViewChild("footer") footer!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

}
