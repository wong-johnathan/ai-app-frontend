import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Modal,
  OutlinedInput,
  Stack,
  useMediaQuery,
  useTheme,
  Button,
  TextField
} from '@mui/material';

import Dummy from 'dummyjs';
import { useState } from 'react';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  bgcolor: 'background.paper',
  border: 'solid white 2px',
  boxShadow: 24,
  borderRadius: '15px'
};
const Images = () => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.up('md'));
  const [image, setImage] = useState<{ src: string; text: string } | null>(
    null
  );
  return (
    <>
      <Card>
        <CardHeader title="Generate Image" />
        <Divider />
        <CardContent>
          <Box>
            <Stack alignItems="center" rowGap={2}>
              <img
                onClick={() =>
                  setImage({ src: Dummy.img('200x200'), text: Dummy.text(10) })
                }
                style={{ cursor: 'pointer' }}
                src={`${Dummy.img('200x200')}`}
                alt={Dummy.text(10)}
                loading="lazy"
                width={'30%'}
              />
            </Stack>
          </Box>
        </CardContent>
      </Card>
      <Modal open={image ? true : false} onClose={() => setImage(null)}>
        <Box sx={{ ...style, width: matchDownMd ? style.width : '80%' }}>
          {image && (
            <>
              <Stack rowGap={2} sx={{ alignItems: 'center', p: 2 }}>
                <h1 style={{ margin: 0, padding: 0, alignSelf: 'flex-start' }}>
                  Image
                </h1>
                <img
                  style={{
                    cursor: 'pointer',
                    maxHeight: '400px',
                    maxWidth: '400px'
                  }}
                  src={image.src}
                  alt={image.text}
                  loading="lazy"
                  width="80%"
                />
                <span>{image.text}</span>
                <OutlinedInput
                  type="text"
                  placeholder="Name"
                  fullWidth
                  sx={{ height: '50px' }}
                />
                <TextField
                  type="text"
                  placeholder="Short Description"
                  fullWidth
                  multiline
                  rows={2}
                />
                <Button
                  variant="outlined"
                  style={{ minHeight: '50px' }}
                  fullWidth
                >
                  Save
                </Button>
              </Stack>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};
export default Images;
