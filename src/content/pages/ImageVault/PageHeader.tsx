import { Typography } from '@mui/material';

function PageHeader() {
  return (
    <>
      <Typography variant="h3" component="h3" gutterBottom>
        Generated Images
      </Typography>
      <Typography variant="subtitle2">
        Saved AI generated images from Dall-E
      </Typography>
    </>
  );
}

export default PageHeader;
