# Golf Social App

**Introduction:**

Golf Social App provides a Twitter like experience for golfers wanting to
network and share their rounds of golf with other golfers.

_Deployed test version of the app:_

https://tangerine-axolotl-8e448f.netlify.app

**System Architecture:**

The app will be created with the MERN stack (Mongodb, Express, React, Node.js).

The MERN stack is suitable for this app because the component like structure
used in React is suitable for a dynamic social app, where the feed and friends
list vary for each user. Expresss, MongoDB and Node work well with React to provide
the back end. The app also only has two main pages, the profile page and the homepage,
aside from the login and registration screens, which again suits React.

The app is intended to be deployed on Heroku or Netlify.

The app will be styled using Material UI, primarily becuase I have used Bootstrap and
Tailwind CSS with React previously and I wanted experience using Material UI which
I have read is another good option for using with React apps.

**System Requirements Specification:**

The app will provide a social media experience for golfers who want to share their
rounds of golf, with other golfers and increase their golf network. Users will
benefit from the app by increasing their golf network, and meeting new golfers to play
with.

Users will register and login to the app using their email address and password.

They will then be able to view a feed of posts (text & image) from other users, and
their own profile pages, as well as the profiles of other users. They can add and remove
friends to their friends list and they can like posts from other users.

The admin user of the app, is able to delete posts from any user - whereas other users can only
delete their own posts.

Similar software experiences can be found on Twitter or Facebook - but this app will be limited
to golfers only, the benefit being users will only see relevant golf content.

**User Stories**

As a user I want to be able to register and login to the app securely, so that my activity
is stored over time and my data is protected

As a user I want to be able to view a feed of posts from users to see where people are playing
and identify people to connect with

As a user I want to be able to view other golfer's profile, to see their handicap and home golf
club to help identify good people to connect with

As a user I want to be able to like posts, so that I can build relationships with other users

As a user I want to be able to delete my own posts, in case I say something I regret, or make a typo.

As a user I want to be able to post text and pictures, so I can share my recent golf rounds or general
thoughts / memes in the golf space.

As a admin user I want to be able to delete any post, so I can moderate content and protect users from
spam and abusive content.

**Functional Requirements**

Users must be able to register and login to the app using email and password

Users must be able to create a profile when they register

Users must be able to view posts from all users

Users must be able to view profiles of all users

Profiles must include golf club and handicap information

Users must be able to delete their own posts

Users must be able to make posts, which can included text and pictures

Admin users must be able to delete all posts

**Non-Functional Requirements**

Passwords must be encrypted when stored in the database

JWT Tokens must be user to ensure only logged in users can perform actions

The webapp must be responsive to desktop, tablet and mobile screens

# User Instructions & Installation

**How to use the app**

Register for the app on the register screen

Login to the app using you email and password

On the homepage you can make posts, read posts, like posts and add friends

On the profile page you can view your own profile, or the profile of other users

**Install the app**

Clone the repository on GitHub Desktop and open the project in your IDE.

In your project terminal, peform the below actions to re-intall dependencies (node modules):

**i: Front End:**

cd client

npm install

**ii: Server**

cd server

npm install

**Create .env file in the server folder with the following contents:**

MONGO_URL='mongodb+srv:...REPLACE THIS WHOLE STRING WITH YOUR OWN MONGO DB URL...majority'

JWT_SECRET="f9...pick an alphanumberic string for your JWT Secret....b693"

PORT=3001

**Run the app (from your app repository):**

**i: Run Front End:**

cd client

npm run start

**ii: Run Server:**

cd server

nodemon index.js

**Populate test users:**

In the server folder go to the index.js file

Uncomment, lines 66 & 67 in one command - make sure the server refreshed
which it should do automatically if you are using nodemon
then recomment lines 66 & 67.

This will load your app with some hardcoded test users

**Create your own user(s):**

Register a user on the page the app loads on (click the link below the login box)

Login the user in the login screen

You can now use the app with this user

**Create your own admin user:**

If you need an admin user who can delete all posts...

Create the admin user using the registration function

Go to your MongoDB, the relevant 'user' collection

Copy the \_id of the admin user you just created

Paste the id in the PostWidget.jsx file in line 58

When this user is logged in they will be able to delete any post

**Logout:**

You can logout from a profile in top right of the app, if you want to change user

**Security**

API keys, tokens and DB URLs are stored in a .env file that is not
uploaded to GitHub to mitigate security risks.

**Deployment**

The frontend and back have been deployed together for simplicity.

**Link to the app**

https://tangerine-axolotl-8e448f.netlify.app

**References**

The webapp was produced as a Final Project by Michael Tillcock in the HyperionDev Bootcamp.

With thanks to Youtube tutorials from Ed Roh, WebDevSimplified, Sonny Sangha and CyberWolves
for helping me understand some key concepts to build the webapp.
