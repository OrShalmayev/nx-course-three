import {Component, h, Prop} from '@stencil/core';
import {allIcons, SpotIcons, SpotIconsName} from "@nx-course-three/svg-to-ts";


@Component({
  tag: 'spot-icon',
  styleUrl: 'shalma-icon.scss',
  scoped: true
})
export class SpotIcon {
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
