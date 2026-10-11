# Zico by M2HB — Product Requirements Document

**Document status:** Product definition for the current static journal and its next iterations  
**Product:** Zico by M2HB  
**Document owner:** Product / editorial  
**Last updated:** October 9, 2026

## 1. Executive summary

Zico by M2HB is an independent, responsive editorial journal for curious builders. It publishes clear, considered articles about technology, how it works, and the thoughtful work of building with it. The experience should favor useful explanations and honest trade-offs over hype, jargon, and unsupported certainty.

The product is currently a small static website built with plain HTML, CSS, and JavaScript. Visitors can browse a curated homepage, search article cards, read individual posts, switch between light and dark themes, learn about the journal, and contact its publisher. Article pages automatically display social-sharing links when they follow the shared article structure. Publishing a post is a manual, documented workflow: copy the post template, write the article, and add a card to the homepage.

This PRD records the product intent, current behavior, requirements, quality bar, and recommended future improvements. It does not imply that a CMS, mailing list, analytics service, or server-side contact system already exists.

## 2. Product vision

Make thoughtful technology writing easy to discover, comfortable to read, and worth sharing.

### Product promise

Every story should help a curious reader understand a technology or a building decision more clearly, without pretending the topic is simpler or more certain than it is.

### Editorial principles

- **Clarity over jargon:** explain specialist terms when they are necessary.
- **Curiosity over certainty:** distinguish evidence, opinion, and unresolved questions.
- **Usefulness over hype:** focus on real problems, practical examples, limits, and trade-offs.
- **Depth with consideration:** make long-form reading comfortable across devices.
- **Trust through transparency:** communicate how to contact the publisher and what happens to submitted information.

## 3. Problem statement

People who build, learn about, or are simply curious about technology need accessible explanations that do not oversell emerging ideas. A journal that presents focused stories in a calm, readable interface can help readers understand both what a technology enables and where its limits lie.

For the publisher, the site needs a lightweight way to publish and maintain articles without a content platform or build chain. The current manual workflow is intentionally simple, but it depends on a consistent template and clear publishing instructions to keep metadata, navigation, search, and article presentation in sync.

## 4. Goals and success measures

### Goals

1. Help visitors find and read relevant technology stories quickly.
2. Present article content in an accessible, responsive, low-distraction reading experience.
3. Make the journal’s purpose and editorial voice clear.
4. Let readers contact the publisher with questions, story ideas, greetings, or corrections.
5. Keep publishing and site maintenance manageable with the existing dependency-free static stack.
6. Make published articles easy to share through common social platforms.

### Success measures

The current site does not include analytics. Use the following as product acceptance and qualitative measures until measurement is deliberately added:

- A visitor can reach any published story from the Journal page and search for it by words in its title, excerpt, or search keywords.
- Search gives immediate, understandable results, including a clear empty state when nothing matches.
- Article pages are readable on desktop and mobile, have meaningful headings and image descriptions, and expose sharing actions.
- Primary navigation, theme switching, article search, and contact form can be used without a mouse.
- New posts can be published using the documented workflow without changing shared site behavior or introducing dependencies.
- Contact copy accurately describes the email-client handoff and does not imply that a message is stored or sent by the site.

If analytics are later introduced, define privacy-conscious measures before implementation. Candidate measures include story-card click-through, article readership, search use and no-result rate, and contact-link activation. No personal or sensitive reader data should be collected without an explicit need and appropriate disclosure.

## 5. Audience and user needs

### Primary audience: curious builders

People building software, digital products, or infrastructure who want understandable explanations of technologies and their practical implications.

**Needs**
- Quickly identify whether an article is relevant.
- Understand concepts without having to decode unnecessary jargon.
- See trade-offs and limitations alongside benefits.
- Read long-form content comfortably on a phone or desktop.

### Secondary audience: technology-curious readers

People who follow technology but may not work in the field.

**Needs**
- Clear context and definitions.
- A calm, non-promotional editorial voice.
- Useful paths into related or newer stories.

### Publisher/editor

The person writing and maintaining the journal.

**Needs**
- A predictable article template and straightforward publishing checklist.
- A way to describe, categorize, date, and make each story searchable.
- Shared page behavior that does not need to be copied and maintained in every post.
- Accurate site copy about contact handling and other operational limits.

## 6. Product scope

### In scope

- Journal homepage with editorial introduction and latest-story cards.
- Client-side search over the homepage’s published article cards.
- Individual article pages with metadata, cover image, body, and back-to-journal navigation.
- Automatic social-sharing controls on article pages using the shared article structure.
- About page describing the journal and its editorial approach.
- Contact page with a validated form that prepares a message in the visitor’s email application.
- Responsive navigation, light/dark theme behavior, and shared visual system.
- Manual static publishing workflow and reusable post template.
- Accessibility, SEO fundamentals, and quality checks for these surfaces.

