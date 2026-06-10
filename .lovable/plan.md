# Align /programmes layout with /events

Goal: make `/programmes` mirror `/events` in filter/tab placement and card grid density. No data or card-content changes.

## Changes

### 1. `src/components/programmes/ProgrammesFilterSidebar.tsx`
Rewrite to match `EventsFilterSidebar` structure:
- Accept new props: `type`, `onType`, `typeCounts` (programme type tabs).
- Render a "Programme type" vertical button list inside the sidebar (like Events' Event type list), using `programmeTypes` with icons (LayoutGrid for All, GraduationCap/Cpu/Sparkles/etc for others).
- Add mobile sheet pattern (search + filter trigger button opening a right `Sheet` with the full panel), identical UX to events.
- Keep existing Quick picks + Advanced selects.
- Desktop: sticky sidebar `lg:sticky lg:top-[140px]` inside `cii-card`.

### 2. `src/pages/ProgrammesIndex.tsx`
- Remove `<ProgrammeTypeTabs ...>` render (the standalone sticky tab bar). Keep the import removed.
- Move the section header ("All Programmes / Build the skillsâ¦") above the sidebar+grid row (matches Events placement).
- Pass `type`, `onType={setType}`, `typeCounts={counts}` to `ProgrammesFilterSidebar`.
- Change results grid from `sm:grid-cols-2 xl:grid-cols-3` to `grid-cols-1 sm:grid-cols-2` (2 cards per row, matching events).

### Out of scope
- `ProgrammeTypeTabs.tsx` file left in place (unused) â no functional impact; can be deleted later.
- ProgrammeCard content/visual unchanged.
- No changes to events page, data, or other pages.
