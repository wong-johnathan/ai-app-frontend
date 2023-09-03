import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import {
  Container,
  Grid,
  InputAdornment,
  OutlinedInput,
  styled
} from '@mui/material';
import Images from './Images';
import { Backpack, Search } from '@mui/icons-material';
import PageHeader from 'src/components/PageHeader';
const OutlinedInputWrapper = styled(OutlinedInput)(
  ({ theme }) => `
    background-color: ${theme.colors.alpha.white[100]};
`
);

const ImageVault = () => {
  return (
    <>
      <Helmet>
        <title>Image Vault</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader
          title="Generated Images"
          subtitle="Saved AI generated images from Dall-E"
          icon={<Backpack sx={{ fontSize: '50px' }} />}
        />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={2}
        >
          <Grid item xs={12}>
            <OutlinedInputWrapper
              type="text"
              placeholder="Search images"
              fullWidth
              startAdornment={
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              }
              sx={{ height: '50px' }}
            />
          </Grid>
          <Grid item xs={12}>
            <Images />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ImageVault;
