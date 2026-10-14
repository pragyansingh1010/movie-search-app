# Movie Search API Failure Cases

1. Empty query: keep the search idle and explain what to enter.
2. No matches: show a no-results message and retain the query.
3. Rate limited: explain that the service is temporarily limiting requests.
4. Network failure: offer a retry action.
5. Missing poster: use a local placeholder asset.
6. Missing release date: omit the date rather than displaying `undefined`.