import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeader from './PageHeader';
import {
  Button,
  Container,
  Grid,
  InputAdornment,
  OutlinedInput,
  styled,
  Chip
} from '@mui/material';
import Images from './Images';
const OutlinedInputWrapper = styled(OutlinedInput)(
  ({ theme }) => `
    background-color: ${theme.colors.alpha.white[100]};
`
);

const ImageGenerator = () => {
  return (
    <>
      <Helmet>
        <title>Create Image</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={2}
        >
          <Grid item xs={12} md={10}>
            <OutlinedInputWrapper
              type="text"
              placeholder="Input prompt here"
              fullWidth
              startAdornment={
                <InputAdornment position="start">
                  <Chip label="Surprise me" onClick={() => {}} />
                </InputAdornment>
              }
              sx={{ height: '50px' }}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Button variant="outlined" style={{ height: '50px' }} fullWidth>
              Generate
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Images />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ImageGenerator;