### Out of scope for the current product

- User accounts, comments, memberships, subscriptions, or reader profiles.
- A server-side content management system or API.
- Server-side contact submission, inbox storage, or automated replies.
- A newsletter signup service; the current homepage call-to-action links to Contact.
- Paid content, advertising, recommendations based on personal data, or social login.
- Automated post-card generation or a build pipeline unless separately prioritized.

## 7. Information architecture

### Global navigation

- **Journal:** homepage and article discovery.
- **About:** purpose, editorial philosophy, and a path back to stories.
- **Contact:** message form and explanation of how it works.
- **Theme control:** switches the site between light and dark appearance.

### Homepage

1. Shared site header and navigation.
2. Hero statement establishing the journal’s purpose.
3. Latest stories section containing searchable article cards.
4. Empty search state.
5. Contact call-to-action.
6. Shared footer.

### Article page

1. Shared site header and navigation.
2. Breadcrumb back to the Journal.
3. Article title, category, deck, author, publication date, and estimated reading time.
4. Cover image and caption.
5. Automatically generated social-sharing row directly below the cover.
6. Article body with semantic headings and supporting content.
7. Back-to-stories link and shared footer.

### About page

Explains what the journal is, its editorial principles, and where readers can browse or contact the publisher.

### Contact page

Explains the email-app handoff, asks for a name, email, topic, and message, and tells visitors the site does not store submissions.

## 8. Functional requirements

Priority meanings: **P0** = required for the current core experience; **P1** = recommended improvement; **P2** = optional future enhancement.

### 8.1 Homepage and discovery

**FR-1 — Story listing (P0)**  
The Journal page must display a card for every story intended to be discoverable from the homepage. Each card must link to its article and show a title, publication date, estimated reading time, concise excerpt, and category or equivalent subject label.

**Acceptance criteria**
- Selecting a card title, image, or “Read story” action opens that story.
- Card text and link names identify the destination meaningfully.
- Adding a new article requires updating the homepage listing under the current manual publishing workflow.

**FR-2 — Search (P0)**  
Visitors must be able to filter the visible story cards immediately by text found in the card or its editorial search keywords.

**Acceptance criteria**
- Search is case-insensitive and ignores leading/trailing whitespace.
- Matching updates as the visitor types.
- A no-match query hides non-matching cards and displays a clear empty state.
- The `/` key focuses search when focus is not already in an input, textarea, or select.
- Search remains optional; clearing the query restores all cards.

**FR-3 — Browse entry points (P0)**  
The homepage hero must provide a clear path to the story list. The site header must offer consistent navigation to Journal, About, and Contact.

### 8.2 Article reading

**FR-4 — Article metadata and structure (P0)**  
Each post must provide a unique document title and description, category, useful headline, short deck, author, machine-readable publication date, reading-time estimate, cover image with descriptive alternative text, and a semantically structured article body.

**Acceptance criteria**
- One clear page-level heading identifies the story.
- Headings within the body follow a logical order.
- Dates use a `<time>` element with a machine-readable `datetime` value.
- Decorative imagery uses empty alternative text; meaningful cover imagery has useful alternative text.
- A reader can return to the Journal from the article.

**FR-5 — Automatic article sharing (P0)**  
The shared site script must add a “Share” row after the cover image on article pages that contain `.article .article-cover`. The row must provide X, Facebook, and LinkedIn links populated with the current article URL; X also receives the article title. Links open safely in a new tab and have accessible names.

**Acceptance criteria**
- Every article using the standard article structure receives exactly one share row without manually copying share markup.
- The row appears immediately below the cover and uses the existing responsive, light-grey visual treatment.
- Non-article pages do not receive share controls.
- If the article has no cover matching the shared structure, the script does not insert a misplaced control.
- Share URL values point to the article’s canonical public URL when the site is deployed. Local `file:` URLs are not suitable for real social sharing; validate sharing on the deployed site.

**FR-6 — Long-form readability (P0)**  
Article content must use a constrained reading width, comfortable line spacing, legible typography, and responsive spacing. Readers must be able to distinguish body copy, headings, quotations, code, captions, and metadata.

### 8.3 About and contact

**FR-7 — About page (P0)**  
The About page must explain the journal’s purpose and editorial principles and provide working links to the Journal and Contact pages.

**FR-8 — Contact form (P0)**  
The contact form must collect a visitor’s name, valid email address, topic, and message. On valid submission, it must prepare a `mailto:` message addressed to the configured contact address. It must state that the site does not store or send form submissions itself.

