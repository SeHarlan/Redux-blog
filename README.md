# Lab: Redux Blog

Create all the redux state management for a blog.

## Blog Action

* create `src/actions/postActions.js`
  * posts have an title and body
  * you can create a post
  * you can delete a post
  * BONUS: you can update a post by passing an id and new body

## Blog Reducers

* create `src/reducers/postReducer.js`
  * store an array of posts
  * handle create a post
  * handle delete a post
  * BONUS: handle update a post by index

## STRETCH Blog Combine Reducers

* create `src/actions/commentActions.js`
  * create an action to create a comment for a post (by post index)
  * create an action to delete a comment for a post (by post index and comment index)
* create `src/reducers/commentReducer.js`
  * store comments for each post (create an object where the key is a posts index)
    and the value is an array of comments
  * handle create a comment
  * handle delete a comment
  * delete post should also delete all comments

## Blog selectors

* create `src/selectors/postSelectors.js`
  * get all posts
  * get a post by index
* STRETCH: create `src/selectors/commentSelectors.js`
  * get all comments by post

## Rubric

* 3 points for actions
  * 1 point for each action
  * 0.5 points for each test
* 4 points for reducers
  * 1 points for each case
  * 1 point for each test
* 3 points for selectors
  * 1 point for each selector
  * 0.5 points for each test
