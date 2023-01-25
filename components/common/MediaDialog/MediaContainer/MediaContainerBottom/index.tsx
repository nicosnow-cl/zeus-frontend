import { useState, CSSProperties } from 'react';
import BookmarkBorder from '@mui/icons-material/BookmarkBorder';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import format from 'date-fns/format';
import FormGroup from '@mui/material/FormGroup';
import IconButton from '@mui/material/IconButton';
import Send from '@mui/icons-material/Send';
import Share from '@mui/icons-material/Share';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import IComment from '../../../../../interfaces/objects/interface.comment';

export interface IMediaContainerProps {
  comments?: IComment[];
  description?: string;
  likes?: number;
  publishDate?: string;
  style?: CSSProperties;
}

const MediaContainerBottom = ({
  comments = [],
  description,
  likes = 0,
  publishDate,
  style = {},
}: IMediaContainerProps) => {
  const [newComment, setNewComment] = useState<string>('');

  return (
    <div className={`w-100 p-3 d-flex fd-column jc-between`} style={style}>
      <div className={`relative`}>
        <IconButton style={{ color: '#fff' }}>
          <FavoriteBorder fontSize="large" />
        </IconButton>

        <IconButton style={{ color: '#fff' }}>
          <Share fontSize="large" />
        </IconButton>

        <IconButton className={`absolute`} style={{ color: '#fff', right: 0 }}>
          <BookmarkBorder fontSize="large" />
        </IconButton>

        <Typography>Le gusta a {likes} usuarios</Typography>

        <Typography className={`pt-2`} textAlign="justify">
          <span style={{ paddingRight: '0.25rem', fontWeight: 600 }}>callie.black</span>
          {description}
        </Typography>
      </div>

      <div className={`h-100`} style={{ overflowY: 'auto' }}>
        {comments.map((comment, idx) => (
          <Typography key={idx} className={`pt-2`} textAlign="justify">
            <span style={{ paddingRight: '0.25rem', fontWeight: 600 }}>{comment.username}</span>
            {comment.msg}
          </Typography>
        ))}
      </div>

      <FormGroup className={`pt-3`}>
        <TextField
          variant="outlined"
          onChange={(evt) => setNewComment(evt.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              border: '2px solid rgba(255,255,255,0.1)',
              borderRadius: '1.5rem',
            },
          }}
          inputProps={{
            style: { color: '#fff' },
          }}
          InputProps={{
            endAdornment: (
              <IconButton>
                <Send />
              </IconButton>
            ),
          }}
        >
          {newComment}
        </TextField>

        {publishDate && (
          <Typography className={`pt-2`} variant="subtitle2">
            {format(new Date(publishDate), 'dd-MM-yyyy')}
          </Typography>
        )}
      </FormGroup>
    </div>
  );
};

export default MediaContainerBottom;
