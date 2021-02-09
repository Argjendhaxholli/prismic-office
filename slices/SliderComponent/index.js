import React from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Image from 'next/image';
import Link from 'next/link';

const section = {
  maxWidth: '400px',
  margin: '4em auto',
  textAlign: 'center',
  border: '1px solid #b2b2b2',
  boxShadow: '0px 0px 10px -1px #b2b2b2'
};

const h2 = {
  color: '#8592e0',
};

const p5 = {
  padding: '25px',
  textAlign: 'left',
};

const MySlice = ({ slice }) => (
  <section style={section}>
    {
      slice.primary.image ?
          <img
              src={slice.primary.image.url}
              alt="Picture of a triangle"
              width={400}
              height={200}
          />
          : <p>You should upload image first</p>
    }
    <div style={p5} className="card-content">
    {
      slice.primary.title ?
       <RichText render={slice.primary.title}/>
       : <h2 style={h2}>Template slice, update me!</h2>
    }
    {
      slice.primary.description ?
        <RichText render={slice.primary.description}/>
      : <h2 style={h2}>Template slice, update me!</h2>
    }
    {
      slice.primary.postLink ?
      <div className="card-action">
        <Link href={slice.primary.postLink.url}>
            <a>Blog Post</a>
        </Link>
      </div>
      : <p>Create link for this post</p>
    }
    </div>
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
