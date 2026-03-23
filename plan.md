# PrayerRope App - Full UI Implementation Plan

## Overview

Turn the existing data layer (7 Coptic Orthodox Agpeya hours, 6 prayer rope sets, theme system) into a fully functioning Expo app with 3-tab navigation: **Agpeya**, **Prayer Rope**, and **Settings**.

---

## Phase 1: Routing Skeleton

Get expo-router working with tab navigation.

**Changes to existing files:**
- `index.ts` → replace with `import 'expo-router/entry';`
- `package.json` → change `"main"` to `"expo-router/entry"`
- `App.tsx` → delete (expo-router uses `app/_layout.tsx` instead)

**New files:**
- `app/_layout.tsx` — Root layout: SafeAreaProvider, StatusBar (light-content), Stack navigator wrapping tabs + prayer detail
- `app/(tabs)/_layout.tsx` — 3-tab layout: Agpeya (cross icon), Rope (circle icon), Settings (gear icon). Dark tab bar with gold active tint
- `app/(tabs)/index.tsx` — Agpeya tab placeholder
- `app/(tabs)/rope.tsx` — Prayer Rope tab placeholder
- `app/(tabs)/settings.tsx` — Settings tab placeholder
- `app/prayer/_layout.tsx` — Stack layout for prayer detail screens
- `app/prayer/[hourId].tsx` — Prayer reader screen placeholder

---

## Phase 2: Core Hooks

Build the persistence and utility layer.

- `src/hooks/useStorage.ts` — Generic AsyncStorage hook: `[value, setValue, loading]` with JSON serialization
- `src/hooks/useSettings.ts` — Load/save `AppSettings` with defaults (haptic on, 33 knots, standard season, reminders off)
- `src/hooks/usePrayerStats.ts` — Load/save `PrayerStats`, exposes `addSession()` with streak calculation
- `src/hooks/useCurrentHour.ts` — Wraps `getCurrentHour()`, re-evaluates on screen focus
- `src/hooks/useHaptic.ts` — Conditional `Haptics.impactAsync()` based on settings
- `src/hooks/useCalendarData.ts` — Derives `CalendarDay[]` from sessions for heatmap (last 90 days)

---

## Phase 3: Agpeya (Home Tab + Prayer Reader)

### Home Screen — `app/(tabs)/index.tsx`

1. **Header**: "Agpeya" title (gold, xxl) with "Book of Hours" subtitle
2. **Current Hour Banner**: Prominent card with gold border showing the currently-suggested hour (name, Arabic name, canonical time, description). Uses `useCurrentHour()`
3. **All Hours List**: FlatList of 7 `AgpeyaHourCard` components — each showing hour name, Arabic name, time, section count. Current hour highlighted with gold accent

### Prayer Reader — `app/prayer/[hourId].tsx`

Full prayer reading experience for one hour:
1. Common Opening (collapsible) — from `commonOpening` array
2. Hour-specific sections — each `PrayerSection` with collapsible `SectionHeader`
3. Common Closing (collapsible) — from `commonClosing` array
4. Scroll progress indicator

**Components needed:**
- `src/components/AgpeyaHourCard.tsx` — Hour card with name, Arabic name, time, current indicator
- `src/components/PrayerText.tsx` — Renders Prayer: rubric (gold italic), title (bold), subtitle, content paragraphs
- `src/components/SectionHeader.tsx` — Collapsible section header with chevron animation

---

## Phase 4: Prayer Rope Tab

### Rope Screen — `app/(tabs)/rope.tsx`

Interactive prayer counter + stats summary:

1. **Prayer set selector** (top) — current set name, tappable to open picker modal
2. **Knot counter circle** (center, dominant) — SVG circle of dots. Completed = gold, current = pulsing light gold, remaining = brown. Count "34/100" in center (hero font)
3. **Prayer text** — current prayer set text below the circle
4. **Tap zone** — each tap increments counter + haptic feedback. On completion: celebration haptic + auto-save session
5. **Controls** — reset button, knot count quick-select chips (33/50/100)
6. **Stats summary** (below controls) — compact row showing today's knots, current streak, total sessions. Tappable to expand to full stats with calendar heatmap

**Components needed:**
- `src/components/KnotCounter.tsx` — SVG circle visualization with tap handler (the core interactive component)
- `src/components/KnotDot.tsx` — Individual knot dot (React.memo for performance with 100 knots)
- `src/components/PrayerSetPicker.tsx` — Modal listing 6 prayer sets with name, description, knot count
- `src/components/StatCard.tsx` — Single stat display (label + value)
- `src/components/ProgressRing.tsx` — SVG circular progress for daily goal
- `src/components/CalendarHeatmap.tsx` — 90-day grid using theme heatmap colors
- `src/components/EmptyState.tsx` — Placeholder when no sessions exist yet

---

## Phase 5: Settings Tab

### Settings Screen — `app/(tabs)/settings.tsx`

ScrollView with grouped sections:

1. **Prayer Settings**
   - Daily knot goal (stepper)
   - Daily session goal (stepper)
   - Default knot count (33/50/100 picker)
   - Liturgical season selector

2. **Reminders**
   - Master toggle
   - Per-hour reminder rows (7 hours) with toggle + canonical time display

3. **Experience**
   - Haptic feedback toggle
   - About row

**Components needed:**
- `src/components/SettingRow.tsx` — Reusable row with label, optional value, right-side control (switch/stepper)
- `src/components/ReminderRow.tsx` — Hour name + time + toggle
- `src/hooks/useReminders.ts` — Schedule/cancel expo-notifications per hour

---

## Complete File List (26 new files)

```
app/
  _layout.tsx
  (tabs)/
    _layout.tsx
    index.tsx          (Agpeya home)
    rope.tsx           (Prayer rope + stats)
    settings.tsx
  prayer/
    _layout.tsx
    [hourId].tsx       (Prayer reader)

src/
  hooks/
    useStorage.ts
    useSettings.ts
    usePrayerStats.ts
    useCurrentHour.ts
    useHaptic.ts
    useCalendarData.ts
    useReminders.ts

  components/
    AgpeyaHourCard.tsx
    PrayerText.tsx
    SectionHeader.tsx
    KnotCounter.tsx
    KnotDot.tsx
    PrayerSetPicker.tsx
    StatCard.tsx
    ProgressRing.tsx
    CalendarHeatmap.tsx
    SettingRow.tsx
    ReminderRow.tsx
    EmptyState.tsx
```

---

## Key Technical Decisions

- **Icons**: Use `@expo/vector-icons` (bundled with Expo) — Ionicons for tab bar, MaterialCommunityIcons for UI elements
- **No Context needed**: Each hook reads AsyncStorage independently. Fine for v1
- **KnotCounter performance**: React.memo on KnotDot prevents re-rendering all 100 circles per tap
- **Seasonal variations**: Check `settings.currentSeason` in prayer reader, gracefully fall back to standard content
- **Common prayers**: Prayer reader manually prepends `commonOpening` and appends `commonClosing` as collapsible sections

## Implementation Order

Phase 1 → 2 → 3 → 4 → 5 (each phase is independently testable)
