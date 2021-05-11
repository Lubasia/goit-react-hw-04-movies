import React, { Component } from 'react';
import style from '../Header/Header.module.css';
import dotaApi from '../../api/dota.api';

export default class Cast extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    dotaApi
      .GetMovieReviews(this.props.id)
      .then(data => this.setState({ reviews: data }))
      .catch(error => console.log(error));
  }

  render() {
    const { reviews } = this.state;
    const isShowReviews = reviews.length > 0;

    return (
      <>
        {isShowReviews ? (
          <ul className={style.HeaderList}>
            {reviews.map(review => (
              <li className={style.HeaderListItem} key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h3>We don't have any reviews for this movie</h3>
        )}
      </>
    );
  }
}
