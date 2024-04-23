# HCI
The final project for CPSC 484 - Intro to HCI

# How to Run
We do not use any specific dependencies, packages or auxiliary libraries. We use vanilla HTML, CSS, and Javascript. You must simply have any working version of Python to run this application on your local server. You must use Chrome, as other browsers like Safari and/or Firefox could be glitchy. To run on your local machine, use python3 -m http.server 4444, but you can also just open the html on Chrome. Otherwise, the application must be run on the TV. A help page is available denoted by the ? button, which includes all instructions on how to use and interact with the applicaiton. 

# Problem Space
Our Problem Space is "Discovering study spaces that are tailored to student’s needs". This is a problem space because students often struggle to find study spaces that suit their needs. Currently, students struggle to find spaces in which one feels comfortable and productive. As well as this, students may not know certain spaces exist and so would not know they could study there. Our app is essentially a study space matcher where a user can enter their preferences ie indoor, low background noise and consequently get matched to a study space like Sterling Library. This addresses the Problem Space because users can find specific places on campus that suit their needs. You can imagine a scenario where Friend A recommends a study spot to Friend B, but Friend B finds it extremely loud and cannot focus there. 

# Tasks
Task 1:
Discover new study spaces around campus based on desired attributes 
We address this by allowing users to enter their study spot attribute preferences (low-noise, indoor, outdoor, etc) and consequently get matched to a study spot.

Task 2:
Get directions to a study space (do not include how the directions will be provided - that would be solution-dependent)
In the final recommendation page, a QR code is available in which users can scan to their phones and get immediate directions to the spot. 

# Constraints
A constraint in the environment could be the fact that the Zoo (where our TV is located) inherently serves a particular demographic already - that is Computer Science majors. Our application is intended for everybody to use as any student can use this to find a study spot. However, because the TV is located in the Zoo, it is inherently skewed towards CS Majors using the app. Additionally, the app works best with just one person so the Zoo is a rather busy space and can cause the cursor to move slower. 

# Collaboration Record
Student Name and NetID: Rachel Liang rrl44
Contribution: I coded the skeletons for the cursor (on the TV screen) and the hovering affect on the cursor (if the cursor, tied to the user's right hand, hovers over a clickable element on the screen for more than 3 seconds, then click the button). I made this code OOP so it could be applied to all of the interactable elements for each html file. I also added and applied the cursor png and the waving hand gif on the first page. I did all of this by having an array called elements where interactable elements could be pushed into, each element containing a counter. When the cursor hovers over the element, the counter would go up for the element in the elements array, and when the counter went up to a certain number, the element would be clicked.

Student Name and NetID: Noah Dee nad54
Contribution: I collected data for all the study sites, which included preliminary research and sorting study spaces into "preferences". For instance, Sterling Library would be classified under indoors and quiet. I also attached an image and QR code for every single one of these spaces to support Task 2 that allows users to find the directions to it. Next, I worked on the main backend algorithm, which takes in a user's preferences and matches them to a specific study space. I did this by iterating through our data set of study spaces and finding the study spaces that matched the user's preferences.

Student Name and NetID: Leila Nsangou lnn4
Contribution: I handled the majority of the HTML and CSS for our project, creating the main pages displayed in the program and incrementally adding detail in order to fit the goals, functionality, and aesthetics of our project. This included making the base pages, creating and styling buttons, workshopping and torubleshooting the 3-option buttons on the preferences page, iteratively reformatting the layout of each page to fit the dimensions of the TV, and creating scaffolding for dynamic pages such as `recommendation.html`. These changes were directed towards making sure all elements on the screen were easy and straightforward to interact with. I worked on some JavaScript when it came to linking some of the front end to the back. 

Student Name and NetID: Dylan Moss djm239
Contribution: I helped input some data for the study sites, such as their descriptions. At the beginning of the project I set up the user hand tracking and bound the cursor to the screen as well as made sure movement was smoothed and generally useable. I also worked on some CSS and HTML to make the format of the app look better and also easier for the user to interact with, such as buttons showing loading progress. Also set up the local storage calls so we were able to store user preferences and loading the study spaces correctly and show them on the screen.