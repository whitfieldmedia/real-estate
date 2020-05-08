import React, { useState } from 'react';

export default function Reviews() {
    const [ count, setCount ] = useState(0)
    function handlePrev() {
        if(count > 0) {
            setCount(count - 1)
        } else {
            setCount(4)
        }
    }

    function handleNext() {
        if(count < 4) {
            setCount(count + 1)
        } else {
            setCount(0)
        }
    }
    return (
        <div className="home-review-container">
        <div className="arrow" onClick={handlePrev}>
            <i className="fas fa-chevron-left"></i>
        </div>
        <div className={count === 0 ? "home-review-box" : "none"}>
            <div className="home-review-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
            <p className="home-review">
                "I just wanted to say Thank You again for all you did to help us in buying a home. I would definitely recommend you to anyone looking to buy a home. Your honesty and integrity were very much appreciated."
            </p>
        </div>
        <div className={count === 1 ? "home-review-box" : "none"}>
            <div className="home-review-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
            <p className="home-review">
                "I would definitely use Chris again! He works hard to make your experience as easy as possible. It was easy to get in touch with him when I had questions. He was always eager to help in any way he could. Thank you Chris, for selling our house."
            </p>
        </div>
        <div className={count === 2 ? "home-review-box" : "none"}>
            <div className="home-review-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
            <p className="home-review">
                "I just got off the phone with Chris and he was very informational  in the decision of buying my mother a new home he also was very helpful with mapping and distance information. Thank you so much  i’m very excited to start my new search for my mom and New home"
            </p>
        </div>
        <div className={count === 3 ? "home-review-box" : "none"}>
            <div className="home-review-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
            <p className="home-review">
                "I was looking for a house in Grenada, MS. On Zillow. They gave Chris Reed’s profile which showed all his strengths in re estate. I had already terminated (2) other Buyer agents for not communicating and waiting on me to do all the work. Chris went above and beyond finding me a home. He took care of  all the little details as well as the large ones. Even after the sale he was help me get around in a new town telling me where to shop for different needs. I am very thankful for having Chris as my agent and now a friend."
            </p>
        </div>
        <div className={count === 4 ? "home-review-box" : "none"}>
            <div className="home-review-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
            <p className="home-review">
                "Chris was relentless in his attempt to help us find a house. If he saw or heard of anything coming on the market he would let me know immediately. He was honest with us even when it meant he wouldn't make as much money off the sale. I could contact him any time day or night and he always seemed to  be willing to work around our schedule when viewing a home. I would definitely recommend giving him a try if you are looking for a realtor."
            </p>
        </div>
        <div className={count === 5 ? "home-review-box" : "none"}>
            <div className="home-review-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
            <p className="home-review">
                "Great to work with!! <br/>
                Very responsive, over and above to take care of clients! He was a pleasure to work with and really helped make this process easy. <br/>
                Thanks for all you did!!!"
            </p>
        </div>
        <div className="arrow" onClick={handleNext}>
            <i className="fas fa-chevron-right"></i>
        </div>
    </div>
    )
}