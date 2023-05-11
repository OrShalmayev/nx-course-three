// import { newE2EPage } from '@stencil/core/testing';
//
// describe('spot-icon', () => {
//   it('renders', async () => {
//     const page = await newE2EPage();
//
//     await page.setContent('<spot-icon></spot-icon>');
//     const element = await page.find('spot-icon');
//     expect(element).toHaveClass('hydrated');
//   });
//
//   it('renders changes to the name data', async () => {
//     const page = await newE2EPage();
//
//     await page.setContent('<spot-icon></spot-icon>');
//     const component = await page.find('spot-icon');
//     const element = await page.find('spot-icon >>> div');
//     expect(element.textContent).toEqual(`Hello, World! I'm `);
//
//     component.setProperty('first', 'James');
//     await page.waitForChanges();
//     expect(element.textContent).toEqual(`Hello, World! I'm James`);
//
//     component.setProperty('last', 'Quincy');
//     await page.waitForChanges();
//     expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);
//
//     component.setProperty('middle', 'Earl');
//     await page.waitForChanges();
//     expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
//   });
// });
