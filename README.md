# The Tech Blog

## Description 

Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels! This app will allow developers to publish their blog posts and comment on other developers’ posts as well. 

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## App Functionality

```md
GIVEN a CMS-style blog site
WHEN the USER visits the site for the first time
THEN the USER is presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN the USER clicks on the homepage option
THEN the USER is taken to the homepage
WHEN the USER clicks on any other links in the navigation
THEN the USER is prompted to either sign up or sign in
WHEN the USER chooses to sign up
THEN the USER is prompted to create a username and password
WHEN the USER clicks on the sign-up button
THEN their user credentials are saved and the USER is logged into the site
WHEN the USER revisits the site at a later time and choose to sign in
THEN the USER are prompted to enter their username and password
WHEN the USER is signed into the site
THEN the USER sees navigation links for the homepage, the dashboard, and the option to log out
WHEN the USER clicks on the homepage option in the navigation
THEN the USER is taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN the USER clicks on an existing blog post
THEN the USER is presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN the USER enters a comment and clicks on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN the USER clicks on the dashboard option in the navigation
THEN the USER is taken to the dashboard and presented with any blog posts the USER has already created and the option to add a new blog post
WHEN the USER clicks on the button to add a new blog post
THEN the USER is prompted to enter both a title and contents for their blog post
WHEN the USER clicks on the button to create a new blog post
THEN the title and contents of their post are saved and the USER is taken back to an updated homepage with their new blog post
WHEN the USER clicks on one of their existing posts in the dashboard
THEN the USER is able to delete or update their post and taken back to an updated homepage
WHEN the USER clicks on the logout option in the navigation
THEN the USER is signed out of the site
WHEN the USER is idle on the site for more than a set time
THEN the USER is able to view posts and comments but are prompted to log in again before they can add, update, or delete posts
```

## Technology

Heroku, TailwindCSS, HTML, Handlebars.js, JavaScript, Sequelize, Bcrypt, NodeJS and MYSQL

## Links

Github
https://github.com/HerbSneed/Tech-Blog

Heroku
https://the-tech-blog-hs-55f52279bd44.herokuapp.com/

