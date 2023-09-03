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
import { Email, Password } from '@mui/icons-material';
import { useNavigate } from 'react-router';
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

function Signin() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Signin</title>
      </Helmet>
      <MainContent>
        <Container maxWidth="md">
          <Box textAlign="center">
            <Typography variant="h2" sx={{ my: 2 }}>
              Sign in
            </Typography>
          </Box>
          <Container maxWidth="xs">
            <FormControl variant="outlined" fullWidth>
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
              <Button
                variant="outlined"
                sx={{ mb: 2, height: '50px' }}
                onClick={() => navigate('/')}
              >
                Sign in
              </Button>
            </FormControl>
            <Divider sx={{ mb: 1 }} />
            <Stack direction={'row'} justifyContent="space-between">
              <Link to="/forgot-password">Forgot password?</Link>
              <Link to="/sign-up">{"Don't have an account? Sign Up"}</Link>
            </Stack>
          </Container>
        </Container>
      </MainContent>
    </>
  );
}

export default Signin;
