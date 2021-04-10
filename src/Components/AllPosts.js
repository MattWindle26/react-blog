import SinglePost from "./SinglePost";



const AllPosts = ({ allPosts }) => {
    return (
        <div className="single-post-wrapper">
            
            {allPosts.map((data) => {
                return (
                    <>
                        <SinglePost 
                            id={data._id}
                            title={data.title}
                            author={data.author}
                            date={data.data}
                            content={data.content}
                            shortdesc={data.shortdesc}
                            postURL={data.posturl}
                        />
                    </>
                )
            })}
        </div>
    );
}
 
export default AllPosts;