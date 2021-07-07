import Image from 'next/image'
import Link from 'next/link'
import StoryDate from '../../utils/DateFormatter'

const StoriesGrid = (props) => {

    return (
        <section className="stories-grid">
            <div className="container">
                <div className="row gx-5">
                    {
                        props.data.map(({ id, slug, createdAt, title, excerpt, author, coverImage }) => (
                            <div className="col-md-4" key={id}>
                                <div className="story-item">
                                    <Link href={`/stories/${slug}`}>
                                        <a className="link">
                                            <div className="story-cover">
                                                {
                                                    coverImage ?
                                                        <Image src={`${coverImage.coverImagePost[0].coverImage.url}`} alt={title} layout="responsive" height="100%" width="100%" title={title} /> :
                                                        <Image src="/img/placeholder-story-cover.jpeg" alt={title} layout="responsive" height="100%" width="100%" title={title} />
                                                }
                                            </div>
                                            <div className="story-details">
                                                <h4>{StoryDate(createdAt)}</h4>
                                                <h1>{title}</h1>
                                                <p>{excerpt}</p>
                                            </div>
                                            <div className="story-author">
                                                {
                                                    author.picture ?
                                                        <img src={author.picture.url} alt={author.name} /> :
                                                        <img src="/img/placeholder-author.jpeg" alt={author.name} />
                                                }
                                                <div className="content">
                                                    <p className="story-author-name">{author.name}</p>
                                                    <p className="story-author-title">{author.title}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default StoriesGrid