Test Plan: Posit Cloud Core Functionality
Duration: 15 minutes

Objective:
- Validate critical Posit Cloud functionality focusing on authentication, spaces, and recent publishing behavior changes
- Verify core differences between Free, Basic, and Standard accounts

Scope:

In scope:
- Core Authentication and Authorisation
- Account tier-specific functionality validation
- Space Management
- Standard project creation workflows
- Changes to publishing mechanism validation
- Resource limit enforcement
- Basic project sharing capabilities

Out of scope:
- Comprehensive template testing
- RStudio IDE functionality validation
- Jupyter notebook environment testing 
- Testing creating projects from every single template
- Social media authentication integration
- Advanced resource configuration
- Space usage analytics validation
- Load time benchmarking
- Long-term storage analysis
- Archiving workflows

Prerequisites:
Test Accounts:
- Free tier account: [username/password]
- Basic tier account: [username/password]
- Standard tier account: [username/password]
- Secondary test account for sharing: [username/password]

Test Environment:
- Firefox or Chrome browser (latest version)
- Test github repository URL and credentials
- Pre-selected R Markdown Posit Cloud template

Test Cases:
1. Successful login with different account types (Critical)
   - Precondition: Have access to Free, Basic, Standard user accounts
   - Steps:
        - Repeat for each category of user
        - Navigate to login page
        - Enter valid username
        - Enter valid password
        - Click Submit
   - Expected Result: User successfully logs in and reaches workspace.

2. Failed login with an invalid account (Critical)
    - Precondition: Fake username and password for fake account
    - Steps:
        - Navigate to login page
        - Enter invalid username
        - Enter invalid password
        - Click Submit
    - Expected Result: User fails to log in, and given error message.

3. User can create and rename spaces with appropriate defaults set (Critical)
    - Steps:
        - Navigate to workspace
        - Create a new Space
        - Click Space settings
        - Rename Space and press Enter
        - Click Members in upper navbar
    - Expected Result: Space is successfully created and successfully renamed. Name changes in side navbar and upper navbar.
        - User is listed in Members as an Admin
        - Appropriate defaults in Member options
    - Validating differences in account type: Can the Free account create two spaces? (No) Can the Basic or Standard (yes)

4. User can delete spaces
    - Steps:
        - Navigate to workspace
        - Create a new space
        - Click More Actions
        - Select Delete
        - Type incorrect letters in input. Submit button not clickable.
        - Type `DeleteSpaceName` and submit.
    - Expected Result: Space is successfully deleted

5. Validate sidebar links
    - Steps:
        - Navigate to workspace
        - Go through every link in the nav sidebar
    - Expected Result: Each link goes to the relevant page

6. Add a member to a space
    - Precondition: A second valid account
    - Steps:
        - Navigate to a new space
        - Click Members
        - Click Add a Member
        - Insert a valid user account. Set them as Contributor
        - play with setting different settings, and ensure permissions are set accordingly. (Critical)
    - Expected Result: Second user should have access to space. Their permissions should be set accordingly.
    - Validating account type differences: How many users can Free, Basic, Standard invite?

7. User should be able to create a project from a template
    - Steps:
        - Navigate to a space
        - Click "New Project"
        - Click "New Project from template"
        - Select a template
        - Rename project in upper navbar
        - Click settings
        - Click Access
    - Expected result: Project successfully launches and is successfully renamed. Default settings should be set to private.
    - Validating account type differences: Can the Free account create more than 5 projects in a space? (No) Can the basic or standard (yes)

8. Validate recent changes to publishing behaviour (Critical)
    - Preconditions: Free account
    - Steps:
        - Navigate to a Space
        - Click New Project from Template
        - Click R Markdown document publishing
    - Expected result: No publishing button
    - Validating account type differences: Ideally check that Standard accounts can still see their published R Markdown

9. User should be able to create a jupyter notebook project:
    - Preconditions: A standard user account
    - Steps:
        - Navigate to a space
        - Click "New Jupyter project"
        - Click settings
        - Click Access
    - Expected result: Jupyter notebook successfully launches. Default settings should be set to private.

10. User should be able to create an RStudio project:
    - Steps:
        - Navigate to a space
        - Click "New Rstudio project"
        - Click settings
        - Click Access
    - Expected result: Rstudio successfully launches. Default settings should be set to private.

11. User should be able to create a project from a github repo:
    - Preconditions: Account credentials and url for a sample github repository
    - Steps:
        - Navigate to a space
        - Click "New Project from git repository"
        - Enter URL of github repository
        - Enter authentication information
    - Expected result: Project launches and matches the contents in the sample github repository.

12. User should be able to delete a project
    - Steps:
        - Navigate to a space
        - Click "New Rstudio project"
        - Click More Actions
        - Delete
        - Click Trash in workspace
    - Expected result: Project is successfully deleted and is in trash

13. User should be able to share a link to a project with a different User
    - Preconditions: Two accounts
    - Steps:
        - Navigate to a Space
        - Click "New Rstudio project"
        - Click More Actions and Share Link. Error box pops up.
        - Click Settings
        - Click Access
        - Change Access to All Posit Cloud Users
        - Click More Actions and Share Link.
    - Expected result: A different user should be able to access the project at that link. Changes made to project at that link should not propage to original user.


14. Testing differences in resource setting between Free, Basic, Standard accounts (Critical)
    - Preconditions: an account of each type
    - Steps:
        - Navigate to a Space
        - Click the RAM widget
        - Can different account types adjust the resource settings to their prescribed limitations?


Risk Assessment:
High Priority Risks:
- Loading times and resource utilization benchmarks
- Space Usage statistics validation
- Verification of RAM allocation accuracy and resource limit enforcement
- Comprehensive template testing
- In-depth testing of RStudio and Jupyter notebook environments is excluded

Security and Access Management:
- Race conditions of user accessing same account in two different browsers
- Complex permission settings
- Edge cases at tier limitation boundaries
