React Router - 3
Add a new Route to the users/:username path that renders a ShowGithubUser component
that receives the username as a path parameter and renders the GithubUser component
from the first Data Fetching with fetch and useEffect exercise by passing it the
received username.

React Router - 4
Add three Links within the main App component and use them to navigate to all three routes.

React Router - 6 (FACOLTATIVO, MA NECESSARIO PER PROSEGUIRE)
Create a GithubUserList component that fetching this API url, https://api.github.com/users, show a list of links of github usernames.
By clicking on a username, the ShowGithubUser component will be displayed. Add a Route to the users path that shows the GithubUserList
component. In doing so, remove the /users/:username route from the App component, and add a new nested route within the /users route.

React Router - 7
Add an index route to the GithubUserList route that shows the "Add a user and select it" message.

SWR - 1 (FACOLTATIVO, MA NECESSARIO PER PROSEGUIRE)
Modify the useGithubUser custom hook from the Custom Hooks - 3 exercise to use the useSWR hook to fetch the data of a Github user.

SWR - 2
Modify the useGithubUser hook so that, if the username is null, no request is made.

SWR - 3
Modify the useGithubUser hook so that it returns a function to manually refetch the data when invoked.
