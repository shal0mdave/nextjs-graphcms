
const StoryShare = (props) => {

    return (
        <section className="social">
            <div className="link-container">
                <a href={`https://twitter.com/share?url=${props.url}&text=${props.title}`} title="Twitter" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href={`https://www.facebook.com/sharer.php?u=${props.url}`} title="Facebook" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-square"></i>
                </a>
                <a href={`https://reddit.com/submit?url=${props.url}&title=${props.title}`} title="Reddit" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-reddit"></i>
                </a>
                <a href={`https://www.linkedin.com/shareArticle?url=${props.url}&title=${props.title}&summary=${props.excerpt}&source=${props.title}`} title="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </section>
    )
}

export default StoryShare