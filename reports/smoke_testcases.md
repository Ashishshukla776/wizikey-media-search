# Test Cases – Wizikey Media Search Page

This document contains the Smoke test cases created for the **Wizikey Media Search Page** as part of the QA assessment.

Scope includes:
- Page load  
- Search functionality  
- Filters (Publications, Cities, Interests)  
- Table results  
- Pagination  
- Get in Touch redirection  
- Basic UI and UX validation  

The Registration page is **not tested**, except confirming that redirection works.

---

## Smoke Test Cases

**SM-01 – Verify Media Search page loads successfully**
| Field           | Description                                                                   |
| --------------- | ----------------------------------------------------------------------------- |
| Precondition    | User has internet access                                                      |
| Test Data       | N/A                                                                           |
| Steps           | 1. Open https://wizikey.com/media/search. 2. Wait for page to load            |
| Expected Result | Page loads without errors; search bar, filters, and results table are visible |
| Actual Result   | Matches expected result                                                       |
| Status          | Pass                                                                          |

**SM-02 – Verify search bar is visible and accepts input**
| Field           | Description                                      |
| --------------- | ------------------------------------------------ |
| Precondition    | Media Search page is loaded                      |
| Test Data       | Any text (e.g., “Bloomberg”)                     |
| Steps           | 1. Click search box 2. Type text                 |
| Expected Result | User can enter text, search icon remains visible |
| Actual Result   | Matches expected result                          |
| Status          | Pass                                             |

**SM-03 – Verify keyword search works**
| Field           | Description                              |
| --------------- | ---------------------------------------- |
| Precondition    | Media Search page loaded                 |
| Test Data       | Keyword (e.g., “Bloomberg”)              |
| Steps           | 1. Type keyword 2. Press Enter           |
| Expected Result | Table updates showing matching reporters |
| Actual Result   | Matches expected result                  |
| Status          | Pass                                     |

**SM-04 – Verify Publications filter opens**
| Field           | Description                                                    |
| --------------- | -------------------------------------------------------------- |
| Precondition    | Media Search page loaded                                       |
| Test Data       | N/A                                                            |
| Steps           | 1. Click on “Publications” filter                              |
| Expected Result | Dropdown opens showing publication search + list of checkboxes |
| Actual Result   | Matches expected result                                        |
| Status          | Pass                                                           |

**SM-05 – Verify More Filters drawer opens**
| Field           | Description                                                     |
| --------------- | --------------------------------------------------------------- |
| Precondition    | Media Search page loaded                                        |
| Test Data       | N/A                                                             |
| Steps           | 1. Click “More Filters”                                         |
| Expected Result | Right-side drawer appears showing “Cities” and “Interests” tabs |
| Actual Result   | Matches expected result                                         |
| Status          | Pass                                                            |

**SM-06 – Verify Cities filter loads**
| Field           | Description                                |
| --------------- | ------------------------------------------ |
| Precondition    | More Filters drawer open                   |
| Test Data       | N/A                                        |
| Steps           | 1. Click “Cities” tab                      |
| Expected Result | List of city names appears with checkboxes |
| Actual Result   | Matches expected result                    |
| Status          | Pass                                       |

**SM-07 – Verify Interests filter loads**
| Field           | Description                                    |
| --------------- | ---------------------------------------------- |
| Precondition    | More Filters drawer open                       |
| Test Data       | N/A                                            |
| Steps           | 1. Click “Interests” tab                       |
| Expected Result | List of interest categories loads successfully |
| Actual Result   | Matches expected result                        |
| Status          | Pass                                           |

**SM-08 – Verify at least one reporter row is displayed**
| Field           | Description                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------ |
| Precondition    | Page loaded                                                                                            |
| Test Data       | N/A                                                                                                    |
| Steps           | Scroll to results table                                                                                |
| Expected Result | At least one row appears with Name, Publications, Interests, Locations, Social icons, and Get in Touch |
| Actual Result   | Matches expected result                                                                                |
| Status          | Pass                                                                                                   |

**SM-09 – Verify pagination works**
| Field           | Description                   |
| --------------- | ----------------------------- |
| Precondition    | Page has multiple pages       |
| Test Data       | Page number = 2               |
| Steps           | Click page number “2”         |
| Expected Result | Page 2 results load correctly |
| Actual Result   | Matches expected result Pass  |
| Status          | Pass                          |

**SM-10 – Verify Get in Touch redirects user**
| Field           | Description                                                                  |
| --------------- | ---------------------------------------------------------------------------- |
| Precondition    | At least one row visible                                                     |
| Test Data       | Any reporter row                                                             |
| Steps           | 1. Click “Get in Touch”                                                      |
| Expected Result | User is redirected to Registration page; reporter info visible on left panel |
| Actual Result   | Matches expected result                                                      |
| Status          | Pass                                                                         |
---

## 📌 Notes  
- Registration form validation is **out of scope**, except verifying redirection works.  
- Test cases are focused strictly on **Media Search page** functionality, as per assessment instructions.  

---

## ✔ Author  
Prepared as part of **Wizikey QA Assessment**.

