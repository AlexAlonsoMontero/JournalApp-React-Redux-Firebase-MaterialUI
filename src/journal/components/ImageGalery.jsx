import { ImageList, ImageListItem } from '@mui/material';
import * as React from 'react';


export const ImageGalery= ({ images })=> {
  return (
    <ImageList sx={{ width: '100%', height: '100%' }} cols={5} rowHeight={'auto'}>
      { images &&  images.map((image) => (
        <ImageListItem key={image} sx = {{ objectFit: 'inherit', padding: '1px'}}>
          <img
            src={`${image}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt='imagen de la nota'
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
