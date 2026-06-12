# gitartimar.is — Improvement Plan

## Phase 1: Routing & Core UX
- [x] Add HashRouter (react-router-dom) — replace state-based nav with hash routes
- [x] Fix document titles — `useDocumentTitle` hook sets browser tab per page
- [x] Add a footer — contact info, copyright

## Phase 2: Materials Expansion
- [ ] Scales tab — pentatonic & major scale patterns (SVG diagrams, same approach as chords)
- [ ] Common progressions — I-IV-V, II-V-I in different keys with chord diagrams

## Phase 3: Accessibility & Polish
- [ ] Aria labels — hamburger button, chord diagram SVGs
- [ ] Lazy-load Materials content — `React.lazy` for chord/arpeggio SVGs

## Phase 4: Nice-to-haves
- [ ] Audio clips — click-to-play on chord cards
- [ ] Booking integration — scheduling widget or form instead of just contact info
- [ ] Open Graph / meta tags for social sharing

---

## Notes
- Site is a static SPA deployed to GitHub Pages (docs/ folder)
- Use HashRouter to stay static-compatible (no server-side routing)
- All text must go through i18n (is.json / en.json)
- SVG chord diagrams use layered approach: base grid + overlay
