import './App.css';
import Post from './components/post/Post';
import React, { useState, useEffect } from 'react';
import { db, getFirestore, collection, getDocs, addDoc, serverTimestamp } from './services/firebase';
import { Modal, Box, Typography   } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
  const [posts, setposts] = useState([])
  const [open, setOpen] = useState(true)
  useEffect(() => {
    getPosts()
  }, [])

  async function getPosts() {
    const postCol = collection(getFirestore(db), 'posts');
    const postSnapshot = await getDocs(postCol);
    const postList = postSnapshot.docs.map(doc => ({ id: doc.id, post: doc.data() }));
    setposts(postList)
  }
  return (
    <div className="app">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
       <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Login 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
        </Modal>
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="" />
      </div>
      {posts.map(({ post, id }) => (
        <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} dp={post.dp} />
      ))}

    </div>
  );
}

export default App;
