import {
  Box,
  Typography,
  Container,
  Divider,
  Button,
  FormControl,
  OutlinedInput,
  InputAdornment,
  styled,
  Stack
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { Email } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const MainContent = styled(Box)(
  () => `
    height: 100%;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
);

const OutlinedInputWrapper = styled(OutlinedInput)(
  ({ theme }) => `
    background-color: ${theme.colors.alpha.white[100]};
`
);

function ForgotPassword() {
  return (
    <>
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      <MainContent>
        <Container maxWidth="md">
          <Box textAlign="center">
            <Typography variant="h2" sx={{ my: 2 }}>
              Forgot Password
            </Typography>
          </Box>
          <Container maxWidth="xs">
            <FormControl variant="outlined" fullWidth>
              <OutlinedInputWrapper
                type="email"
                placeholder="Email"
                startAdornment={
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                }
                sx={{ mb: 2, height: '50px' }}
              />
              <OutlinedInputWrapper
                type="email"
                placeholder="Confirm Email"
                startAdornment={
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                }
                sx={{ mb: 2, height: '50px' }}
              />
              <Button variant="outlined" sx={{ mb: 2, height: '50px' }}>
                Submit
              </Button>
            </FormControl>
            <Divider sx={{ mb: 1 }} />
            <Stack direction={'row'} justifyContent="flex-end">
              <Link to="/sign-in">Remember your password? Sign In</Link>
            </Stack>
          </Container>
        </Container>
      </MainContent>
    </>
  );
}

export default ForgotPassword;
