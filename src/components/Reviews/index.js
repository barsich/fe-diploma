import React from 'react';
import Slider from 'react-slick';
import reviews from '../../data/reviews.json';
import Wrapper from '../Wrapper';
import ReviewItem from './ReviewItem';

function Reviews() {
  return (
    <Wrapper>
      <div className="reviews">
        <h2 className="reviews__title homepage-title">отзывы</h2>
        <Slider dots={true} arrows={false} slidesToShow={2} slidesToScroll={2}>
          {reviews.map((item) => (
            <ReviewItem item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </Wrapper>
  );
}

export default Reviews;
