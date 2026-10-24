Blueprint: Aluminium Fabrication Marketing Website
1. Project overview
Build a polished, responsive, single-page marketing website for
Escrivah Jeffrey Onyango, an aluminium fabricator based in Nairobi,
Kenya.
- Framework: Next.js 16.4.1, App Router
- Language: TypeScript with strict mode
- Styling: Tailwind CSS
- UI system: shadcn/ui, using accessible components and consistent
  design tokens
- Notifications: Sonner
- Icons: Lucide React
- Page type: One-page marketing website; no database, CMS,
  authentication, or backend required for this MVP
- Primary conversion: Encourage prospective customers to call,
  email, or request a quote
- Content source: Use the client details supplied below. Treat
  unconfirmed service details as editable draft content and do not
  invent credentials, guarantees, addresses, prices, or customer
  testimonials.
The website should feel like a premium industrial product catalogue:
precise, minimal, architectural, monochrome, and image-led.
2. Client information
- Name: Escrivah Jeffrey Onyango
- Business type: Aluminium Fabricator
- Service area: Nairobi, Kenya
- Email: jescrivah92@gmail.com
- Phone: +254 723 138 122
Use the name as the initial brand identity unless the client supplies a
registered business or trading name. Do not invent a company name or
logo. A typographic wordmark can be used as a temporary identity.
3. Goals and success criteria
1. Explain what the fabricator does within the first screen.
2. Present aluminium fabrication work with strong, well-cropped
   photography.
3. Make services easy to scan on mobile and desktop.
4. Make contacting the business effortless with prominent call, email,
   and quote actions.
5. Load quickly, remain accessible, and work across common screen
   sizes.
6. Avoid unsupported claims and make it easy to replace draft service
   copy and images.
