import { Component, h, Prop } from '@stencil/core';
import {allIcons, SpotIcons, SpotIconsName} from "@nx-course-three/svg-to-ts";

@Component({
  tag: 'shalma-icon',
  styleUrl: 'shalma-icon.scss',
  shadow: true,
})
export class ShalmaIcon {
  spotIconsName: typeof SpotIconsName = SpotIconsName;
  allIcons: SpotIcons[] = allIcons

  @Prop() iconName!: string;

  private getIcon(): string {
    //TODO handle when icon name is not defined
    return allIcons.find(icon => icon.name === this.iconName).data;
  }

  render() {
    return <div innerHTML={this.getIcon()}></div>;
  }
}