**Acceptance criteria**
- Browser validation blocks missing required fields and malformed email addresses.
- Form values are included in the prepared email subject/body.
- The chosen topic is included in the email subject.
- The page does not claim that the message was delivered; opening an email application is a handoff, not confirmation of sending.
- Before public launch, replace the placeholder contact address (`hello@zicobym2hb.example`) with a monitored address or clearly disable the form.

### 8.4 Global navigation and appearance

**FR-9 — Responsive navigation (P0)**  
At narrow viewport widths, a menu button toggles the navigation and accurately updates its expanded state and accessible label. Selecting a navigation link closes the menu.

**FR-10 — Theme selection (P0)**  
The site must support light and dark themes, initialize from a saved visitor preference or system preference, and update the theme control’s accessible label to describe the available action.

**Acceptance criteria**
- Theme switching does not alter content or navigation behavior.
- A saved explicit theme preference is respected on subsequent visits.
- Text and controls remain legible in both themes.

**FR-11 — Consistent shared shell (P0)**  
Header, navigation, theme control, skip link, and footer must behave consistently across the homepage, About, Contact, and article pages.

## 9. Content and publishing requirements

### Article publishing workflow (current)

1. Copy `posts/post-template.html` to a URL-safe filename under `posts/`.
2. Update the document title, description, breadcrumb, category, headline, deck, author/date/reading time, cover, alt text, caption, and article content.
3. Store post-specific images under `posts/images/` and use paths relative to the post.
4. Add a homepage card linking to the new post and provide useful `data-search` terms.
5. Check article links, image paths, metadata, responsive rendering, and automatic share links.
6. Test on a local HTTP server or deployed preview; social platforms need a public HTTP(S) URL to share.

### Content standards

- Write for curious builders without assuming deep specialist knowledge.
- State the question or problem early and give readers enough context.
- Prefer concrete examples and precise claims.
- Explain important limitations, costs, uncertainty, and alternatives.
- Avoid claims that are primarily promotional or speculative without clear qualification.
- Keep excerpts concise and accurate to the article.
- Use descriptive filenames, URLs, image alternatives, and search keywords.
- Do not publish private, sensitive, or unlicensed personal information.

### Recommended content record

Even while content remains hand-authored HTML, each story should have these fields:

| Field | Requirement |
|---|---|
| Slug / URL | Required; stable, lowercase, URL-safe |
| Title | Required; unique and descriptive |
| Description | Required; concise page summary for search and previews |
| Category | Required |
| Deck / excerpt | Required; accurately previews the story |
| Author | Required |
| Publication date | Required; visible and machine-readable |
| Reading time | Required; estimate clearly presented as an estimate |
| Cover image | Strongly recommended |
| Cover alt text | Required when image conveys information |
| Caption | Optional; add when it provides useful context |
| Body | Required; semantic headings and meaningful links |
| Search terms | Required for effective homepage discovery |

## 10. UX, accessibility, and visual requirements

- Preserve the editorial visual identity: warm paper-like background, restrained green accent, muted metadata, considered typography, and generous whitespace.
- Ensure the layout works on narrow screens without horizontal scrolling.
- Provide visible keyboard focus and a skip-to-content link.
- Use semantic landmarks, buttons for actions, links for navigation, and labels for form controls.
- Give icon-only controls accessible names; mark decorative SVGs as hidden from assistive technology.
- Do not communicate state using color alone.
- Respect reduced-motion preferences and avoid unnecessary animation.
- Maintain readable contrast in light and dark themes.
- Ensure touch targets and spacing are practical on mobile.
- Keep external social links safe with appropriate `rel` attributes when opened in a new tab.

## 11. Technical constraints and assumptions

### Current implementation

- Static HTML pages, shared CSS files, and plain JavaScript.
- No package manager, application framework, server-side code, database, or content API is required.
- `assets/js/main.js` provides shared theme/navigation behavior and article share-row generation.
- `assets/js/blog-engine.js` provides homepage search and contact-form behavior.
- Site fonts are requested from Google Fonts; system fallbacks support offline/unavailable font delivery.
- Contact currently uses a placeholder email address and depends on the visitor having a handler for `mailto:`.

### Constraints

- Keep core browsing and reading functional without third-party JavaScript libraries.
- Use relative asset and navigation paths compatible with static hosting.
- Avoid presenting local development URLs as valid public social-share targets.
- Do not add analytics, tracking, or external dependencies without an explicit product and privacy decision.
- Keep the article template and README publishing instructions aligned with shared behavior.

## 12. Non-functional requirements

