import { Typography } from '@mui/material';

function PageHeader() {
  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg'
  };

  return (
    <>
      <Typography variant="h3" component="h3" gutterBottom>
        Image Generator
      </Typography>
      <Typography variant="subtitle2">
        Ai generated images from Dall-E
      </Typography>
    </>
  );
}

export default PageHeader;
