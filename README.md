# I'm Outdoorys
Social media app for the outdoorsy

Brief description: The worlds next great social media app for outdoor influencers.

Technologies Used:
- Express.js: Used to build full CRUD, including all 7 RESTful routes.
- MongoDB/Mongoose: Used as the backend database.
- Heroku: Used for app hosting/management.
- jQuery: Used to create delete activity warning modal and also the sort dropdown menu functionality.
- Window.history Web API: Used for proper "back" button functionality.
- Cloudinary: Used as third party media storage for images uploaded to the app.

Live Site:
https://imoutdoorsy.herokuapp.com/

Instructions:
- User can create a new account, log in, and log out. User will not be able to access the rest of the app until they have logged in.
- User can view the home page which displays the "activities feed", a show a all posts by all users.
- On the home page, users can sort posts by recent (chronological order), rating (highest rated by users), and popular (most comments).
- Users can view more information about each post on it's show page including details of the activity and a description.
- On this same page, if the user was the creator of that post, the user can edit or delete the post.  Otherwise users can click a "back" button to return them to the previous page.
- On this same page, users can leave comments on a post.
- Users who created a post can edit all the major details of a post and update it.
- Users who created a post can delete that post.
- Users can create a new post by clicking "Log Activity" and entering at least the basic, required info.
- Users can upload an image file from their device to be displayed on the post.
- Users can view the "My Activities" page which only displays posts created by them.
- From this page, users can create a new post or view and edit their profile.

Unfinished ideas:
- Create a delete button for comments that's only seen by the creator of the comment.
- Touch up the styling of the page, especially the comments section, show page details, and footer.
- When a post is deleted, delete it's image from Cloudinary.
- Mobile design
- Incorporate Google Maps API when selecting the location while creating a post.
