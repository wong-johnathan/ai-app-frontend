import { Box, Fade } from '@mui/material';
import { useState } from 'react';
const Image = ({ src, text }: { src: string; text: string }) => {
  const [show, setShow] = useState(false);
  return (
    <Box
      style={{ position: 'relative' }}
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
    >
      <img src={src} alt={text} loading="lazy" width="100%" height="100%" />
      <Fade in={show}>
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            background: '#00000075',
            width: '100%',
            padding: '10px'
          }}
        >
          {text}
        </Box>
      </Fade>
    </Box>
  );
};

export default Image;
