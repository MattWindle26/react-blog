import '.././css/SinglePost.css';

const SinglePost = () => {
    return (
        <div className="single-post">
            <h2>Title</h2>
            <p><small>Author: <b>Matt</b></small> <small>Posted: <b>6th April 2021</b></small></p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, quidem magni nihil qui corrupti obcaecati expedita eius quos odit explicabo.</p>
            <a href="#" className="btn">Read more</a>
        </div>
    );
}
 
export default SinglePost;