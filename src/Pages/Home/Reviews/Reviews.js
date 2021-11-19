import React, { useEffect, useState } from 'react';
import Rating from 'react-rating'
import '../../Home/Reviews/Reviews.css';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])

    return (
        <div className="container">
            <h2 className=" py-5  text-4xl font-bold text-gray-700">User Review</h2>
            <div className=" mx-auto grid gap-8 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-5/6 pb-24">
                {
                    reviews.map(review => <div
                        key={review._id}
                        className="mx-auto bg-gray-50 shadow-xl rounded-box py-8 w-full"
                    >
                        <img className="rounded-full h-20 mx-auto" src={review.rating_person_img} alt="" />
                        <h2 className="my-3 font-bold"> {review.rating_person} </h2>
                        <Rating
                            initialRating={review.rating}
                            emptySymbol="far fa-star fa-2x icon-color"
                            fullSymbol="fas fa-star fa-2x icon-color"
                            readonly
                        ></Rating>
                        <h2 className="my-3 w-4/6 mx-auto">{review.comment} </h2>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;