import {
  Box,
  Card,
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
import { Email, Password } from '@mui/icons-material';
import Link from '../Components/Link';

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

function Signup() {
  return (
    <>
      <Helmet>
        <title>Signup</title>
      </Helmet>
      <MainContent>
        <Container maxWidth="md">
          <Box textAlign="center">
            <Typography variant="h2" sx={{ my: 2 }}>
              Sign up
            </Typography>
          </Box>
          <Container maxWidth="xs">
            <FormControl variant="outlined" fullWidth>
              <Stack direction={'row'} justifyContent="space-between">
                <OutlinedInputWrapper
                  type="text"
                  placeholder="First Name"
                  sx={{ mb: 2, height: '50px' }}
                />
                <OutlinedInputWrapper
                  type="text"
                  placeholder="Last Name"
                  sx={{ mb: 2, height: '50px' }}
                />
              </Stack>
              <OutlinedInputWrapper
                type="text"
                placeholder="Email"
                startAdornment={
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                }
                sx={{ mb: 2, height: '50px' }}
              />
              <OutlinedInputWrapper
                type="password"
                placeholder="Password"
                startAdornment={
                  <InputAdornment position="start">
                    <Password />
                  </InputAdornment>
                }
                sx={{ mb: 2, height: '50px' }}
              />
              <OutlinedInputWrapper
                type="password"
                placeholder="Confirm password"
                startAdornment={
                  <InputAdornment position="start">
                    <Password />
                  </InputAdornment>
                }
                sx={{ mb: 2, height: '50px' }}
              />
              <Button variant="outlined" sx={{ mb: 2, height: '50px' }}>
                Sign up
              </Button>
            </FormControl>
            <Divider sx={{ mb: 1 }} />
            <Stack direction={'row'} justifyContent="flex-end">
              <Link href="/sign-in" variant="body2">
                {'Already have an account? Sign in'}
              </Link>
            </Stack>
          </Container>
        </Container>
      </MainContent>
    </>
  );
}

export default Signup;
