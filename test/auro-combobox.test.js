import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-combobox.js';

describe('auro-combobox', () => {
  // it('auro-combobox is accessible', async () => {
  //   const el = await fixture(html`
  //     <auro-combobox></auro-combobox>
  //   `);

  //   await expect(el).to.be.accessible();
  // });

  it('auro-combobox custom element is defined', async () => {
    const el = await !!customElements.get("auro-combobox");

    await expect(el).to.be.true;
  });
});
