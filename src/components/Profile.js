import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Profile = ({ user }) => {
  const messages = user.messages;
  const posts = user.posts;
  const userID = user._id;

  return (
    <div>
      <div>
        <h1 id="myPostsTitle">Your Posts</h1>
        {
          posts && posts.map(post => {

            const { description, location, price, title, willDeliver } = post;
            if(post.active===true) {
              return (
                <div key={post._id}>
                  <h3 id="postTitle">Title: {title}</h3>
                  <p>Description: {description}</p>
                  <p>Price: {price}</p>
                  <p>Location: {location}</p>
                  <p>Will Deliver: {willDeliver}</p>
                  {
                    <>
                      <Link id="editPost" to={`/posts/edit-post/${post._id}`}>Edit Post</Link>
                      <Link id="viewPost" to={`/posts/${post._id}`}>View</Link>
                    </>
                  }
                </div>
              )
            }
          })
        }
      </div>
      <div>
        <h1 id="myMessages">Messages Recieved</h1>
        {
          messages && messages.map(message => {
            const fromUserID = message.fromUser._id;
            const { username } = message.fromUser;
            const { title } = message.post;

            if (userID !== fromUserID) {
              return (
                <div key={message._id}>
                  <p id="fromUser">From User: {username} </p>
                  <p>Message: {message.content}</p>
                  <p>Post Reference: {title}</p>
                </div>
              )
            }
          })
        }
      </div>
      <div>
        <h1 id="yourMessages">Your Messages Sent</h1>
        {
          messages && messages.map(message => {
            const fromUserID = message.fromUser._id;
            const { username } = message.fromUser;
            const { title } = message.post;

            if (userID === fromUserID) {
              return (
                <div key={message._id}>
                  <p id="fromText">From User: {username}</p>
                  <p>Message:{message.content}</p>
                  <p>Post: {title}</p>
                </div>
              )
            }
          })
        }
      </div>
    </div>
  )
}

export default Profile;