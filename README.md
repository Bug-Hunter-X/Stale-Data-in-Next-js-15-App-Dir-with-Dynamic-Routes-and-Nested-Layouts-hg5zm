# Next.js 15 Stale Data Bug

This repository demonstrates a bug in Next.js 15's `app` directory involving stale data when using dynamic routes and nested layouts.  When navigating between pages that share route parameters, the layout's data fetching may not update correctly, resulting in stale data being displayed.

## Bug Description
The issue occurs when a layout fetches data based on a route parameter, and a nested page also relies on that same parameter.  If the parameter changes during navigation within the nested pages, the layout's data may not refresh, leading to inconsistencies.

## Reproduction Steps
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate between the nested pages. Observe the inconsistencies in the displayed data.

## Solution
The solution involves refactoring the data fetching logic to ensure that data is always correctly fetched and passed down the component tree whenever a route parameter changes. This can be achieved using different approaches like React's `useMemo` hook or by using a more robust data fetching library.
