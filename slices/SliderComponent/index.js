import React from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Image from 'next/image';

const section = {
  maxWidth: '600px',
  margin: '4em auto',
  textAlign: 'center',
};

const h2 = {
  color: '#8592e0',
};

const MySlice = ({ slice }) => (
  <section style={section}>
    {
      slice.primary.image ?
          <Image
              src={slice.primary.image.url}
              alt="Picture of a triangle"
              width={slice.primary.image.dimensions.width}
              height={slice.primary.image.dimensions.height}
          />
          : <p>You should upload image first</p>
    }
    {
      slice.primary.title ?
      <RichText render={slice.primary.title}/>
      : <h2 style={h2}>Template slice, update me!</h2>
    }
    {
      slice.primary.description ?
      <RichText render={slice.primary.description}/>
      : <p>start by editing this slice from inside the SliceMachine builder!</p>
    }
  </section>
);

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MySlice;
