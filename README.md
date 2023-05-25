# StudySpot
## A web application to search for study locations around UBC campus with live crowd-sourced seat availibility, ratings, and reviews.
 
## Developed by:
- Babak H (babakhadady)
- Noel I (nilling4)
- Henry K (henrykim12)
- Andy L (ndlee221)
- David M (DavidMurgulet)

Note: commit records are not representitive of contributions from above members, as laptops were shared and code sent to each other before being committed to reduce merges. 

## How to run:
From frontend/src, enter in terminal "npm start". If any errors, enter "npm install" first, then "npm start" again.
#### Note: The website (frontend) currently communicates with a backend hosted externally, which also communicates with an online database hosted on MongoDB. If either were to go offline, various changes are required to run this website, such as setting up your own database, connecting to it from the backend, hosting your own backend on your local machine, and updating queryURL's in various frontend components to properly point to the locally hosted backend.

## Sample Photos:
Home page:
![Screenshot of homepage](/sample_photos/homepage.png)
Search bar with auto matching suggestions as you type:

![Screenshot of searchbar](/sample_photos/searchbar.png)

Sample location page:

![Screenshot of sample location page](/sample_photos/studyspotpage.png)

Reporting live status:

![Screenshot of live status bar](/sample_photos/liveStatusBar.png)

Adding review (after clicking button):

![Screenshot of addReview button](/sample_photos/addReview.png)
