# test-backend
## BeReal technical test for backend interview

This test is based off a real feature in our backend

It should not take you more than 2 hours

Please do not fork your solution to a public repository


### The discovery feature

The Discovery timeline is a crucial BeReal feature, this is where you see all the new public content of the app

The clients (mobile applications) use the endpoint `/discovery` to get the new public posts

### The discovery endpoint spec

If a cursor is provided, the client wants the PAGE_SIZE posts before (older than) the cursor sorted by descending order of arrival (a scroll down in the app)

If no cursor is provided, the client wants the last PAGE_SIZE posts sorted by descending order of arrival (a pull-to-refresh in the app)

#### as an example:
the timeline is empty

the post 5 is posted, then the post 6 is posted, … the post 11 is posted (we add them all in the beginning for the sake of example)

PAGE_SIZE = 3

the first call with no cursor specified must yield the posts 11, 10, 9 and a cursor

using this cursor, the second call must yield the posts 8, 7, 6 and a cursor

using this cursor, the third call must yield the post 5 and a cursor

using this cursor, the fourth call must yield no posts and no cursor

### Your goal

The feature deliberately unfinished, it contains bugs and it's quite slow

Your goal is to finish the `DiscoveryService`, as of now the `fetchPage` function does not handle the pagination

### Challenges to keep in mind

- clients can have started scrolling from any post (they don't always ask for the last PAGE_SIZE posts)

- keep the insert and fetch complexity low (you can reach constant complexity for the `insert` and `fetchPage` functions)
