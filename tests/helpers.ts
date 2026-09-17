/**
 * Shared selectors for the component tests.
 *
 * Every field renders the same skeleton — a box holding one bordered region —
 * whichever component built it, so these read that shape once. Prefer them to
 * structural selectors: the render trees moved several times while the sheets
 * were being matched, and `div.flex.w-full` and `firstElementChild` broke with
 * them.
 *
 * The components mark these parts with `data-slot`, which is also what
 * consumers get for styling.
 */

/** The field's outer box, which carries the state data attributes. */
export const boxOf = (container: HTMLElement) =>
  container.querySelector<HTMLElement>('[data-slot="box"]')!;

/** The bordered region: it owns the border, the padding and the focus ring. */
export const regionOf = (container: HTMLElement) =>
  container.querySelector<HTMLElement>('[data-slot="value"]')!;

/** The one real text input. The OTP's mirror cells hold inputs too, so it has
 * its own selector. */
export const inputOf = (container: HTMLElement) =>
  container.querySelector<HTMLInputElement>("input")!;

/** Tag chips. */
export const chipsOf = (container: HTMLElement) => [
  ...container.querySelectorAll<HTMLElement>('[data-slot="tag"]'),
];

/** Panels attached to an edge, which span the height and carry their own border. */
export const panelsOf = (container: HTMLElement) => [
  ...container.querySelectorAll<HTMLElement>('[data-slot="panel"]'),
];

/**
 * Slots that took their own edge. A slot behind a divider leaves the region, so
 * the region's border becomes the rule between them and focus stops at the value
 * area instead of ringing the affix.
 */
export const affixesOf = (container: HTMLElement) => [
  ...container.querySelectorAll<HTMLElement>('[data-slot="affix"]'),
];

/** The rules between an affix and the text. */
export const dividersOf = (container: HTMLElement) => [
  ...container.querySelectorAll<HTMLElement>('[data-slot="divider"]'),
];

/** The region's own children: affixes, dividers and the input, in order. */
export const slotsOf = (container: HTMLElement) => [
  ...regionOf(container).querySelectorAll<HTMLElement>(":scope > span"),
];

/**
 * The slot the help marker sits in.
 *
 * The marker is an svg, and chips hold svgs of their own, so take the last one
 * that is not inside a chip rather than the first svg in the region. Written as
 * a find rather than a `:not()` selector, which jsdom does not handle with a
 * descendant combinator.
 */
export const markerSlotOf = (container: HTMLElement) => {
  const marker = [...regionOf(container).querySelectorAll("svg")].find(
    (svg) => !svg.closest('[data-slot="tag"]'),
  );
  return (marker?.closest("span") ?? null) as HTMLElement | null;
};
