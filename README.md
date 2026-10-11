# Zico by M2HB

A responsive, dependency-free blog built with plain HTML, CSS, and JavaScript. Open `index.html` in a browser or serve this folder with any static web server.

## Pages

- `index.html` — journal homepage with searchable article cards
- `about.html` — about the journal
- `contact.html` — contact form that prepares a message in the visitor’s email app
- `posts/` — article pages and a reusable post template

## Add a post

1. Copy `posts/post-template.html` to a URL-safe filename such as `posts/my-new-story.html`.
2. Update the page title, description, breadcrumb, category, headline, date, reading time, cover image, and article body.
3. Put post-only images in `posts/images/` and use paths relative to the post page.
4. Add a card linking to the article in `index.html`. Include useful terms in its `data-search` attribute so they can be found through search.

The template includes `posts/images/post-cover.svg` as a placeholder cover; replace it with your own image and update its path and alt text.

## Customize

- Site-wide colors, type, and base styles are in `assets/css/global.css`.
- Header, footer, and navigation styles are in `assets/css/layout.css`.
- Page and article layouts are in `assets/css/pages.css` and `assets/css/post.css`.
- Theme preference and mobile navigation are in `assets/js/main.js`.
- Homepage search and contact-form behavior are in `assets/js/blog-engine.js`.
- Replace the Zico by M2HB name, text, and local SVG artwork with your own identity and content.

The contact form does not have a server or store submissions. On submit, it opens the visitor’s default email application with the form details addressed to `hello@zicobym2hb.example`; replace that placeholder with a real contact address before publishing.

Google Fonts are loaded remotely when available. System font fallbacks are provided for offline use.
