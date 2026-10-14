## Search and detail states

- Trim the query and avoid sending requests for empty searches.
- Distinguish no results from request errors.
- Keep the selected movie details tied to the correct result item.
- Handle missing posters and metadata without broken layout.
- Prevent an older slow response from replacing a newer search result.