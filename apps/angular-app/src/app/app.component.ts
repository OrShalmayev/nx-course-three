import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import {UiPlatformAngularModule} from "@nx-course-three/ui-platform-angular";
import {defineCustomElements} from "@nx-course-three/ui-platform/loader";

defineCustomElements()
@Component({
  standalone: true,
  imports: [RouterModule, UiPlatformAngularModule],
  selector: 'nx-course-three-root',
  template: `<my-component></my-component>`,
  styles: [],
})
export class AppComponent {
  title = 'angular-app';
}
