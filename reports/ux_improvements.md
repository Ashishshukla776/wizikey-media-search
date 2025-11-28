

### Add Debouncing for Multi-Select Filters
- Currently, the results table refreshes immediately after each publication selection, causing: Unnecessary reloads, jerky UX, Interrupted flow for users who want to select multiple options
#### Suggestion: Implement debouncing (300–500ms) so API calls trigger only after user finishes selecting multiple items.

### Pagination Number Overflow in Cities/Interests Filter
- In the Cities or Interests filter panel, when navigating beyond page 3, the large page number (e.g., 15160) overflows outside the pagination box.
- #### Suggestion: Apply a dynamic width or auto-adjusting layout for pagination boxes

### Excessive Page Buffering on Every Click like filtering and searching data
- While interacting with the Media Search page, the interface shows buffering/loading indicators on almost every click — especially when:
    - Selecting filters (Publications, Cities, Interests)
    - Switching between pagination pages
#### Suggestion: Implement Debouncing for UI Actions or Optimize Loading or Delayed Execution

### Error Popup Placement for Invalid Page Number
- When the user enters an invalid page number in the pagination input (e.g., “12000”), an error popup (“Select valid page no”) appears at the top-center of the page, near the navigation bar.This makes the popup feel disconnected from the pagination area, and users may miss the message.
#### Suggestion: Improve visibility or Relocate Error Message Near the Pagination Field or Highlight the Invalid Input or Auto-Correct Input

### Search Bar Slightly Shifts While Scrolling Publications List
- Inside the Publications filter, when the user scrolls up and down through the long list of publications, the top search bar of the filter moves slightly. This makes the filter panel feel unstable and visually inconsistent.
#### Suggestion: Fix the Search Bar Position or Prevent Layout Shifts

### Search Should Support Publications, Interests, and Locations
- The current search bar only supports free-text search (mostly by reporter name or news), but does not search across other important fields, such as: Publications, Interests, Locations. This limits the user’s ability to quickly find relevant reporters and forces unnecessary use of multiple filters.
For example, typing “Delhi”, “Economy”, or “Hindustan Times” in the search bar not returns relevent results.
#### Suggestion: Implement Multi-Field Keyword Search or Add “Search by” Dropdown Options or Update Placeholder for Better Clarity
