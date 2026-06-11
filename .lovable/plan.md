# Remove all authentication code

Tear out the mock-auth system and every page, component, hook, helper, and route that exists only for sign-in/up/profile flows. Everything that's currently gated behind auth becomes openly accessible (no login walls, no "create account to download" modals).

## Files to delete

Pages & routes
- `src/pages/auth/Login.tsx`
- `src/pages/auth/Register.tsx`
- `src/pages/auth/Welcome.tsx`
- `src/pages/auth/ForgotPassword.tsx`
- `src/pages/auth/ResetPassword.tsx`
- (empty dir `src/pages/auth/` removed)

Auth components
- Entire `src/components/auth/` folder (`AuthLayout`, `AuthBrandPanel`, `AuthCard`, `FloatingInput`, `PasswordInput`, `SocialButton`, `StepProgress`)

Gating modals (only existed to push users to /register)
- `src/components/reports/DownloadModal.tsx`
- `src/components/events/RegisterEventModal.tsx`
- `src/components/programmes/ProgrammeRegisterModal.tsx`

Auth state & helpers
- `src/lib/mockAuth.ts`
- `src/lib/authReturn.ts`
- `src/lib/authValidation.ts`
- `src/hooks/useMockAuth.ts`
- `src/components/wireframe/ProfileMenu.tsx` (only consumer of mockAuth in header chrome; not imported anywhere else)

## Files to edit

- `src/App.tsx` â drop the 5 auth lazy imports and their `<Route>` entries (`/login`, `/register`, `/welcome`, `/forgot-password`, `/reset-password`).
- `src/lib/routePrefetch.ts` â remove the 5 auth entries from `routeLoaders`.
- `src/pages/ReportsIndex.tsx` & `src/pages/ReportDetail.tsx` â remove `useMockAuth`, `DownloadModal`, gating logic; download buttons trigger the download directly for everyone.
- `src/pages/EventsIndex.tsx` & `src/pages/EventDetail.tsx` â remove `useMockAuth`, `RegisterEventModal`; "Register" CTAs go straight to the event registration link/action without an auth gate.
- `src/pages/ProgrammesIndex.tsx` & (if present) programme detail â remove `useMockAuth`, `ProgrammeRegisterModal`; same treatment.
- `src/components/reports/PersonalizedShelf.tsx`, `src/components/events/PersonalizedEventsShelf.tsx`, `src/components/programmes/PersonalizedProgrammesShelf.tsx` â drop the `MockUser` type import. Replace any "signed-in vs signed-out" branching with the signed-out (public) state and remove the `user` prop from their call sites.
- `src/components/contact/BookConsultation.tsx` & `src/components/contact/ContactFinalCta.tsx` â replace `/register` link targets with `/contact` (or the nearest sensible public action) so no "create account" CTAs remain.

## Out of scope

- No backend / Supabase work (none exists for auth today).
- No nav/header changes beyond removing the unused `ProfileMenu` file â header already doesn't render it.
- No new content; pages that previously sat behind login simply become open.

## Verification

After edits, `rg -n "mockAuth|useMockAuth|AuthLayout|/login|/register|/welcome|/forgot-password|/reset-password|DownloadModal|RegisterEventModal|ProgrammeRegisterModal" src` should return nothing (except possibly `/register` if intentional unrelated copy exists â re-check and clean).
