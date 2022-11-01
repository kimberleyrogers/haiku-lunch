# haiku-lunch
tasty nuggets of poetry about things I've eaten

## 2 hour website challenge
Recently I'm VERY busy. Working a full time job in Education and a part time job on a Software Engineering course and in my spare time trying to pivot into full time work as a Junior Developer. I feel like I barely have time for a kata or two on Codewars. How am I supposed to keep developing and learning?

On 31.10.2022 I set a 2 hour website challenge for myself. The aim was to create a basic database, flask server and react front end which would randomly display a silly haiku I'd written about a meal I'd eaten.

I'll track my progress here and continue to return for 2 hour sessions whenever I have the time!

## what did I learn? 
The notes in italic are notes for me about my progress or things I mulled over.

### PROGRESS! DAY 1 - 31/10/2022

#### initial creation

* In GitHub, create new repo. Use settings - add 'readme', select Python type of .gitignore and MIT licence.
* Copy the SSH key and use git clone locally.

#### database

* Create db locally *(psql doesn't like "-" in database names)*
* Create schema and seed files to create a table and add the haiku content.
*INSERT INTO haiku (first_line, second_line, third_line, subject) VALUES ();*

#### flask server

* Create a server.py file.
* Create a virtual environment.
* Create a requirement.txt file.
* Created an app route which uses SQL to check count of records in my table, then generated a random number in that range and pulled a random haiku record from table. 
* *understood a little more about tuples and how to convert them to usable integers*

#### create a react front end

* Created a new React app in a client specific folder of my project folder.
* *now i have 2 x read me files and 2 x .gitignores - I should learn whether these belong in the client or sever level of the project*
* *how do people decide between yarn and npm for managing projects?*
* Start project using npm.
* Create basic header, footer and main components.
* Install axios in react project folder and import into App.js file.
* Deal with CORS ERROR! *I used flask-cors*

#### what else?

* Pushed to GitHub along the way, the basic website exists!

### PROGRESS! DAY 2 - 01/11/2022

### front end - structure

* Tidied up my README.md file to appreciate yesterday's progress.
* Played around with where to place my State so I could update page content.
* *Think about everything that needs to access the State and the 'lowest' level that can access all of those components*
* Set up structure of page - thinking about how Header buttons and main content will interact.
* Focus on getting Component pieces into place first and the content later. E.g. About page in place, About content can wait.
* *Tried to use e.target.value on a div element and value was undefined. Googled to find that e.target.id works for html.*
* All buttons work to navigate between random haiku and About page.
* *My 'home' button doesn't randomise the haiku as I would like*

### front end - appearance

* Added Flex display for header and footer.
* Imported a handwritten style font from Google for haiku content.
* Updated the FavIcon logo to a donut... fitting.
* Attempting to randomise the background colour of my site. Found a guide here: https://www.geeksforgeeks.org/how-to-generate-random-colors-by-using-react-hooks/ 
* *Invalid hook call error, I'd returned the wrong function. Further errors, I watched Net Ninja to help me resolve - https://www.youtube.com/watch?v=CWEOYFzgOJs*
* *Spent time playing around with the colour, faced lots of quirkly issues*

#### what else?

* Did not push to GitHub after creating individual features today, got in too deep.


### NEXT TIME: deploy the site