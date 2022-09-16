import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createMessage } from '../api';

const SendMessage = ({ postID, token }) => {
  const [message, setMessage] = useState({ content: '' });
  // we need 3 things to make this request
  // Post-id, token, message object containing the content of the message

  const navigate = useNavigate()
  
  async function addMessage() {
    await createMessage({ postID, message, token })
    navigate(`/posts`)
  }
  
  return (
    <form onSubmit={(ev) => {
      ev.preventDefault();
      addMessage();
    }}>
      <input
      id="messageForm"
        type='text'
        placeholder='Enter Message'
        onChange={(ev) => setMessage({ content: ev.target.value })}
        />
      <button
      id="messageButton"
      type='submit'>Send Message</button>
    </form>
  )
}

const SinglePostView = ({ posts, token }) => {
  const [activateMessage, setActivateMessage] = useState(false);
  
  const { postID } = useParams();
  
  const [currentPost] = posts.filter(post => post._id === postID);

  const { title, description, location, price, willDeliver } = currentPost;

  return (
    <div>
      <div id="postForm">
        <h3 id="postTitle">{title}</h3>
        <p>Description: {description}</p>
        <p>Price: {price}</p>
        <p>Location: {location}</p>
        <p>Will Deliver: {willDeliver}</p>
      </div>
      {
        token ? (
          <button
          id="messageButton"
          onClick={() => setActivateMessage(!activateMessage)}>Message this user</button>
        ) : (
          null
        )
      }
      {
        activateMessage && <SendMessage postID={postID} token={token}/>
      }
    </div>
  )
}

export default SinglePostView;