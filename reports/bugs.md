# Bug Reports (Assessment Scope)

For this assessment, I am documenting 2–3 key bugs that reflect important functional or UX issues on the Media Search page.

## Bug Report – Selected Publication Disappears When Searched and Unselected

- Bug ID: BUG-01
- Title: Selected publication vanishes from the list after using the search field and unselecting it
- Module: Media Search → Publications Filter
- Description:
```
When multiple publications are selected, and the user searches for a specific publication within the Publications filter, unselecting the searched item causes it to disappear completely from the list, even though it should remain visible.
```
- Environment:
```
Browser: Chrome
OS: Windows 10
Network: Stable
URL: https://wizikey.com/media/search
```

- Severity: Medium
- Priority: Medium–High (Filtering inconsistency / bad UX)
- Steps to Reproduce
```
1. Open https://wizikey.com/media/search
2. Open the Publications filter
3. Select multiple publications (e.g., Bloomberg, Hindustan Times, Outlook India)
4. Use the search bar inside the Publications filter to search for one of the selected items
5. Unselect the searched publication
```
- Actual Result:
```
The unselected publication disappears from the publications list.
Creates confusion because the filter list no longer matches the database.
```
- Expected Result
```
After unselecting a searched publication:
The item should remain visible in the full publication list
The list should automatically refresh and show all publications again
The filter state should remain consistent
```


## Bug Report – Publications Multi-Selection Causes Excessive Page Reloads

- Bug ID: BUG-02
- Title: Page reloads after each publication selection instead of allowing smooth multi-selection
- Description:
```
When selecting multiple publications from the Publications filter, the results refreshes after every single checkbox click. This makes the UI feel slow, interrupts user flow, and results in continuous loading/buffering.
Since Publications is a multi-select filter, the page should ideally refresh after the user finishes selecting (debouncing), not after every selection.
```
- Module: Media Search → Publications Filter

- Environment:
```
Browser: Chrome
OS: Windows 10
Network: Stable
URL: https://wizikey.com/media/search
```
- Severity: Medium
- Priority: High (affects user experience & performance)

- Steps to Reproduce:
```
Open https://wizikey.com/media/search
Click the Publications filter
Select Publication 1
Immediately select Publication 2
Select Publication 3
```
- Actual Result:
```
Page reloads every time a publication checkbox is selected
Results panel shows buffering/loading repeatedly
User cannot select multiple publications smoothly
Creates slow and jerky filter experience
```
- Expected Result:
```
User should be able to select multiple publications smoothly
Page should apply the filter only once after user finishes selecting
No repeated reloads for each click
Filtering should use debouncing (300–500ms) to optimize performance
```

## Bug Report – Search Results Persist After Keyword Is Cleared and Page Is Refreshed

- Bug ID: BUG-03
- Title: Search results remain filtered after keyword is cleared and page is refreshed
- Module: Media Search → Search Bar
- Description
```
After searching for any keyword and getting filtered results, clearing the keyword from the search box does NOT reset the results if the user refreshes the page without pressing Enter.
Even though the search field is empty, the results remain filtered, leading to inconsistent and incorrect behavior.

This indicates that the search state is being stored or reused incorrectly after a page reload.
```

- Environment
```
Browser: Chrome
OS: Windows 10
Network: Stable
URL: https://wizikey.com/media/search
```
- Steps to Reproduce
```
1. Open https://wizikey.com/media/search
2. Enter any keyword in the search bar (example: "Bloomberg")
3. Press Enter → observe filtered results
4. Clear the keyword (input is now empty)
5. DO NOT press Enter
6. Refresh the page (Ctrl+R or browser refresh button)
```
- Actual Result
```
The page reloads showing the same filtered results,
even though the search bar is empty and no keyword should be applied.
```
- Expected Result
```
After clearing the search field and refreshing the page,
the application should load the default full reporter list (unfiltered results).
No search query or filter should remain active.
```