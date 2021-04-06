import '.././css/SinglePost.css';

const SinglePost = () => {
    return (
        <div className="single-post">
            <img src="https://images.unsplash.com/photo-1476673160081-cf065607f449?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" alt=""/>
            <h2>Title</h2>
            <p><small>Author: <b>Matt</b></small> <small>Posted: <b>6th April 2021</b></small></p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, quidem magni nihil qui corrupti obcaecati expedita eius quos odit explicabo.</p>
            <a href="#" className="btn">Read more</a>
        </div>
    );
}
 
export default SinglePost;