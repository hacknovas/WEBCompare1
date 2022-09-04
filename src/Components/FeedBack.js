import React from 'react';
import "../cssElem/footer.css"

export default function FeedBack() {

    const submited = async (e) => {
        e.preventDefault();
        const post = document.querySelector(".post");
        const widget = document.querySelector(".star-widget");

        widget.style.display = "none";
        post.style.display = "block";

        const result = await fetch("/sendFeedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                rate: e.target["rate"].value,
                message: e.target["mes"].value,
                Name: e.target["Name"].value
            })
        });

        const results = await result.json();


    }
    return (
        <>
            <div className='fdb'>
                <div class="containerss cntr"style={{width:"100%"}}>
                    <div className="badge text-dark">
                        <h3>FeedBack</h3>
                        <hr />
                    </div>
                    <div class="post">
                        <div class="text">Thanks for rating us!</div>
                    </div>

                    <div class="star-widget">
                        <form onSubmit={submited}>
                            <div className="row" required>
                                <input type="radio" name="rate" id="rate-1" value="5" />
                                <label for="rate-1" class="fas fa-star"></label>
                                <input type="radio" name="rate" id="rate-2" value="4" />
                                <label for="rate-2" class="fas fa-star"></label>
                                <input type="radio" name="rate" id="rate-3" value="3" />
                                <label for="rate-3" class="fas fa-star"></label>
                                <input type="radio" name="rate" id="rate-4" value="2" />
                                <label for="rate-4" class="fas fa-star"></label>
                                <input type="radio" name="rate" id="rate-5" value="1" />
                                <label for="rate-5" class="fas fa-star"></label>
                            </div>

                            <div class="textarea1">
                                <textarea cols="20" name='Name' placeholder="Enter Your Name.." style={{height:"50px"}} required></textarea>
                            </div>
                            <div class="textarea1">
                                <textarea cols="30" name='mes' placeholder="Describe your experience.." required></textarea>
                            </div>

                            <div class="btn1 btn btn-outline-secondary">
                                <button type="submit" class="bttn text-dark">Post</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
