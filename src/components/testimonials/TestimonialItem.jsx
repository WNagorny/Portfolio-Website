import React from 'react';

const TestimonialItem = ({ avatar, clientName, clientReview }) => {
  return (
    <article className='testimonial'>
      <div className='client__avatar'>
        <img src={avatar} alt='Avatar One' />
      </div>
      <h5 className='client__name'>{clientName}</h5>
      <small className='client__review'>{clientReview}</small>
    </article>
  );
}

export default TestimonialItem;