import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeader from './PageHeader';
import {
  Button,
  Container,
  Grid,
  InputAdornment,
  OutlinedInput,
  styled
} from '@mui/material';
import { Search } from '@mui/icons-material';
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
        <title>Image Generato</title>r
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
          xs={12}
        >
          <Grid xs={12} md={10} paddingX={1}>
            <OutlinedInputWrapper
              type="text"
              placeholder="Input ai image prompt here"
              fullWidth
              startAdornment={
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              }
              sx={{ mb: 2, height: '50px' }}
            />
          </Grid>
          <Grid xs={12} md={2} paddingX={1}>
            <Button variant="outlined" style={{ height: '50px' }} fullWidth>
              Search
            </Button>
          </Grid>
          <Grid item xs={12} paddingX={1}>
            <Images />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ImageGenerator;
