# Guess the Emoji
Guess the Emoji is our first hackathon project developed as part of the Code Institute Full Software Developer Bootcamp. 


## Introduction 

## Table of Contents 
* [Guess The Emoji](#guess-the-emoji)
    - [Intoduction](#introduction)
    - [Table of Contents](#table-of-contents)
    - [Project Overview](#project-overview)

* [UX/UI Design](#uxui-design) 
    - [User Stories](#user-stories)
    - [Colours](#colours)
    - [Main palette](#main-palette)
    - [Fonts](#fonts)
    - [Wireframes](#wireframes)
    - [Imagery](#imagery)


* [List of Features](#list-of-features)

* [Testing](#testing) 

* [Deployment](#deployment) 

* [Citation](#citation) 

* [Future Features](#future-features) 

* [Known Bugs](#known-bugs) 

 

## Project Overview

### Key Objectives 
* To design and implement a one-page interactive Front-End web pplication using HTML, CSS, and JavaScript with focus on user experience design, acessibility, and responsive DOM manipulation
* To test and validate the application using the W3C validator and the Jigsaw validator
* To successfully deploy on Cloud platformusing Git and GitHub
 
## UX/UI Design

### User Stories 

### Colours 

### Main palette  

### Fonts 

### Wireframes 

### Imagery 

 
## List of Features 


## Built With
### Technology and Languages
![Static Badge](https://img.shields.io/badge/HTML5-Language-grey?logo=html5&logoColor=%23ffffff&color=%23E34F26)
![Static Badge](https://img.shields.io/badge/CSS3-Language-grey?logo=css3&logoColor=%23ffffff&color=%231572B6)

<a href="https://git-scm.com/" target=_blank_>![Static Badge](https://img.shields.io/badge/Git-v2.46.2-grey?logo=git&logoColor=%23ffffff&color=%23F05032)</a>
<a href="https://github.com/" target="_blank">![Static Badge](https://img.shields.io/badge/GitHub-Repo_Hosting-white?logo=github&logoColor=%23ffffff&color=%23181717)</a>
<a href="https://www.gitpod.io/" target="_blank">![Static Badge](https://img.shields.io/badge/Gitpod-IDE-white?logo=gitpod&logoColor=%23ffffff&color=%23FFAE33)</a>

### Libraries and Frameworks
<a href="https://getbootstrap.com/" target="_blank">![Static Badge](https://img.shields.io/badge/Bootstrap-v5.3.3-grey?logo=bootstrap&logoColor=%23ffffff&color=%237952B3)</a>
<a href="#" target="_blank">![Static Badge](https://img.shields.io/badge/Font_Awesome-Icons-grey?logo=fontawesome&logoColor=%23ffffff&color=%23538DD7)</a>
<a href="#" target="_blank">![Static Badge](https://img.shields.io/badge/Google_Fonts-Fonts-grey?logo=googlefonts&logoColor=%23ffffff&color=%234285F4)</a>

### Tools
<a href="https://balsamiq.com/wireframes/" target="_blank">![Static Badge](https://img.shields.io/badge/Balsamiq-Wireframes-grey?logoColor=%23ffffff&color=%23CC0100)</a>


## Testing 

Testing and validation on the website was carried out throughout the course of the project. 

 
This included regular debugging and testing using the Dev Tools as provided within Chrome Browser. 

 
Testing and validation os the website was carried out throughout the course of the project.

This included regular debugging and testing using the Dev Tools as ptovided within Chrome Browser.

[HTML Validation](https://validator.w3.org/)<br>
![HTML Validation](/documentation)

[CSS Validation](https://jigsaw.w3.org/css-validator/)<br>
![CSS Validation](/documentation)

[Lighthouse](https://developer.chrome.com/docs/lighthouse/overview)<br>
![Lighthouse](/documentation)

 

## Deployment 
### Setting up Collaboration and Project Board
1. Create a New Repository

- Login to your GitHub profile.
- Navigate to the Code Institute Full Template.
- Click the dropdown for 'Use this template' and select "Create a new repository".
- Generate the necessary name and description for your repo and click 'Create repository from template'.

2. Set Up Branch Protection Rules

- Go to the repository on GitHub.
- Click on the 'Settings' tab.
- In the left sidebar, click on 'Branches'.
- Under 'Branch protection rules', click 'Add rule'.
- Specify the branch name pattern (e.g., main).
- Select the desired protection rules, such as requiring pull request reviews before merging.
- Click 'Create' to save the branch protection rule.

3. Add Collaborators

- Go to the repository on GitHub.
- Click on the 'Settings' tab.
- In the left sidebar, click on 'Collaborators and teams'.
- Click the 'Add people' button.
- Enter the GitHub username or email address of the collaborator.
- Click 'Add <username> to this repository'.

4. Setup User Stories

- Click on the 'Settings' tab followed by the 'General' settings page and scroll down to the 'Features' Section.
- Ensure that the 'Issues' checkbox is ticked and click the 'Set up Templates' button.
- Clcik 'Add Template', select 'Custom template', then 'Preview and edit' and the 'edit' icon.
- Edit the template to your liking and locate the 'Propose changes' at the top-right of the page and click the 'Commit' changes button
- This should return you back to the repo section

5. Label for MoSCoW prioritisation
- Select the 'Issues' Tab and click on 'Labels'
- Here you can create labels to suit your project.

6. Product Backlog
- Select the 'Issues' Tab and click on 'Milestones'
- Create a new milestone and name it 'Backlog'
- Make a new issue and assign the backlog tag and appropriate labels to it
- Now the user story should be tagged with labels and the backlog milestone

7. Project Board Setup
- Click the 'Link a project' dropdown menu and select 'New Project'
- Choose the Board option and name it
- Create a new column by locating and pressing the '+' button at the far most right of the columns present and name it 'Backlog'
- Drag the new Backlog column so that it appears as the first column

8. Adding User Stories
- Press the '+' at the foot of the first column and click 'Add item from repository'
- Select desired repo to work with and choose the user stories to put in the backlog
- Once all is selected press the 'Add selected items'

9. Configure Board View
- Click the dropdown menu on 'View 1' and select the 'Fields' menu
- Any fields you want to be visible or hidden can be edited here.

### Early Deployment

- Go to the Settings tab of your GitHub repo.
- On the left-hand sidebar, in the Code and automation section, select Pages.
- Make sure:
- Source is set to 'Deploy from Branch'.
Main branch is selected.
Folder is set to / (root).
Under Branch, click Save.
- Go back to the Code tab. Wait a few minutes for the build to finish and refresh your repo.
- On the right-hand side, in the Environments section, click on 'github-pages'.
- Click View deployment to see the live site. The URL will look similar to YOUR-USERNAME.github.io/love-running.

### Git Branching Mechanics

1. Initialising branch
- In VS Code locate 'Terminal' at the top of the window next to 'File', 'Edit' etc.
- In the terminal type 'git checkout -b newBranchName' or 'git switch -c newBranchName' to create a locla branch to work in
- Next, type 'git push --set-upstream origin newBranchName
' to check that your local workspace exists. This only needs to be done for each new branch once.

2. Merging and working with the main branch and your branch
- Once code is ready to be committed type 'git checkout main', 'git pull' and 'git checkout newBranchName
'. If no changes have been made in the main branch these steps can be skipped and you can add/ commit like normal

3. Pull work back in the Main Repo
- Click the 'Main' drop down menu and select your branch name
- Press the 'Compare % Pull request button'
- If satisfied with the request, press the 'Create Pull Request' button
- Finally, if there are no merge conflicts, you can press 'Merge pull request' and the buttons should turn purple.


Additional information on the deployment process can be found on the official [GitHub Docs](https://docs.github.com/en/pages/quickstart)




## Citation 
### AI Usage


### Content
- [Astronaut for Autism](https://github.com/TheRickyroy/astronauts-for-autism/blob/main/README.md)

### Media
 

## Future Features 

 

## Known Bugs 

