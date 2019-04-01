/Landing
  - This only my proposal but we should start with really simple landing to start building user base
    Inspiration: https://i.imgur.com/JcrTqQx.png
  -3 [Epic] User can see a basic information about DevPortal
    - [MVP] User can see a top bar/header with logo/name
    - [1.X] User can see screenshots of application
    - [MVP] User can see a section with info about project
      Like 3 points describing what is this project. It can be lorem ipsum - later we will replace it with proper text.
    - [MVP] User can see a footer with copyright notes
  -3 [Epic] User can sign up to beta
    - [MVP] User can see email input
    - [MVP] User can see a `Sign up` button
+/Login
  -3 [Epic] User can sign in with G Suite
    - [MVP] User can see DevPortal logo/name
    - [MVP] User can see button `Sign in with Google`
/Settings/Account/Details
  -3 [Epic] User can change profile information
    +- [MVP] User can change full name
  -3 [Epic] User can change photo
    - [MVP] User can see current photo
    - [MVP] User can see `Change photo` link
    - [MVP] User can see remove button if there is an photo
/Settings/Project/Details
  -3 [Epic] User can change project details
    - [MVP] User can see text input with `Project name` label
    - [MVP] User can see `Save` button
/Settings/Project/Members
  -3 [Epic] User can manage project members
    - [MVP] User can see a list of project members
    - [MVP] User can see text input with `Email` label
      This input can be used to add new user to project. Just start typing email and autocomplete results will show. Member is added once user press Enter.
    - [MVP] User can see member photo
    - [MVP] User can see member full name
    - [MVP] User can see select input with `Member role` label
    - [MVP] User can see remove button next to each member
/Settings/Project/Links
  -3 [Epic] User can configure links
    - [MVP] User can see a list of configured links
    - [MVP] User can see select input with `Service` label
      Services: Google Calendar, Figma, Slack, Github, Jira, Other
    - [MVP] User can see text input with `Label` label
    - [MVP] User can see text input with `URL` label
    - [MVP] User can see `Remove` button next to each service
    - [MVP] User can see `Add new service` link
    - [MVP] User can see `Save` button
/Settings/Project/Repositories
  -3 [Epic] User can see connected repositories
    - [MVP] User can see list of connected repositories
    - [MVP] User can see respository name
      For example: eyedea-io/dev-portal
    - [MVP] User can see `Remove` button next to each repository
  -3 [Epic] User can add new repository
    - [MVP] User can see `Add repository` button
    - [MVP] User (when click on `Add repository`) can see list of all available repositories
    - [1.X] User (when click on `Add repository`) can see a search input
/Settings/Organization/Details
  -3 [Epic] User can change organization name
    - [MVP] User can see text input with `Organization name` label
    - [MVP] User can see button with `Rename` label
/Settings/Organization/Integrations
  -3 [Epic] User can manage integrations
    - [MVP] User can see list of available integrations
    - [MVP] User can see integration icon
    - [MVP] User can see integration name
      Possible integrations: Google Calendar, Jira, Github, Slack
    - [MVP] User can see if integration is installed or not
    - [MVP] User can see `Add another` button next to installed integration
    - [MVP] User can see `Remove` button next to installed integration
    - [MVP] User can see `Configure` button next to installed integration
    - [MVP] User can see `Install` button next to not installed integration
/Organization
  -3 [Epic] User can see projects
    +- [MVP] User can see a list of projects
    +- [MVP] User can see project name
    - [1.X] User can see project members - avatars
      Inspiration: https://twitter.com/steveschoger/status/981606881255976961
    - [1.X] User can see latest commits made to production and staging branches
      Inspiration: https://i.imgur.com/LE6DXQy.png
    - [1.X] User can see project commit activity
      Inspiration: https://i.imgur.com/iQkrofg.png
    - [1.X] User can add project to favorties
      Favorited project should show at the top of project list SO it can be easier to find by project member
      Inspiration: https://i.imgur.com/Dv3pWCD.png
  +-3 [Epic] User can create a new project
    - [MVP] User can see `Create Project` button
  -3 [Epic] User can search projects
    - [1.X] User can see a search form
  -3 [Epic] User can see organization members
    - [1.X] User can see a list of organization members
    - [1.X] User can see member avatar
    - [1.X] User can see member name
    - [1.X] User can see member role
/Organization/Projects/Create
  +-3 [Epic] User can create a new project
    - [MVP] User can see `Project name` input
    - [MVP] User can see `Create project` button
  -3 [Epic] User can add people during creation of project
    - [1.X] User can see user search form - search by emails
    - [1.X] User can see a list of project members
    - [1.X] User can see member full name
    - [1.X] User can see member email
    - [1.X] User can see remove button next to each member
    - [1.X] User can see a select input with user role in project
+/Organization/Project
  +-3 [Epic] User can see basic project elements
    - [MVP] User can see project name
    - [MVP] User can see link to project settings
  +-3 [Epic] User can see a project members
    - [MVP] User can see a list of project members
    - [MVP] User can see member avatar
    - [MVP] User can see member name
    - [1.X] User can see member role
  +-3 [Epic] User can see a links to services used by project
    - [MVP] User can see a link to JIRA project
    - [MVP] User can see a link to Github repository
    - [MVP] User can see a link to Google Calendar
    - [MVP] User can see a link to Slack channel
    - [MVP] User can see a link to Figma design
    - [MVP] There can be more than one link for service
      For example there can be links to design slack channel and dev slack channel.
  +-3 [Epic] User can see release notes
    - [MVP] User can see list of Github pull requests
      Inspiration: https://desktop.github.com/release-notes/
    - [MVP] User can see pull request title
      For example: Add avatar to user account settings
    - [MVP] User can see a date when pull request was created
    - [MVP] User can see see pull request type
      Possible types: Fix, Improvement, New
    - [MVP] User can see if pull request is still needs code review
    - [MVP] User can see if pull request is open
    - [MVP] User can see if pull request is closed
    - [MVP] User can see if pull request is available on staging
    - [MVP] User can see if pull request is available on production