4. Visual direction
Design concept
Minimalist industrial / premium material catalogue. Use generous
whitespace, restrained typography, subtle borders, and strong
photographic composition. Avoid generic construction-site visuals,
excessive rounded cards, bright gradients, and decorative UI.
Colour palette
Use greyscale only, apart from any naturally occurring iridescent
reflections in aluminium photography.
- Primary background: white (#FFFFFF)
- Secondary background: very light grey (#F4F4F2)
- Main text: near-black (#111111)
- Supporting text: medium grey (#686868)
- Borders: light silver (#D9D9D6)
- Dark CTA: black (#111111) with white text
- Dark section option: charcoal (#171717) with white text
Use subtle grey gradients sparingly in the hero to suggest brushed
metal. Do not introduce bright accent colours into the UI.
Typography
- Use a geometric sans-serif such as Montserrat for headings and
  navigation, with a neutral sans-serif such as Inter for body
  copy; use next/font/google only if supported in the target
  environment, otherwise provide sensible system fallbacks.
- Use large, tightly composed headings with clear weight contrast.
- Give navigation and eyebrow labels modest letter spacing.
- Keep body copy readable and concise. Avoid excessively thin text at
  small sizes.
Shape, spacing, and motion
- Prefer square or subtly rounded corners over pill-shaped UI.
- Use thin borders, quiet hover states, and restrained transitions.
- Use a consistent spacing scale and a centred content container with
  a maximum width around 1280px.
- Respect prefers-reduced-motion.
- Avoid animation that delays content or harms performance.
5. Page structure
Implement one page at / using reusable section components. Use a
sticky or fixed header only if it remains compact and does not obscure
section headings.
A. Header / navigation
- Minimal typographic wordmark: initially use ESCRIVAH or
  ALUMINIUM FABRICATION until the client confirms the preferred
  business name.
- Navigation anchors: About, Services, Our Work, Contact.
- A high-contrast outlined or black Contact us CTA.
- Mobile navigation must be keyboard accessible, close after selecting
  a section, and expose the correct expanded state.
- Use smooth scrolling where supported, while respecting
  reduced-motion preferences.
B. Hero
Purpose: Communicate the service and prompt a quote request
immediately.
- Background: white or a very light silver gradient.
- Composition: large aluminium fabrication photograph on the
  right/top, with headline and CTAs in the left/bottom negative space
  on desktop. Stack cleanly on mobile.
- Use a supplied image showing an aluminium profile, window, door,
  partition, frame, or other confirmed fabrication work. Do not
  generate or source a substitute if client images are expected.
- Optional vertical SCROLL TO EXPLORE detail on larger screens only.
- Eyebrow: ALUMINIUM FABRICATION · NAIROBI, KENYA
- Suggested headline: "Aluminium, crafted with precision."
- Supporting copy:
  Aluminium fabrication solutions for homes, businesses, and spaces that demand a clean, lasting finish.
  Treat this as draft copy and adjust to the client's actual scope.
- Primary CTA: Request a quote --- scrolls to Contact.
- Secondary CTA: Explore our services --- scrolls to Services.
- Optional small text link: Call us --- uses the tel: link.
Keep the headline, CTA, and key message as HTML text, not embedded in an
image. Ensure the hero remains compelling if its image fails to load.
C. Promotional / value ticker
A thin, high-contrast strip below the hero, optionally using a subtle
angled edge to echo the diagonal hero composition.

Use only factual, client-confirmed messages. Until confirmed, use
neutral phrases such as:
- CUSTOM ALUMINIUM FABRICATION
- RESIDENTIAL & COMMERCIAL PROJECTS (only if confirmed)
- CONTACT US FOR A QUOTE
Do not advertise discounts, free delivery, free cutting, warranties,
or turnaround times unless the client confirms these offers. The ticker
must remain readable, non-distracting, and static by default; do not
create a continuously moving ticker unless it adds clear value and
remains accessible.
D. About
- Section ID: about
- Small eyebrow: ABOUT
- Heading: "Built around your space."
- Short paragraph introducing the business and its approach to
  aluminium fabrication.
- Use one supporting workshop or finished-project image if supplied.
- Include up to three factual value points, such as attention to
  detail, practical solutions, and a clean finish, provided they
  accurately reflect the client's work. Avoid claiming certifications,
  years of experience, or industry leadership without evidence.
Keep copy concise. If the client has not provided a company history,
write a neutral introduction rather than inventing a biography.
E. Services
- Section ID: services
- Eyebrow: WHAT WE DO
- Heading: "Fabrication for the way you use your space."
- Use a clean catalogue-style grid with image-led cards, thin
  separators, minimal descriptions, and small outlined actions.
- Each card should have an image, service title, one- or two-sentence
  description, and a Request a quote anchor.
Possible service categories to confirm with the client before
publishing:
1. Aluminium windows
2. Aluminium doors
3. Shopfronts and commercial glazing
4. Office partitions
5. Custom aluminium frames and related fabrication
These are candidate categories, not verified offerings. Remove any
service the client does not provide. Do not imply that glass,
installation, repairs, or other adjacent services are included unless
confirmed.

On desktop, use a balanced two- or three-column grid depending on image
availability. On mobile, stack cards in one column. Avoid carousels
unless there are enough real services and a clear usability benefit.
F. Our work / image gallery
- Section ID: work
- Eyebrow: SELECTED WORK
- Heading: "Made to fit. Built to work."
- Display the client's supplied aluminium fabrication photographs in a
  responsive, editorial gallery.
- Use varied but deliberate image aspect ratios; keep crops consistent
  within a row.
- Add concise captions only when the project type is known.
- Do not invent project names, client names, locations, or project
  results.
- If there are too few images, omit the gallery section or use a
  small, honest selection rather than filler imagery.
Images should be optimised, responsive, and assigned meaningful alt
text. Use next/image for local images, set dimensions or aspect ratios
to prevent layout shifts, and prioritise the actual hero image.
G. Contact / quote request
- Section ID: contact
- Use a high-contrast dark panel or a clean white section with a
  strong heading.
- Heading: "Have a project in mind?"
- Copy:
  Tell us what you need fabricated and get in touch to discuss your project.
- Clearly display:
  - Phone: +254 723 138 122
  - Email: jescrivah92@gmail.com
  - Service area: Nairobi, Kenya
- Use working tel:+254723138122 and mailto:jescrivah92@gmail.com
  links.
- Add a primary Call now CTA and a secondary Email us CTA.
- Optionally add a WhatsApp CTA using https://wa.me/254723138122.
  Encode any prefilled message correctly. Do not imply that messages
  are submitted through a website form unless a real form backend has
  been implemented.
For this MVP, prefer direct phone, email, and WhatsApp contact over a
non-functional quote form. If a form is added, validate it and connect
it to a real submission destination; never show a success toast for a
submission that has not actually been delivered.
H. Footer
- Repeat the typographic wordmark.
- Short description: aluminium fabrication in Nairobi, Kenya.
- Quick links to About, Services, Our Work, and Contact.
- Phone and email links.
- Copyright line using the current year dynamically.
- Keep the footer monochrome and compact.
- Do not add social media icons or links unless the client provides
  real profiles.
6. Responsive behaviour
Design mobile-first and verify at approximately 360px, 390px,
768px, 1024px, and 1440px.
- No horizontal overflow.
- Hero image and headline stack in a deliberate order on small
  screens.
- CTAs become full-width or comfortably tappable when needed.
- Gallery and service grids collapse cleanly.
- Navigation is usable with touch, keyboard, and screen readers.
- Contact links remain visible and easy to tap.
- Keep text line lengths comfortable and preserve sufficient
  whitespace without wasting mobile viewport space.
7. Images and asset organisation
The developer will add the client's aluminium fabrication images. Create
and use a clear local asset structure, for example:
public/
  images/
    aluminium/
      hero-aluminium.jpg
      about-workshop.jpg
      service-windows.jpg
      service-doors.jpg
      service-shopfronts.jpg
      service-partitions.jpg
      work-01.jpg
      work-02.jpg
      work-03.jpg
These filenames are suggested conventions; use the actual supplied
filenames where practical. Do not create fake image files or assume
every listed image will exist.

Implementation requirements:
- Use local image paths through next/image.
- Create a central typed image/content configuration so filenames, alt
  text, service labels, and captions are easy to update.
- If an image is missing, gracefully omit that image or render a
  neutral designed placeholder; do not leave broken-image icons.
- Do not use a generic stock image as if it were the client's work.
- Write descriptive alt text based on what each image actually shows.
  Use empty alt text for purely decorative imagery.
- Use appropriate sizes, sensible dimensions, and modern formats
  where supported.
- Avoid loading every gallery image eagerly. Prioritise the hero image
  and lazy-load below-the-fold images.
8. Technology and project structure
Use the requested versions and conventions, checking compatibility
before installation.
- Next.js 16.4.1, App Router
- TypeScript, strict mode
- Tailwind CSS
- shadcn/ui
- Sonner for notifications
- Lucide React for icons
- next/image and next/font where appropriate
Suggested structure:
app/
  layout.tsx
  page.tsx
  globals.css
components/
  site-header.tsx
  mobile-navigation.tsx
  hero-section.tsx
  value-ticker.tsx
  about-section.tsx
  services-section.tsx
  work-gallery.tsx
  contact-section.tsx
  site-footer.tsx
  ui/                  # shadcn/ui components
lib/
  site-content.ts       # Typed copy, links, services, image paths
  utils.ts
public/
  images/
    aluminium/
Keep the page composition clear and avoid creating abstractions that
make a small one-page website harder to maintain. Use Server Components
by default. Add "use client" only to components that need browser
interaction, such as mobile navigation or interactive tooltips.
9. shadcn/ui, skeletons, badges, tooltips, and Sonner
Component policy
Use shadcn/ui components where they improve consistency or
accessibility. Do not force every available component into the page
merely to demonstrate the library.
- Button: Primary and secondary CTAs, with clear focus and hover
  states.
- Badge: Small monochrome labels such as NAIROBI, KENYA or
  ALUMINIUM FABRICATION.
- Tooltip: Use sparingly for icon-only controls or supplementary
  information. Do not hide essential information inside a tooltip.
  Ensure keyboard and touch users are not blocked.
- Skeleton: Create reusable skeletons for the hero image, service
  cards, and gallery items if the page has a real loading state or
  client-side image/data dependency. A static page should not display
  skeletons indefinitely or add artificial loading delays.
- Sonner: Mount one <Toaster /> in the root layout if toast
  notifications are used. Use toasts only for real user actions and
  outcomes, such as copying contact details. Do not show a success
  toast for a mailto: or tel: link merely being clicked.
- Other shadcn/ui components: Keep available for genuine needs,
  but avoid unnecessary dialogs, tabs, accordions, tables, carousels,
  forms, or dropdowns when plain semantic HTML provides a better
  experience.
Use the current shadcn/ui installation and component conventions
compatible with the project's framework version. Do not create a second
toaster or duplicate UI primitives.
Loading and error states
- Prevent image layout shifts by reserving image dimensions.
- If a genuinely asynchronous component needs a loading state, use a
  skeleton matching the final layout.
- Ensure errors or missing optional images do not break the page.
- Keep the main marketing content available without JavaScript
  wherever possible.
10. Accessibility
- Use semantic landmarks: header, nav, main, section headings,
  and footer.
- Use one clear h1; preserve a logical heading hierarchy.
- All interactive elements must be keyboard accessible with visible
  focus styles.
- Maintain sufficient text/background contrast.
- Add accessible names to icon-only controls.
- Provide meaningful alt text for informative images.
- Use descriptive link labels rather than vague labels such as
  Click here.
- Respect reduced-motion preferences.
- Tooltips must not contain essential instructions or contact
  information that is unavailable elsewhere.
11. SEO and sharing
Set page metadata in app/layout.tsx or the appropriate App Router
metadata export:
- Title: Aluminium Fabrication in Nairobi | Escrivah
- Description: A concise, accurate summary of the services the
  client confirms they provide in Nairobi.
- Canonical URL: configure only when the final domain is known.
- Open Graph title, description, and image: use real brand/project
  imagery once available.
- Add a favicon only if a suitable logo or wordmark asset is supplied
  or created.
- Use descriptive section headings and natural language; avoid keyword
  stuffing.
- Include local business structured data only with verified details.
  Do not invent a street address, opening hours, ratings, or price
  range.
- Ensure the page is indexable and does not accidentally include
  noindex in production.
- Use descriptive filenames and alt text for images.
12. Performance
- Keep client-side JavaScript minimal; the page should be primarily
  Server Components.
- Use next/image with appropriate sizing and loading priorities.
- Avoid unnecessary animation libraries and large dependencies.
- Prevent cumulative layout shift with image dimensions and stable
  section layouts.
- Use CSS for simple decorative effects.
- Avoid auto-playing video, heavy 3D scenes, and excessive parallax.
- Test production output, not only the development server.
- Target strong Core Web Vitals, while treating Lighthouse scores as
  measurements to investigate rather than guarantees.
13. Functionality checklist
- [ ] Header links navigate to the correct sections.
- [ ] Mobile menu opens, closes, and works with keyboard input.
- [ ] Primary and secondary hero CTAs work.
- [ ] Service quote links navigate to Contact.
- [ ] Telephone link opens the device's calling flow.
- [ ] Email link opens the user's email client.
- [ ] WhatsApp link opens the correct chat, if included.
- [ ] Images load correctly and have appropriate alt text.
- [ ] Missing optional images do not break layout.
- [ ] Tooltips are supplementary and accessible.
- [ ] Toasts, if any, reflect real outcomes.
- [ ] No fake form submissions, broken links, or placeholder social
  links.
- [ ] Footer year is current.
- [ ] No horizontal overflow at mobile widths.
14. Content verification before launch
Confirm the following with the client before publishing:
- [ ] Preferred business name and wordmark
- [ ] Exact services offered
- [ ] Whether installation, glazing, repairs, or measurements are
  included
- [ ] Whether the service area is Nairobi only or broader
- [ ] Which supplied photos may be published
- [ ] Whether any project captions or customer testimonials are
  approved
- [ ] Opening hours, if they should be shown
- [ ] Final domain, if a custom domain will be used
- [ ] Whether WhatsApp is the preferred contact channel
Do not delay the MVP for optional details if the client approves a
simple, accurate version. Omit unconfirmed claims rather than guessing.
15. Definition of done
The website is ready for review when:
1. The single-page layout matches the specified minimalist industrial
   visual direction.
2. All required sections are implemented: Hero, About, Services,
   Contact, and Footer. Include the value ticker and work gallery when
   appropriate assets/content are available.
3. Supplied client images are correctly integrated and optimised.
4. Contact links work and use the verified client details.
5. Responsive layout, keyboard navigation, and accessibility basics are
   checked.
6. SEO metadata and social sharing metadata are configured.
7. There are no broken links, missing assets, console errors, or
   misleading claims.
8. TypeScript checks, linting, and a production build pass using the
   project's package manager.
9. The final implementation and any remaining client-content questions
   are summarised clearly.
Build priority: Establish the design tokens and page structure
first, then implement the hero and contact conversion path, followed by
About, Services, gallery, responsive polish, metadata, and validation.
16. Comprehensive SEO strategy: Kenya, Nairobi, and AI search
16.1 SEO objectives and research findings
The site should target people in Kenya who are actively looking for an
aluminium fabricator, especially customers in Nairobi who want to
discuss a real project. Optimise for traditional search engines and
AI-assisted discovery by making the business, services, location,
evidence, and contact details explicit and consistent.

Initial public search-result research for this blueprint found Kenyan
directories and competing fabricator websites using terms such as
aluminium fabricators in Nairobi, aluminium and glass
fabricators, aluminium windows and doors, and aluminium
fabrication in Kenya. Competitor service pages commonly organise
content around specific products such as windows, doors, shopfronts,
partitions, curtain walls, and glazing. These are useful language and
intent clues, not verified search-volume data and not proof that this
client offers every listed service.

Research references: - Google Search Essentials:
https://developers.google.com/search/docs/essentials - Google SEO
Starter Guide:
https://developers.google.com/search/docs/fundamentals/seo-starter-guide -
Google guidance for AI features in Search:
https://developers.google.com/search/docs/appearance/ai-features -
Google Local Business structured data:
https://developers.google.com/search/docs/appearance/structured-data/local-business -
Kenyan aluminium directory listings:
https://yellow.co.ke/categories/aluminium - Example Kenyan aluminium
fabricator service language: https://bestlinkfabricators.co.ke/

Do not claim that a keyword is "high volume" or attach search-volume
estimates unless validated using a keyword tool such as Google Keyword
Planner, Google Search Console data, or a credible SEO platform. Before
launch, manually review live Kenyan search results and record the actual
competing pages and search intent.
16.2 Keyword strategy and priority
Use the terms below as an initial keyword map. Priorities describe
strategic relevance and likely commercial intent, not measured monthly
search volume.
Primary business and location terms
- aluminium fabricators in Kenya
- aluminium fabricator in Nairobi
- aluminium fabricators in Nairobi
- aluminium fabrication in Kenya
- aluminium fabrication in Nairobi
- aluminium works in Nairobi
- aluminium and glass fabricators in Nairobi (only if glass work is
  offered)
- aluminium fabrication services in Kenya
Product/service terms --- publish only after the client confirms each service
- aluminium windows in Nairobi
- aluminium window fabricators in Nairobi
- aluminium doors in Nairobi
- aluminium door fabrication in Kenya
- aluminium sliding doors in Nairobi
- aluminium shopfronts in Nairobi
- aluminium office partitions in Nairobi
- custom aluminium frames in Nairobi
- aluminium and glass installation in Nairobi (only if installation is
  offered)
- aluminium repairs in Nairobi (only if repairs are offered)
Commercial and long-tail intent
- aluminium fabricator near me
- affordable aluminium fabricators in Nairobi
- aluminium fabrication quote in Nairobi
- custom aluminium fabrication in Nairobi
- aluminium windows and doors for homes in Kenya
- aluminium fabrication for commercial buildings in Nairobi
- aluminium fabricator for contractors in Nairobi (only if this is a
  target market)
- aluminium fabrication price in Kenya
Do not repeat every keyword mechanically. Use natural language,
synonyms, and the terms customers actually use. The page should sound
like a real local business, not a keyword list.
16.3 Keyword-to-page mapping
For the current one-page MVP, assign each main topic to a distinct
section so the page has clear topical coverage:
  Page element            Primary topic           Supporting language
  Title and H1            Aluminium fabricator in Actual business name;
                          Nairobi, Kenya          aluminium fabrication

  Hero copy               Aluminium fabrication   Concise description of
                          in Nairobi              confirmed work

  About                   Aluminium fabrication   Real background,
                          services in Nairobi,    process, service area
                          Kenya                   

  Each service card       One confirmed service   Product-specific terms
                                                  and project use cases

  Work gallery            Aluminium fabrication   Accurate captions
                          projects                describing real work

  Contact                 Contact an aluminium    Phone, email, service
                          fabricator in Nairobi   area, quote CTA

  FAQs, if added          Customer questions      Pricing factors,
                          about confirmed         measurements,
                          services                materials,
                                                  installation, lead
                                              times
Do not create a separate landing page for every spelling variation or
neighbourhood. If the business later serves multiple towns or has
several distinct services, create useful, unique pages only where the
content and service offering justify them.
16.4 Recommended page metadata and headings
Set a concise, distinctive title and meta description in the Next.js
Metadata API. Treat the following as initial copy and refine it when the
brand name and confirmed services are known.
- Suggested title:
  Aluminium Fabricator in Nairobi, Kenya | Escrivah
- Suggested meta description:
  Looking for aluminium fabrication in Nairobi, Kenya? Contact Escrivah to discuss your aluminium fabrication project and request a quote.
- H1: Aluminium Fabrication in Nairobi, Kenya
- Supporting hero heading or tagline:
  Aluminium, crafted with precision.
The page must have one clear H1, then logical H2s for About, Services,
Our Work, and Contact. Do not hide keyword-rich text in images. Do not
repeat the same city and keyword in every heading. Use the business name
consistently after the client confirms it.

Configure in the App Router: - metadataBase once the final production
domain is confirmed. - title, description, and a sensible title
template if future pages are expected. - alternates.canonical pointing
to the final canonical URL. - Open Graph and social metadata with a
real, optimised image and accurate text. - A favicon and web manifest
only when suitable assets are available. - app/robots.ts and
app/sitemap.ts where appropriate. - Correct HTTP status codes and no
accidental noindex in production.

Do not set a placeholder or invented production domain as the canonical
URL. If the project uses a temporary hosting domain, decide whether it
should be indexed before launch and update metadata when the custom
domain is connected.
16.5 Breadcrumbs and site hierarchy
A single-page homepage at / has no meaningful parent/child path beyond
the homepage itself. Do not display a misleading
Home > Services > Contact breadcrumb for sections that are simply
anchors on the same page. Use the primary navigation and section links
for those.

Still, implement a reusable, accessible Breadcrumbs component so the
site can support proper breadcrumbs if distinct service or location
pages are added later.

Requirements for future pages: - Example hierarchy:
Home > Services > Aluminium Windows - Use semantic navigation with an
accessible label such as aria-label="Breadcrumb". - Mark up the list
with an ordered list; mark the current page with
aria-current="page". - Link each parent crumb to a real, crawlable
URL. - Keep breadcrumb labels concise and consistent with the page
title. - Add BreadcrumbList JSON-LD on pages where a real breadcrumb
hierarchy exists. - Ensure the structured data matches the visible
breadcrumbs and page hierarchy. - Do not add fake breadcrumb URLs,
anchor fragments as separate pages, or schema that does not match
visible content.

For the initial homepage, omit visible breadcrumbs and BreadcrumbList
schema unless a real navigational hierarchy is introduced. The reusable
component can be present in the codebase without rendering on /.
16.6 Structured data and entity clarity
Add valid JSON-LD that describes only facts visible on the page and
verified by the client. Use a suitable Schema.org business type such as
LocalBusiness if appropriate; do not choose a more specific subtype
unless it genuinely fits the business.

Potential properties after verification: - @context, @type, name,
url, image, description - telephone, email - address only if
a real public business address is provided - areaServed for Nairobi or
other locations the business genuinely serves - sameAs only for
official social profiles or authoritative business profiles -
openingHoursSpecification only when hours are confirmed - logo only
if a real logo exists

Implementation rules: - Use JSON-LD in a dedicated component or the
page/layout, safely serialised. - Never invent street addresses,
coordinates, opening hours, review scores, awards, years in business, or
prices. - Do not add fabricated Review or AggregateRating data. -
Validate the JSON-LD with Google's Rich Results Test and Schema Markup
Validator. - Keep business name, phone, email, and location consistent
across the site and legitimate business profiles. - Structured data
helps clarify the entity; it does not guarantee rich results or AI
citations.
16.7 AI search optimisation (AEO/GEO) --- grounded, useful implementation
Optimise for AI-assisted search by improving the same foundations that
make the site useful to people and understandable to search systems.
There is no guaranteed trick that forces AI tools to mention the
business.
- State the business identity, core service, and location plainly near
  the top of the page.
- Use descriptive headings and short, self-contained explanations of
  each confirmed service.
- Answer real customer questions clearly, with the answer close to the
  question.
- Include factual project photos, accurate captions, and original
  descriptions of the work.
- Keep phone, email, service area, business name, and official
  profiles consistent.
- Make important content available as crawlable HTML text rather than
  embedding it only in graphics or inaccessible client-only widgets.
- Use descriptive internal links and meaningful image alt text.
- Publish useful information based on the fabricator's actual
  knowledge, such as what affects an aluminium fabrication quote, what
  details to provide when requesting a quote, or how to prepare
  measurements, provided the client can verify the advice.
- Seek genuine mentions and links from relevant local partners,
  suppliers, associations, community organisations, and satisfied
  customers. Never buy fake reviews or generate fake mentions.
- Keep the website fast, accessible, secure, and technically
  crawlable.
- Check the current AI crawler and search engine documentation before
  making access-control decisions. Do not block legitimate search
  crawlers accidentally.
Do not add artificial keyword blocks, mass-produce near-duplicate town
pages, create unsupported claims, or add special AI files purely because
a marketing article says they are mandatory. Google states that there is
no special schema required specifically for AI features; standard SEO,
unique helpful content, and sound technical implementation remain the
foundation.
16.8 Local SEO for Kenya
The website alone is not the entire local SEO strategy. Once the client
approves the business name and details:
1. Create or claim the business's Google Business Profile if eligible.
2. Choose the most accurate primary business category available; do not
   choose a category simply because it contains a target keyword.
3. Add a truthful description, contact details, service area, real
   photographs, and confirmed opening hours.
4. If the business is a service-area business without a customer-facing
   premises, follow Google's current address-display rules; do not
   publish a residential address without permission.
5. Request honest reviews from real customers after completed work.
   Never offer rewards for reviews or write reviews on the client's
   behalf.
6. Respond professionally to reviews and questions.
7. Maintain consistent name, address (if public), and phone details
   across legitimate Kenyan directories and relevant industry listings.
8. Add the website URL to official profiles and use UTM parameters on
   campaign links where useful.
9. Share real completed projects through the business profile and
   appropriate local channels.
10. Do not create fake offices or separate Google Business Profiles for
    locations the business does not genuinely operate from.
The current verified service area is Nairobi. Do not claim nationwide
coverage until the client confirms it.
16.9 Image SEO
The site will use client-supplied aluminium fabrication photographs,
which can demonstrate real work and provide useful image-search context.
- Use descriptive filenames such as
  aluminium-sliding-door-nairobi.jpg only when the filename
  accurately describes the image and any location claim is true.
- Prefer modern compressed formats such as AVIF or WebP where
  practical.
- Set explicit width/height or aspect ratios to prevent layout shifts.
- Use meaningful, specific alt text describing the visible work; avoid
  stuffing multiple keywords into alt attributes.
- Use empty alt text for decorative imagery.
- Use the hero image as the likely LCP image and prioritise it;
  lazy-load below-the-fold images.
- Add a suitable Open Graph image for social sharing.
- Only label an image as a completed client project when it actually
  is one and the client has permission to publish it.
- Do not use competitors' project images or stock photos as if they
  were the client's own work.
16.10 Technical SEO checklist for Next.js
- [ ] All key copy is rendered as crawlable HTML, preferably through
  Server Components.
- [ ] The page returns HTTP 200 and is not blocked by robots.txt,
  login, or accidental noindex.
- [ ] Unique title and meta description are present.
- [ ] Canonical URL uses the confirmed production domain.
- [ ] Open Graph and social sharing metadata work.
- [ ] sitemap.xml and robots.txt are valid and consistent with
  indexing intent.
- [ ] Internal anchor links and all contact links work.
- [ ] One H1 and logical heading hierarchy.
- [ ] Local images use next/image, correct sizing, alt text, and
  sensible loading priorities.
- [ ] JSON-LD is valid, truthful, and consistent with visible content.
- [ ] HTTPS is enabled on the final domain.
- [ ] No broken links, placeholder content, duplicate titles, or
  JavaScript console errors.
- [ ] Mobile layout works on narrow screens and touch targets are
  accessible.
- [ ] Check Core Web Vitals and Lighthouse on a production build,
  preferably on a throttled mobile profile.
- [ ] Verify the live URL in Google Search Console after launch.
- [ ] Submit the sitemap in Search Console and inspect the homepage
  with URL Inspection.
- [ ] Review indexing and search query data periodically; do not
  promise a specific ranking or time to rank.
16.11 Analytics and measurement
Set up Google Search Console once the production domain is available.
Optionally add a privacy-conscious analytics tool or Google Analytics if
the client consents and the implementation meets applicable privacy
requirements.

Record a baseline at launch and review monthly: - Search impressions and
clicks - Queries that trigger the site - Click-through rate and average
position, interpreted in context - Indexed URL and crawl issues - Clicks
on telephone, email, and WhatsApp CTAs where tracking is implemented
transparently - Qualified enquiries and completed jobs, tracked by the
business outside the website if necessary - Core Web Vitals and mobile
usability

Do not judge success by rankings alone. For a small local fabricator,
qualified calls and quote enquiries are the business outcomes that
matter most.
16.12 Recommended content expansion after the MVP
A one-page website is a sensible launch choice, but it limits how
thoroughly the business can address multiple services and customer
questions. Once services and real project evidence are confirmed,
consider adding only useful pages such as:
- /services/aluminium-windows
- /services/aluminium-doors
- /services/aluminium-partitions
- /projects/ or individual project case studies
- /faqs/ or a useful FAQ section on the homepage
Create each page only if the client offers that service and can provide
distinct, useful information. Give each page a unique title, H1, copy,
images, internal links, canonical URL, and appropriate breadcrumbs. Do
not publish thin pages solely to target combinations of "Kenya",
"Nairobi", and each keyword.
16.13 SEO launch checklist
- [ ] Confirm the business name and exact services.
- [ ] Approve target keyword themes and final title/description.
- [ ] Confirm the service area and public business details.
- [ ] Add accurate copy with natural Kenya/Nairobi context.
- [ ] Add genuine project images with descriptive alt text.
- [ ] Configure metadata, canonical, Open Graph, sitemap, and robots
  rules.
- [ ] Add only truthful LocalBusiness JSON-LD.
- [ ] Implement a reusable breadcrumb component for future
  hierarchical pages; do not show fake breadcrumbs on the homepage.
- [ ] Validate structured data and inspect the production page.
- [ ] Set up Search Console and submit the sitemap.
- [ ] Complete Google Business Profile setup if eligible.
- [ ] Plan a monthly review of search queries, enquiries, and
  technical health.