### Performance
- Keep pages lightweight and avoid unnecessary client-side work.
- Load below-the-fold homepage cover images lazily where appropriate.
- Do not block rendering on non-essential JavaScript.
- Preserve useful fallback fonts if remote fonts fail.

### Reliability
- A missing optional control must not break unrelated page behavior.
- Broken article or image paths must be caught during the publishing check.
- Shared scripts must only enhance pages that contain the relevant elements.

### Compatibility
- Support current evergreen desktop and mobile browsers.
- Core content must remain available when JavaScript is disabled; JavaScript-dependent enhancements should fail gracefully.

### Privacy
- The current site should not store contact messages or reader profiles.
- Clearly describe any external service introduced in a later version before collecting or transmitting data.

## 13. Measurement and launch checklist

### Per-post publishing checks

- [ ] The new article uses the shared post template and has unique title/description metadata.
- [ ] Breadcrumb, category, author, date, and reading time are accurate.
- [ ] Headline, deck, body headings, and links have been proofread.
- [ ] Cover image loads, has appropriate alt text, and any caption is accurate.
- [ ] Homepage card is present and links to the correct article.
- [ ] Search keywords are useful and do not misrepresent the story.
- [ ] Share row appears once, below the cover, with correct article URL and title.
- [ ] Sharing is tested against a public preview/deployment URL, not a local file URL.
- [ ] Desktop and mobile layouts have been checked.
- [ ] Keyboard navigation, focus visibility, and both color themes have been checked.

### Site release checks

- [ ] Journal, About, Contact, and every published article load without missing assets.
- [ ] Navigation links and active-page states are correct.
- [ ] Homepage search matches title/body-card text and editorial keywords.
- [ ] Search empty state and clear-query behavior work.
- [ ] Contact form validation and email-client handoff work; placeholder address is replaced.
- [ ] Browser console contains no errors from shared scripts.
- [ ] Page titles, descriptions, heading hierarchy, and image alternatives have been reviewed.

## 14. Risks and mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Manual homepage listing is forgotten when a post is added | Story is not discoverable through the Journal page | Keep the publishing checklist in README and validate every post card before release |
| Repeated metadata is inconsistent between homepage and article | Readers receive conflicting dates or descriptions | Use a per-post publishing record/checklist; consider a static content manifest only if duplication becomes a recurring problem |
| Social sharing is tested only from local files | Shares contain unusable `file:` URLs | Test on a public preview URL and verify social share destinations before release |
| Placeholder email reaches nobody | Contact messages cannot be delivered | Replace it with a monitored address before launch; describe the email-app handoff accurately |
| Remote font provider is unavailable | Typography changes or loading is delayed | Retain tested system-font fallbacks |
| Light-grey controls have insufficient contrast in a theme | Share controls become difficult to see | Check contrast and focus states in both themes; adjust tokens if needed |
| Adding publishing automation expands scope prematurely | Maintenance cost outweighs benefit for a small journal | Keep the static workflow until manual publishing becomes an evidenced bottleneck |

## 15. Recommended roadmap

### Now — maintain the dependable static journal

- Keep the current page architecture and article template.
- Ensure all new posts receive automatically generated sharing controls.
- Keep README instructions and this PRD aligned with implementation.
- Replace the contact placeholder before public launch.
- Use the release checklist for every published post.

### Next — reduce publishing errors (P1)

- Add a repeatable static validation script or documented QA command to check article links, required metadata, image paths, and homepage references.
- Decide whether homepage cards and article metadata should be generated from a small content manifest if hand-maintained duplication becomes error-prone.
- Review deployed social previews and search metadata on real public URLs.

### Later — only with demonstrated reader/editor need (P2)

- Evaluate newsletter signup, server-side contact handling, content management, or analytics as separate product decisions.
- Define privacy, operational ownership, failure handling, and maintenance cost before introducing any external service.

## 16. Open decisions

These decisions should be resolved before the corresponding work is started:

1. What monitored public email address should replace the contact placeholder?
2. Should search remain a homepage-only filter, or should the product later support categories, tags, pagination, or an archive?
3. Is manual homepage-card maintenance acceptable as the journal grows, or should content metadata become the source for generated listings?
4. Should any analytics be introduced? If yes, which measures are necessary and what privacy disclosure/consent is required?
5. Is a newsletter a real product requirement, or should the existing “A note, now and then” language remain a general invitation to contact?

## 17. Definition of done

A product change is done when the relevant requirement and acceptance criteria are satisfied; existing pages remain functional; the experience is checked on desktop and mobile, in light and dark themes, and with keyboard navigation; accessibility and metadata are reviewed; no unrelated regressions are introduced; and the README or publishing instructions are updated when the workflow changes.