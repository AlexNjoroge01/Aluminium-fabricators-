# KENFAB Aluminium and Interiors

Marketing website for KENFAB Aluminium and Interiors — aluminium, interior, and
light steel fabrication in Nairobi, Kenya.

## Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
pnpm build      # production build
pnpm start      # run the production build
pnpm lint       # ESLint
pnpm typecheck  # TypeScript
pnpm format     # Prettier
```

## Contact form email delivery

The contact form posts to a server action in `app/actions/contact.ts` and sends
the enquiry to `kenfabaluminium@gmail.com`.

To enable automatic delivery, copy `.env.example` to `.env.local` and fill in the
SMTP details:

```bash
cp .env.example .env.local
```

For a Gmail account, create an [App Password](https://support.google.com/accounts/answer/185833)
and use it as `SMTP_PASS`. `SMTP_USER` and `CONTACT_TO_EMAIL` can both be
`kenfabaluminium@gmail.com`.

If `SMTP_USER` or `SMTP_PASS` is not configured, the form shows a fallback
action that opens the visitor's email app with the enquiry prefilled, so no
message is lost.

## Content

Business details, services, portfolio projects, FAQ copy and contact details
live in `lib/site-content.ts`.
