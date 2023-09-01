import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  ImageList,
  ImageListItem,
  useMediaQuery,
  useTheme
} from '@mui/material';

import Dummy from 'dummyjs';
const Images = () => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.up('md'));
  console.log(matchDownMd)
  return (
    <Card>
      <CardHeader title="Generated Images" />
      <Divider />
      <CardContent>
        <ImageList cols={matchDownMd ? 4 : 2} gap={8}>
          {[...new Array(20)].map((arr, index) => (
            <ImageListItem key={index}>
              <img
                style={{ cursor: 'pointer' }}
                src={`${Dummy.img('200x200')}`}
                alt={Dummy.text(10)}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </CardContent>
    </Card>
  );
};
export default Images;
