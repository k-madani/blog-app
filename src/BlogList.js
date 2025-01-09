const BlogList = ({blogs,title, handleDelete}) => { 

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {/* traversing the list to display in particular format */}
            {blogs.map(blog => (
                <div className='blog-preview' key={blog.id}>
                    <h2> {blog.title}</h2>
                    <p> Written By {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default BlogList;