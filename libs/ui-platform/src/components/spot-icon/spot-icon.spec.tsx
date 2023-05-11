// import { newSpecPage } from '@stencil/core/testing';
// import { SpotIcon } from './spot-icon';
//
// describe('spot-icon', () => {
//   it('renders', async () => {
//     const { root } = await newSpecPage({
//       components: [SpotIcon],
//       html: '<spot-icon></spot-icon>',
//     });
//     expect(root).toEqualHtml(`
//       <spot-icon>
//         <mock:shadow-root>
//           <div>
//             Hello, World! I'm
//           </div>
//         </mock:shadow-root>
//       </spot-icon>
//     `);
//   });
//
//   it('renders with values', async () => {
//     const { root } = await newSpecPage({
//       components: [SpotIcon],
//       html: `<spot-icon first="Stencil" last="'Don't call me a framework' JS"></spot-icon>`,
//     });
//     expect(root).toEqualHtml(`
//       <spot-icon first="Stencil" last="'Don't call me a framework' JS">
//         <mock:shadow-root>
//           <div>
//             Hello, World! I'm Stencil 'Don't call me a framework' JS
//           </div>
//         </mock:shadow-root>
//       </spot-icon>
//     `);
//   });
// });
