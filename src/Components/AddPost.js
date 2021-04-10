import { useState } from 'react';
import '.././css/AddPost.css';


const AddPost = () => {

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
var monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var newdate;

    newdate = day + " " + monthName[month - 1] + " " + year;

    const [postURL, setPostURL] = useState("");
    return (
        <form action="http://localhost:3001/add" className="flex" method="POST">
            <h3>Add post {postURL}</h3>
            <label htmlFor="">Title</label>
            <input type="text" name="title" onChange={(e) => setPostURL(e.target.value.replaceAll(' ', '-').toLowerCase())} />
            <label htmlFor="">Content (HTML Allowed)</label>
            <textarea name="content"></textarea>
            <label htmlFor="">Short Description</label>
            <textarea name="shortdesc"></textarea>
            <label htmlFor="">Author</label>
            <select name="author">
                <option >Choose author</option>
                <option value="Matt">Matt</option>
            </select>
            <input type="hidden" name="data" value={newdate} />
            <input type="hidden" name="posturl" value={postURL} />
            <input type="submit" value="Add Post" />
        </form>
    );
}
 
export default AddPost;