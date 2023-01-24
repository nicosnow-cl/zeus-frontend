import { useState } from 'react';

import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import Share from '@mui/icons-material/Share';
import Typography from '@mui/material/Typography';
import BookmarkBorder from '@mui/icons-material/BookmarkBorder';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';

const MediaContainerBottom = () => {
  const [comment, setComment] = useState<string>('');

  return (
    <div className={`w-100 p-3 relative`}>
      <IconButton style={{ color: '#fff' }}>
        <FavoriteBorder fontSize="large" />
      </IconButton>

      <IconButton style={{ color: '#fff' }}>
        <Share fontSize="large" />
      </IconButton>

      <IconButton className={`absolute`} style={{ color: '#fff', right: 0 }}>
        <BookmarkBorder fontSize="large" />
      </IconButton>

      <Typography>Le gusta a 31 personas más</Typography>

      <Typography className={`pt-2`} textAlign="justify">
        <span style={{ paddingRight: '0.25rem', fontWeight: 600 }}>callie.black</span>
        Me encanta como se me ve la cola en esta foto, qué opinas tu? Dejame un comentario y dale
        like si baby. No olvides llamarme para que te cuente más de mi.
      </Typography>

      <FormGroup className={`pt-3`}>
        <TextField
          variant="outlined"
          onChange={(evt) => setComment(evt.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              border: '2px solid rgba(255,255,255,0.1)',
              borderRadius: '1.5rem',
            },
          }}
          inputProps={{ style: { color: '#fff' } }}
        >
          {comment}
        </TextField>
      </FormGroup>
    </div>
  );
};

export default MediaContainerBottom;
