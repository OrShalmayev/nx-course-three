import {RouterModule} from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {UiPlatformAngularModule} from "@nx-course-three/ui-platform-angular";
import {defineCustomElements} from "@nx-course-three/ui-platform/loader";
import {AsyncPipe} from "@angular/common";
import {SpotIconsName} from "@nx-course-three/svg-to-ts";

defineCustomElements()

@Component({
  standalone: true,
  imports: [RouterModule, UiPlatformAngularModule, AsyncPipe],
  selector: 'nx-course-three-root',
  template: `
    <!--    iconName="chevron-down"-->
    <spot-icon #spotIcon [iconName]="'chevron-down'"></spot-icon>
  `,
  styles: [],
})
export class AppComponent implements AfterViewInit {
  title = 'angular-app';
  @ViewChild('spotIcon') component: unknown;
  spotIconsName: typeof SpotIconsName = SpotIconsName;


  ngAfterViewInit(): void {
    console.log('this.component', this.component)
  }

}
