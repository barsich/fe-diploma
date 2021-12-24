import React from 'react';

function ReviewItem(item) {
  const { avatar, name, text } = item.item;
  return (
    <div className="review-card">
      <img
        className="review-card__avatar"
        src={require(`../../../images/reviews/${avatar}`).default}
        alt={name}
      />
      <div className="review-card__body">
        <p className="review-card__body__name">{name}</p>
        <p className="review-card__body__text">{text}</p>
      </div>
    </div>
  );
}

export default ReviewItem;
