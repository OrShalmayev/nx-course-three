import {RouterModule} from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {UiSptShalmaAngularModule} from "shalma-spt-webcomponents";

@Component({
  standalone: true,
  imports: [RouterModule, UiSptShalmaAngularModule, AsyncPipe],
  selector: 'nx-course-three-root',
  template: `
    <!--    iconName="chevron-down"-->
    <spot-icon #spotIcon [iconName]="'chevron-up'"></spot-icon>
  `,
  styles: [],
})
export class AppComponent implements AfterViewInit {
  title = 'angular-app';
  @ViewChild('spotIcon') component: unknown;

  ngAfterViewInit(): void {
    console.log('this.component', this.component)
  }

}
