import React, { useEffect, useContext, useState } from 'react'
import { UserContext } from '../contexts/users.context'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../css/homepage.module.css';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

interface Post {
  id: number,
  title: string,
  body: string
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  height: '80vh',
};

const HomePage = () => {
  const { loggedUserEmail } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  const getPosts = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(response.data);
  }

  useEffect(() => {
    if (!loggedUserEmail) {
      navigate("/");
    }
  }, [])

  useEffect(() => {
    getPosts();
    console.log(1);
  }, [])

  const deletePost = (postId: number) => {
    let postsAfterDeletion = posts.filter((post: Post) => post.id !== postId);
    setPosts(postsAfterDeletion);
  }

  return (
    <div className={styles.postsDiv}>
      {posts.map((post: Post) => (
        <div className={styles.post} key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <Button size="small" onClick={handleModalOpen}>COMMENTS</Button>
          <Modal
            open={open}
            onClose={handleModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore fugit, quibusdam natus illo fugiat aut saepe aperiam ipsum? At a voluptatem iure consequuntur nisi numquam sunt tempore adipisci amet, reprehenderit aliquid culpa nam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore fugit, quibusdam natus illo fugiat aut saepe aperiam ipsum? At a voluptatem iure consequuntur nisi numquam sunt tempore adipisci amet, reprehenderit aliquid culpa nam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore fugit, quibusdam natus illo fugiat aut saepe aperiam ipsum? At a voluptatem iure consequuntur nisi numquam sunt tempore adipisci amet, reprehenderit aliquid culpa nam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore fugit, quibusdam natus illo fugiat aut saepe aperiam ipsum? At a voluptatem iure consequuntur nisi numquam sunt tempore adipisci amet, reprehenderit aliquid culpa nam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore fugit, quibusdam natus illo fugiat aut saepe aperiam ipsum? At a voluptatem iure consequuntur nisi numquam sunt tempore adipisci amet, reprehenderit aliquid culpa nam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore fugit, quibusdam natus illo fugiat aut saepe aperiam ipsum? At a voluptatem iure consequuntur nisi numquam sunt tempore adipisci amet, reprehenderit aliquid culpa nam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore fugit, quibusdam natus illo fugiat aut saepe aperiam ipsum? At a voluptatem iure consequuntur nisi numquam sunt tempore adipisci amet, reprehenderit aliquid culpa nam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore fugit, quibusdam natus illo fugiat aut saepe aperiam ipsum? At a voluptatem iure consequuntur nisi numquam sunt tempore adipisci amet, reprehenderit aliquid culpa nam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore fugit, quibusdam natus illo fugiat aut saepe aperiam ipsum? At a voluptatem iure consequuntur nisi numquam sunt tempore adipisci amet, reprehenderit aliquid culpa nam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore fugit, quibusdam natus illo fugiat aut saepe aperiam ipsum? At a voluptatem iure consequuntur nisi numquam sunt tempore adipisci amet, reprehenderit aliquid culpa nam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore fugit, quibusdam natus illo fugiat aut saepe aperiam ipsum? At a voluptatem iure consequuntur nisi numquam sunt tempore adipisci amet, reprehenderit aliquid culpa nam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore fugit, quibusdam natus illo fugiat aut saepe aperiam ipsum? At a voluptatem iure consequuntur nisi numquam sunt tempore adipisci amet, reprehenderit aliquid culpa nam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore fugit, quibusdam natus illo fugiat aut saepe aperiam ipsum? At a voluptatem iure consequuntur nisi numquam sunt tempore adipisci amet, reprehenderit aliquid culpa nam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore fugit, quibusdam natus illo fugiat aut saepe aperiam ipsum? At a voluptatem iure consequuntur nisi numquam sunt tempore adipisci amet, reprehenderit aliquid culpa nam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore fugit, quibusdam natus illo fugiat aut saepe aperiam ipsum? At a voluptatem iure consequuntur nisi numquam sunt tempore adipisci amet, reprehenderit aliquid culpa nam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore fugit, quibusdam natus illo fugiat aut saepe aperiam ipsum? At a voluptatem iure consequuntur nisi numquam sunt tempore adipisci amet, reprehenderit aliquid culpa nam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore fugit, quibusdam natus illo fugiat aut saepe aperiam ipsum? At a voluptatem iure consequuntur nisi numquam sunt tempore adipisci amet, reprehenderit aliquid culpa nam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore fugit, quibusdam natus illo fugiat aut saepe aperiam ipsum? At a voluptatem iure consequuntur nisi numquam sunt tempore adipisci amet, reprehenderit aliquid culpa nam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore fugit, quibusdam natus illo fugiat aut saepe aperiam ipsum? At a voluptatem iure consequuntur nisi numquam sunt tempore adipisci amet, reprehenderit aliquid culpa nam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore fugit, quibusdam natus illo fugiat aut saepe aperiam ipsum? At a voluptatem iure consequuntur nisi numquam sunt tempore adipisci amet, reprehenderit aliquid culpa nam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore fugit, quibusdam natus illo fugiat aut saepe aperiam ipsum? At a voluptatem iure consequuntur nisi numquam sunt tempore adipisci amet, reprehenderit aliquid culpa nam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore fugit, quibusdam natus illo fugiat aut saepe aperiam ipsum? At a voluptatem iure consequuntur nisi numquam sunt tempore adipisci amet, reprehenderit aliquid culpa nam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore fugit, quibusdam natus illo fugiat aut saepe aperiam ipsum? At a voluptatem iure consequuntur nisi numquam sunt tempore adipisci amet, reprehenderit aliquid culpa nam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore fugit, quibusdam natus illo fugiat aut saepe aperiam ipsum? At a voluptatem iure consequuntur nisi numquam sunt tempore adipisci amet, reprehenderit aliquid culpa nam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore fugit, quibusdam natus illo fugiat aut saepe aperiam ipsum? At a voluptatem iure consequuntur nisi numquam sunt tempore adipisci amet, reprehenderit aliquid culpa nam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore fugit, quibusdam natus illo fugiat aut saepe aperiam ipsum? At a voluptatem iure consequuntur nisi numquam sunt tempore adipisci amet, reprehenderit aliquid culpa nam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore fugit, quibusdam natus illo fugiat aut saepe aperiam ipsum? At a voluptatem iure consequuntur nisi numquam sunt tempore adipisci amet, reprehenderit aliquid culpa nam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore fugit, quibusdam natus illo fugiat aut saepe aperiam ipsum? At a voluptatem iure consequuntur nisi numquam sunt tempore adipisci amet, reprehenderit aliquid culpa nam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore fugit, quibusdam natus illo fugiat aut saepe aperiam ipsum? At a voluptatem iure consequuntur nisi numquam sunt tempore adipisci amet, reprehenderit aliquid culpa nam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore fugit, quibusdam natus illo fugiat aut saepe aperiam ipsum? At a voluptatem iure consequuntur nisi numquam sunt tempore adipisci amet, reprehenderit aliquid culpa nam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore fugit, quibusdam natus illo fugiat aut saepe aperiam ipsum? At a voluptatem iure consequuntur nisi numquam sunt tempore adipisci amet, reprehenderit aliquid culpa nam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore fugit, quibusdam natus illo fugiat aut saepe aperiam ipsum? At a voluptatem iure consequuntur nisi numquam sunt tempore adipisci amet, reprehenderit aliquid culpa nam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore fugit, quibusdam natus illo fugiat aut saepe aperiam ipsum? At a voluptatem iure consequuntur nisi numquam sunt tempore adipisci amet, reprehenderit aliquid culpa nam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore fugit, quibusdam natus illo fugiat aut saepe aperiam ipsum? At a voluptatem iure consequuntur nisi numquam sunt tempore adipisci amet, reprehenderit aliquid culpa nam.

              </Typography>
            </Box>
          </Modal>
          <span className={styles.actions}>
            <DeleteIcon className={styles.deleteIcon} onClick={() => { deletePost(post.id) }} />
          </span>
        </div>)
      )}
    </div>
  )
}

export default HomePage
