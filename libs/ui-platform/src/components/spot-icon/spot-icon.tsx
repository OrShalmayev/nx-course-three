import {Component, h, Prop} from '@stencil/core';
import {allIcons, SpotIcons, SpotIconsName} from "@nx-course-three/svg-to-ts";


@Component({
  tag: 'spot-icon',
  styleUrl: 'spot-icon.scss',
  scoped: true
})
export class SpotIcon {
  static spotIconsName: typeof SpotIconsName = SpotIconsName;
  static allIcons: SpotIcons[] = allIcons

  @Prop() iconName: string;

  private getIcon(): string {
    return allIcons.find(icon => icon.name === this.iconName).data;
  }

  render() {
    return <div innerHTML={this.getIcon()}></div>;
  }
}
