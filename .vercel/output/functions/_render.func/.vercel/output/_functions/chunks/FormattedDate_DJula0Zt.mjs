import { c as createAstro, d as createComponent, m as maybeRenderHead, e as addAttribute, r as renderTemplate } from './astro/server_CiUiVD0b.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://dimognetehem.vercel.app");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    timeZone: "UTC"
  })} </time>`;
}, "C:/Users/SAMSUNG/Documents/GitHub/portfolio-main/src/components/FormattedDate.astro", void 0);

export { $$FormattedDate as $ };
