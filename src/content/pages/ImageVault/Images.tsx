import { Masonry } from '@mui/lab';
import { Card, CardContent, CardHeader, Divider } from '@mui/material';

import Dummy from 'dummyjs';
import Image from './Image';

const Images = () => {
  return (
    <>
      <Card>
        <CardHeader title="Generated Images" />
        <Divider />
        <CardContent>
          <Masonry columns={4} spacing={1}>
            {[...new Array(20)].map((arr, index) => (
              <Image
                src={Dummy.img('400,200x200,400')}
                text={Dummy.text(10)}
                key={index}
              />
            ))}
          </Masonry>
        </CardContent>
      </Card>
    </>
  );
};
export default Images;
