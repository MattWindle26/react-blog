import '.././css/SinglePost.css';

const SinglePost = ({ title, date, content, shortdesc, author, id, postURL }) => {
    return (
        <div className="single-post" key={id} >
            <h2>{title}</h2>
            <p><small>Author: <b>{author}</b></small> <small>Posted: <b>{date}</b></small></p>
            <p>{shortdesc}</p>
            <a href="#" className="btn">Read more</a>
        </div>
    );
}
 
export default SinglePost;