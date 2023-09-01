import { Typography } from '@mui/material';

function PageHeader() {
  return (
    <>
      <Typography variant="h3" component="h3" gutterBottom>
        Create Image
      </Typography>
      <Typography variant="subtitle2">Generate image from Dall-E</Typography>
    </>
  );
}

export default PageHeader;
