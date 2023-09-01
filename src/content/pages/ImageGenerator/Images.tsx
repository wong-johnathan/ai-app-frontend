import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  ImageList,
  ImageListItem
} from '@mui/material';

import Dummy from 'dummyjs'
const Images = () => {
  return (
    <Card>
      <CardHeader title="Generated Images" />
      <Divider />
      <CardContent>
        <ImageList cols={4} gap={8}>
          {[...new Array(20)].map((arr, index) => (
            <ImageListItem key={index}>
              <img
                style={{ cursor: 'pointer' }}
                src={`${Dummy.img('200x200')}`}
                width="100%"
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
