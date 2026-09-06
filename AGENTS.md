# PrayerRope workflow

This is the Expo Router prayer app. Use [package.json](package.json) and the current
`app/` and `src/` code for implemented behaviour. [plan.md](plan.md) records the UI
plan and design decisions; verify whether a listed phase already exists before
implementing it. Check the Git root, branch and dirty files before editing.

## Commands and evidence

- On Windows use `npm.cmd run check` for the installed TypeScript compiler with
  `--noEmit`. Use the manifest and lockfile for versions; avoid hard-coded SDK advice.
- This checkout has no automated unit or browser test script. A typecheck is not
  behavioural coverage. Add focused regression coverage when fixing shared logic,
  with its runner justified by the task; do not pretend a missing test command passed.
- `npm.cmd run start`, `android`, `ios` and `web` start development sessions. Use
  the appropriate existing device/client, check ports and stop only owned processes.
- For prose-only edits inspect the scoped diff and links. For implementation changes
  run the relevant checks on the final candidate and exercise affected flows.

## Project constraints

Preserve AsyncStorage settings and session history, including loading and error
behaviour. Test persistence after reload when changing storage. Prayer completion,
counter totals, local-day streaks and reminder permissions require behavioural
checks; haptics and scheduled notifications also require device evidence.
Preserve the existing prayer content and source attribution; content changes need
an identified source and the user's requested scope.

Continue authorised local implementation without repeated confirmation. Keep commits,
EAS/native builds, app-store publication, external sends and destructive data actions
within their exact authorised scope. A working web preview does not establish native
notification, device or release acceptance.
