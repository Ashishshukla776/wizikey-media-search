# Test Cases – Wizikey Media Search Page

This document contains the Regression test cases created for the **Wizikey Media Search Page** as part of the QA assessment.

Scope includes: 
- Search functionality  
- Filters (Publications, Cities, Interests)  
- Table results  
- Pagination  
- Get in Touch redirection  
- Basic UI and UX validation 

## Regression test cases

**RG-01 – Validate partial keyword search works**
| Field           | Description                                                    |
| --------------- | -------------------------------------------------------------- |
| Precondition    | Page loaded                                                    |
| Test Data       | Partial keyword: “Shr”                                         |
| Steps           | 1. Type partial text 2. Choose option "by name" 3. press enter |
| Expected Result | Matching reporters appear (e.g., Shruti Srivastava)            |
| Actual Result   | Matches expected result                                        |
| Status          | Pass                                                           |

**RG-02 – Validate search mode dropdown (“by news”) works**
| Field           | Description                                       |
| --------------- | ------------------------------------------------- |
| Precondition    | Page loaded                                       |
| Test Data       | N/A                                               |
| Steps           | 1. Click search mode dropdown 2. Select an option |
| Expected Result | Mode updates and search follows selected mode     |
| Actual Result   | Matches expected result                           |
| Status          | Pass                                              |

**RG-03 – Validate Publications filter search**
| Field                                      | Description                                                                                                                                                                                                                                      |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Precondition                               | Publications filter is open and multiple publications are selected                                                                                                                                                                               |
| Test Data                                  | Selected items: e.g., “Bloomberg”, “Hindustan Times”, “Outlook India”                                                                                                                                                                            |
| Search text: one selected publication name |
| Steps                                      | 1. Open the Publications filter.<br> 2. Select 2–3 publications. <br>3. Use the search box to search for one of the selected publications. <br>4. Unselect the publication from the filtered search results. <br>5. Clear the search text.       |
| Expected Result                            | 1. Search should show the selected publication.<br> 2. After unselecting, the publication should still appear in the full list when the search is cleared.<br> 3. No item should disappear from the list; the behavior should remain consistent. |
| Actual Result                              | The unselected publication disappears from the list entirely after clearing the search, instead of returning to its normal position in the list.                                                                                                 |
| Status                                     | Fail                                                                                                                                                                                                                                             |

**RG-04 – Validate multiple publications selection**
| Field           | Description                                                                                                                                                |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Precondition    | Publications filter open                                                                                                                                   |
| Test Data       | Select 2–3 publications                                                                                                                                    |
| Steps           | 1. Open Publications filter. 2. Select Publication option 1. 3. Select Publication option 2. 4. Select Publication option 3.                               |
| Expected Result | User should be able to select multiple publications smoothly. The page should apply filters only after user stops selecting, not reload after every click. |
| Actual Result   | Page loads/buffers after each selection, causing a noticeable delay and interrupting the multi-selection experience.                                       |
| Status          | Fail                                                                                                                                                       |

**RG-05 – Validate Publications filter pagination**
| Field           | Description                              |
| --------------- | ---------------------------------------- |
| Precondition    | Publications filter open                 |
| Test Data       | N/A                                      |
| Steps           | Scroll and click next page in the filter |
| Expected Result | Additional publications load smoothly    |
| Actual Result   |                                          |
| Status          |

**RG-06 – Validate Cities filter selection**
| Field           | Description                           |
| --------------- | ------------------------------------- |
| Precondition    | Cities tab open                       |
| Test Data       | City: “New Delhi”                     |
| Steps           | 1. Select “New Delhi”                 |
| Expected Result | Only results from selected city shown |
| Actual Result   |                                       |
| Status          |

**RG-07 – Validate multiple Cities selection**
| Field           | Description                             |
| --------------- | --------------------------------------- |
| Precondition    | Cities tab open                         |
| Test Data       | Cities: New Delhi, Mumbai, Chennai      |
| Steps           | Select multiple cities                  |
| Expected Result | Results should match with selected city |
| Actual Result   |                                         |
| Status          |

**RG-08 – Validate Interests filter selection**
| Field           | Description                      |
| --------------- | -------------------------------- |
| Precondition    | Interests tab open               |
| Test Data       | Select one interest              |
| Steps           | Select interest checkbox         |
| Expected Result | Results update based on interest |
| Actual Result   |                                  |
| Status          |

