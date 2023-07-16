# SocialNetworkAPI

This is an example of backend routing for a Twitter-like social media concept. 


## Description

This repository contains the backend routing using the models-views-controllers framework(MVC) to organize and connect it all. This allows the CRUD operations on the User model, and a variety of other CRUD features on the user Thoughts, the ability to add Reactions to user thoughts, and to add or remove Friends from users' friends lists.

## Table of Contents

1. [Team](#team)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Tests](#tests)
5. [Bugs](#bugs)
6. [Questions](#questions)
7. [Contribution Guidelines](#contribution-guidelines)
8. [License](#license)

## Team

---

The app was created by Janica Jensen.

_Other tools utilized:_

node.js: https://nodejs.org/en

express: https://www.npmjs.com/package/express

mongoose: https://mongoosejs.com/

Insomnia: https://insomnia.rest/

## Installation

---

There is no installation necessary, though the user will want to have access to an API development tool such as Insomnia (linked above). There are in-browser options as well for that type of app. 

## Usage

---

Upon downloading the repo, the user will want to open an integrated terminal and run 'npm i' in order to download the dependencies. Then the command 'npm start' will start the server. 

At this point, the user will want to open up their API development tool (Insomnia) and practice using http verbs POST, PUT, DELETE, and GET in order to observe the CRUD functionality of the backend.

First, to add users one will want to use a POST request to the following: 
localhost:3001/api/users
Using JSON in the following format:
{
	"username": "JohnWilliams",
	"email": "maestroOfTheMovies@gmail.com"
}
Upon clicking SEND, one will receive a success message. 

This can then be tested using a GET request to the same:
localhost:3001/api/users 
and the user will be listed in JSON format, now with a uniquely generated ID which is done by Mongoose. This unique ID will be key for future CRUD on any User. 

A PUT request to the same URL above with an added user ID will allow the changing of the users information. For example, if 'i38hfi8rhweui839' were the above created user's ID, one would enter:
localhost:3001/api/users/i38hfi8rhweui839 
and then the JSON including the updated information:
{
	"username": "THEJohnWilliams",
	"email": "maestroOfTheMovies@gmail.com"
}
And the username would be updated upon clicking SEND.

Following that logic, anytime we are creating (POST-ing), unique IDs are not required in the URL since they do not exist yet, POST essentially means "create" in CRUD. However, if the desired outcome involves updating (PUT), deleting (DELETE), or linking 2 unique IDs together (such as in the case of a friends list where ID#1 has a friend of ID#2), then unique IDs are required in the URL field. 

The following URLs can be used with the varying HTTP verbs to act upon the User, Thought, Reaction and Index models. 

GET localhost:3001/api/users/  - retrieves and displays users
POST localhost:3001/api/users/  - creates new users
DELETE localhost:3001/api/users/:id  - deletes user associated with id
PUT localhost:3001/api/users/:id

GET localhost:3001/api/thoughts - retrieves and displays thoughts
POST localhost:3001/api/thoughts - creates a thought (tweet)
PUT localhost:3001/api/thoughts/:id  - updates associated thought
DELETE localhost:3001/api/thoughts/:id - deletes associated thought

POST localhost:3001/api/thoughts/:thoughtID/reactions - adds a reaction to specified 'thought'

DELETE localhost:3001/api/thoughts6/:thoughtID/reactions/:reactionID - deletes the specified thought on the specified reaction

POST localhost:3001/api/users/:userID/friends/:friendID - links the specified userID to the friendID specified at the end of the URL

DELETE localhost:3001/api/users/:userID/friends/:friendID  - this will unlink the friendship between the users specified

A full walkthrough can be found here: https://drive.google.com/file/d/1V6Xk9tlrqTcInsCiee7v-8KiriR2v6Zv/view?usp=sharing

## Tests

---

There are no tests as it was tested as it was developed.


## Bugs

---

There are no bugs currently.

## Questions

---

Please refer any questions to: janicajackson@gmail.com

**GitHub profile:** https://github.com/janicajensen

## Contribution Guidelines

---

If anyone wishes to contribute to this project, they may find the GitHub repository at https://github.com/JanicaJensen/SocialMediaAPI and they are welcome to create a fork.

## License

---

This project is covered under the MIT license.
More info can be found by clicking the badge above the description.


