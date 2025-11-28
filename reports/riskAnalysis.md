# Risk Analysis – Wizikey Media Search Page
This document outlines the major functional, performance, and UX risks identified during testing of the Wizikey Media Search page.
Each risk includes severity, impact, and recommended priority for fixing.

## **1. Functional Risks**

**1.1 Search Results Persist After Clearing Search Input (BUG-03)**

- Severity: High
- Impact:
```
Users see incorrect or stale results
Search box and displayed data become out of sync
Reduces trust in the search system
Leads to confusion when users think they cleared the search
```
- Risk: High risk of wrong data being shown, affecting decision-making.
- Fix Priority: High (functional correctness issue)


**1.2 Filter Items Disappearing After Search (BUG-08)**

- Severity: Medium
- Impact:
```
Selected items vanish from the list when unselected during search
Filter list becomes inconsistent
Users lose control over applied filters
Can lead to repeated wrong selections or mistakes
```
- Risk: Medium–High
- Fix Priority: High (filter consistency is essential)


**1.3 Publications Filter Reloads on Every Selection (BUG-07)**

- Severity: Medium
- Impact:
```
Multi-select filtering becomes very slow
Repeated API calls hurt performance
Users may avoid using filters because of poor experience
```
- Risk: Medium
- Fix Priority: High (developer-level debounce optimization required)

## **2. Performance Risks**

**2.1 Excessive Buffering During Basic Actions**
- Severity: Medium
- Impact:
```
Almost every click causes a data reload
Makes the system feel heavy and unoptimized
High API load
Long-term scaling issues if traffic increases
```
- Risk: Medium–High
- Fix Priority: Medium

## **3. UX & UI Risks**

**3.1 Pagination UI Overflow (Cities / Interests Filters)**
- Severity: Low–Medium
- Impact:
```
Page number text overflows from the button
UI appears broken or inconsistent
Users may think pagination is malfunctioning
```
- Risk: Low
- Fix Priority: Low–Medium

**3.2 Error Message Position for Invalid Page Number**

- Severity: Low
- Impact:
```
Error popup appears far from the action area
Users might not notice it
Reduces clarity and can confuse new users
```
- Risk: Low
- Fix Priority: Low

**3.3 Search Bar Slightly Moves While Scrolling Inside Publications List**

- Severity: Low
- Impact:
```
Small UI jitter
Makes UI feel unstable
Minor distraction but noticeable
```
- Risk: Low
- Fix Priority: Low

**3.4 Search Limited to Only Name/News**

- Severity: Medium
- Impact:
```
Users cannot search by Publication, Location, or Interests
Not intuitive
Leads to extra filter clicks
Adds unnecessary friction
```
- Risk: Medium
- Fix Priority: Medium

# Recommended Test Cases for Automation

**Smoke Test – Page Load & Basic Elements (SM-01, SM-02)**
- Reason:
```
Critical path
Must always work
Simple, stable UI
Fast to automate
High confidence gain
```
**Keyword Search Functionality (SM-03 / REG-01)**
- Why automate:
```
Most important action on this page
High risk area (search logic)
Quick to validate
Should be tested across multiple keywords
```
**Publications Filter – Basic Selection (SM-04)**
- Why automate:
```
Frequently used filter
Ensures dropdown loads & interaction works
```
**Pagination Navigation (SM-09)**
- Why automate:
```
Core data browsing feature
Must not break in future releases
Consistent DOM structure → stable automation
```