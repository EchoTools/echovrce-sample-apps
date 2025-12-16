# EchoVRCE Color Theme

Unified palette for app surfaces and team accents. CSS variables live in [shared/theme/colors.css](shared/theme/colors.css); Tailwind tokens in [shared/theme/tailwind.config.echo.js](shared/theme/tailwind.config.echo.js).

## Palette

| Use               | Friendly Name    | Hex      |
| ----------------- | ---------------- | -------- |
| Background        | Deep Gunmetal    | #121418  |
| Surface           | Panel Grey       | #1E2126  |
| Text              | Off-White        | #E0E6ED  |
| Text (Muted)      | Text Secondary   | #9AA0A6  |
| Primary Blue      | Electric Cyan    | #00C2FF  |
| Secondary Blue    | Muted Slate      | #4F7A8C  |
| Primary Orange    | Reactor Orange   | #FF9000  |
| Secondary Orange  | Burnt Oxide      | #995A00  |

## Usage

- Plain CSS: import the variables from [shared/theme/colors.css](shared/theme/colors.css) and reference `var(--blue-intense)` etc.
- Tailwind: extend your config with [shared/theme/tailwind.config.echo.js](shared/theme/tailwind.config.echo.js) and use `text-echo-blue`, `bg-echo-bg`, or `text-echo-orange-dim`.
