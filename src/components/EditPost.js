import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updatePost, deletePost } from '../api';

const EditPost = ({ posts, token, navigate, user }) => {
  const { postID } = useParams();

  const [currentPost] = posts.filter(post => post._id === postID);

  const { title, description, location, price, willDeliver } = currentPost;

  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDesc] = useState(description);
  const [newLocation, setNewLocation] = useState(location);
  const [newPrice, setNewPrice] = useState(price);
  const [newWillDeliver, setNewWillDeliver] = useState(willDeliver);

  const editPost = async () => {
    const updatedPost = {
      token: token,
      title: newTitle,
      description: newDescription,
      location: newLocation,
      price: newPrice,
      willDeliver: newWillDeliver,
      _id: postID
    }
    await updatePost(updatedPost)
    navigate(`/profile`)
  }

  return (
    <form onSubmit={(ev) => {
      ev.preventDefault();
      editPost();

    }}>
      <h3>{title}</h3>
      <p>Description: {description}</p>
      <p>Location: {location}</p>
      <p>Price: {price}</p>
      <input
        type='text'
        placeholder={title}
        onChange={(ev) => setNewTitle(ev.target.value)}
      />
      <input
        type='text'
        placeholder={description}
        onChange={(ev) => setNewDesc(ev.target.value)}
      />
      <input
        type='text'
        placeholder={location}
        onChange={(ev) => setNewLocation(ev.target.value)}
      />
      <input
        type='text'
        placeholder={price}
        onChange={(ev) => setNewPrice(ev.target.value)}
      />
      <input
        type='checkbox'
        checked={newWillDeliver}
        onChange={(ev) => setNewWillDeliver(ev.target.checked)}
      />
      <button type='submit'>Edit Post</button>
      <button onClick={() => {
      deletePost(token, postID)}}>Delete</button>
    </form>
  )
}

export default EditPost;