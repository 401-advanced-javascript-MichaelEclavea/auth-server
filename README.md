# auth-server

This project will take in the users (username and password). We will generate a hash jwt code that will encode and save the users password to our mongodb database. We are receiving it through our user-model.js and are running it through the schema and then through our mongoose model. 



## Challenge
- take in and save a users, username and password
- create an encoded password from the users password to save into database
- verify encrypted password to user password
- give user a token if password was correct
- implement basic to give token
- implement bearer to verify token
- pass tests with swaggerio

UML ('uml/whiteboard.png');

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

My approach was to create the scaffolding first.

Next was to create the Schema constructor

Then create a class that contains the CRUD operations for creating, updating, reading and deleting from our database. 

