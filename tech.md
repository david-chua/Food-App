<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3cfa3f412438ab66b2fb4236edc3d5c467975bd9
Weekly Planner:
 - [ ] Need a server to listen for requests
 - [ ] Need an index.html to load for homepage
 - [ ] Need CSS styling
- [ ] As a user, I want to be able to see basic information and examples about how the app works on the homepage.
  - [ ] index.html needs basic info and an example overview page
- [ ] As an unregistered user, I want to be able to navigate to a sign up page.
  - [ ] Need a nav bar with sign up and login
  - [ ] Need a sign up partial
  - [ ] Need to test for if a user is logged in
- [ ] As a registering user, I want to be prompted for my name, email, and password.
  - [ ] Need a user model consisting of name, email, and password.
  - [ ] Registration page needs a form for  name, password, and email.
  - [ ] Body parser needs to be used to get request information
  - [ ] Need an ng-submit and corresponding angular registerUser() method (should post new user) for the form
  - [ ] Server needs a user post (registration) route
- [ ] As a newly registered user, I want to be redirected to the login page.
  - [ ] registerUser() should redirect to the login page or keep the registered user logged in, then redirect to the overview page
- [ ] As a registered user, I want to be able to navigate to the login page from the home page.
  - [ ] Need a login partial
  - [ ] Login partial needs a form for email and password
- [ ] As a user, I want to be able to input my login information on the login page.
  - [ ] Login form should use a method loginUser()
  - [ ] loginUser() should make an http request to the server
  - [ ] server should respond with logged in user info
- [ ] As a logged in user, I want to be taken to the week overview page which shows my meals for the upcoming week, starting on Sunday and ending on Saturday.
  - [ ] loginUser() should redirect to overview page
  - [ ] Need an overview partial
  - [ ] need client-side getOverview() which makes a request to the server
  - [ ] need server-side get overview route
- [ ] As a logged in user, I want to be able to click each day's meal in the overview to view meal details.
  - [ ] Overview page needs each meal to be a link
  - [ ] Need a meal show partial
  - [ ] Need a getMeal() client method
  - [ ] Need a meal show route (server-side)
- [ ] As a logged in user, I want to be able to edit and delete individual meals.
  - [ ] Meal show partial needs an edit button
  - [ ] Meal show partial needs a delete button
  - [ ] Meal show partial needs an edit form that shows up when the edit button is clicked
  - [ ] Edit form should trigger client method updateMeal()
  - [ ] updateMeal() should make a put request to the server
  - [ ] server needs a meal update route
  - [ ] update meal route should update the database entry
  - [ ] update meal route should respond with the updated meal object
- [ ] As a logged in user, I want to be able to edit the order of meals for the week.
  - [ ] Overview page needs an edit button
  - [ ] Edit button should reveal update week form
  - [ ] Option 1: Update week form should allow meals to be dragged to different days
  - [ ] Option 2: Update week form should have drop down menus to select meals for each day
  - [ ] Overview edit form should execute updateWeek() method
  - [ ] updateWeek() method should make a put request to the server
  - [ ] the server needs a put route for updating the week
  - [ ] the update week server route should respond with an updated week object
  - [ ] the update week server route should update the week in the database
- [ ] As a logged in user, I want to be able to add meals to the week, including ingredients, a url, and a title.
  - [ ] There should be an add meal button on the week overview page
  - [ ] The add meal button should run the addMeal() method
  - [ ] The addMeal() method should create an empty meal (should make a post request to server)
  - [ ] addMeal() should open the new empty meal show page with the edit form visible
  - [ ] add meal post route should create a new empty meal
- [ ] As a logged in user, I want to be able to change what week I am viewing on the overview page.
 - [ ] The week overview page needs a select week dropdown
 - [ ] The select week dropdown should change the visible week, probably using an angular method getWeek()
 - [ ] getWeek() should make a get request to the server for the selected week
 - [ ] server should have a week show route that returns the requested week
- [ ] As a logged in user, I want to be able to see a grocery list for the week.
  - [ ] The week overview page should have a get grocery list button
  - [ ] The get grocery list button should trigger getGroceryList()
  - [ ] getGroceryList() makes a get request to the server for the entire weeks groceries
  - [ ] the grocery get route server-side should retrieve the groceries for each meal in the week and return them.
  - [ ] there should be a grocery list partial
- [ ] As a user who is viewing the grocery list, I want to be able to mark items that are already on hand.
 - [ ] There should be a mark on hand button on each grocery items
 - [ ] the mark on hand button should trigger markOnHand()
 - [ ] markOnHand() triggers a put route to the server, setting onHand to true.
 - [ ] grocery update route should update the db and respond with the updated list
- [ ] As a user who just added a new meal, I want to be redirected to the overview page.
- [ ] On recipe page user can store personal idea for food.
- [ ] As a logged in user, I want to be able to log out.
- [ ] As a logged in user, I do not want to see log in or register buttons.
- [ ] User can edit the ingredients
- [ ] User can delete items
- [ ] User can edit recipe
- [ ] User can delete recipe.
<<<<<<< HEAD
=======
>>>>>>> 259c39344ba78eb1ccd08e373bcebe6e61b534a2
=======
- [ ] As a user, I want to be able to view nutritional content for the recipe
  - [ ] New recipe form should contain nutritional information
  - [ ] Recipe show page should show nutritional information
- [ ] As a user, I want to be able to input nutritional information for the recipe
>>>>>>> 3cfa3f412438ab66b2fb4236edc3d5c467975bd9