**RG-09 – Validate Cities and Interests filter pagination**
| Field           | Description                                    |
| --------------- | ---------------------------------------------- |
| Precondition    | Interests tab open                             |
| Test Data       | Page 2                                         |
| Steps           | Navigate to page 2 inside cities and Interests |
| Expected Result | New set of cities and interests load           |
| Actual Result   |                                                |
| Status          |

**RG-10 – Validate combined filtering: Publication + City + Interest**
| Field           | Description                                                        |
| --------------- | ------------------------------------------------------------------ |
| Precondition    | Filters accessible                                                 |
| Test Data       | 1 Publication, 1 City, 1 Interest                                  |
| Steps           | 1. Open https://wizikey.com/media/search. 2. Wait for page to load |
| Expected Result | Results match all applied filters                                  |
| Actual Result   |                                                                    |
| Status          |

**RG-11 – Validate clearing filters resets results**
| Field           | Description                    |
| --------------- | ------------------------------ |
| Precondition    | Filters applied                |
| Test Data       | N/A                            |
| Steps           | Uncheck all filters            |
| Expected Result | Results return to default list |
| Actual Result   |                                |
| Status          |

**RG-12 – Validate table header alignment**
| Field           | Description                                                      |
| --------------- | ---------------------------------------------------------------- |
| Precondition    | Page loaded                                                      |
| Test Data       | N/A                                                              |
| Steps           | Inspect Name, Publications, Interests, Locations, Social columns |
| Expected Result | Headers align correctly with data                                |
| Actual Result   |                                                                  |
| Status          |

**RG-13 – Validate social icons open correctly**
| Field           | Description                        |
| --------------- | ---------------------------------- |
| Precondition    | At least one row with social icons |
| Test Data       | LinkedIn / X icon                  |
| Steps           | Click icon                         |
| Expected Result | Opens correct page in new tab      |
| Actual Result   |                                    |
| Status          |

**RG-14 – Validate masked email & phone**
| Field           | Description                                           |
| --------------- | ----------------------------------------------------- |
| Precondition    | Page loaded                                           |
| Test Data       | N/A                                                   |
| Steps           | Inspect email and phone formats                       |
| Expected Result | Masking consistent (e.g., l***@h***.com, 0**-******7) |
| Actual Result   |                                                       |
| Status          |

**RG-15 – Validate More Filters drawer responsive layout**
| Field           | Description                                  |
| --------------- | -------------------------------------------- |
| Precondition    | Mobile viewport                              |
| Test Data       | N/A                                          |
| Steps           | Open More Filters                            |
| Expected Result | Drawer fits mobile screen and remains usable |
| Actual Result   |                                              |
| Status          |

**RG-16 – Validate filter “Go to page” inside Cities/Interests**
| Field           | Description                         |
| --------------- | ----------------------------------- |
| Precondition    | Cities/Interests tab open           |
| Test Data       | Page = 10                           |
| Steps           | Enter page 10 and press Enter       |
| Expected Result | Jumps to page 10 inside filter list |
| Actual Result   |                                     |
| Status          |

**RG-17 – Validate main pagination for large page numbers**
| Field           | Description                         |
| --------------- | ----------------------------------- |
| Precondition    | Pagination visible                  |
| Test Data       | Page = 11922                        |
| Steps           | Click page number 11922             |
| Expected Result | Page loads without crash or timeout |
| Actual Result   |                                     |
| Status          |

**RG-18 – Validate scroll behavior inside filters**
| Field           | Description                     |
| --------------- | ------------------------------- |
| Precondition    | Any filter panel open           |
| Test Data       | N/A                             |
| Steps           | Scroll up/down repeatedly       |
| Expected Result | Smooth scrolling; no flickering |
| Actual Result   |                                 |
| Status          |

**RG-19 – Validate filtered results match keyword + filters**
| Field           | Description                                      |
| --------------- | ------------------------------------------------ |
| Precondition    | Filters applied                                  |
| Test Data       | Keyword + Filters                                |
| Steps           | Apply search + filters together                  |
| Expected Result | Results satisfy both keyword and filter criteria |
| Actual Result   |                                                  |
| Status          |

**RG-20 – Validate after click on ```Get in Touch``` button, reporter detail should be display and register form should be load**
| Field           | Description                                                        |
| --------------- | ------------------------------------------------------------------ |
| Precondition    | “Get in Touch” clicked                                             |
| Test Data       | N/A                                                                |
| Steps           | Check URL after redirect                                           |
| Expected Result | Reporter detail should be display and register form should be load |
| Actual Result   |                                                                    |
| Status          |
