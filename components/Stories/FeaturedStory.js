import Image from 'next/image'
import Link from 'next/link'
import StoryDate from '../../utils/DateFormatter'

const FeaturedStory = (props) => {

    let data = props.data;

    return (
        <section className="featured-story">
            <div className="container">
                <Link href={`/stories/${data.slug}`}>
                    <a className="link">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="story-cover">
                                    {
                                        data.coverImage ?
                                            <Image src={`${data.coverImage.coverImagePost[0].coverImage.url}`} alt={data.title} layout="responsive" height="50%" width="100%" title={data.title} /> :
                                            <Image src="/img/placeholder-story-cover.jpeg" alt={data.title} layout="responsive" height="50%" width="100%" title={data.title} />
                                    }
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="story-details">
                                    <h4>{StoryDate(data.createdAt)}</h4>
                                    <h1>{data.title}</h1>
                                    <p>{data.excerpt}</p>
                                </div>
                                <div className="story-author">
                                    {
                                        data.author.picture ?
                                            <img src={data.author.picture.url} alt={data.author.name} /> :
                                            <img src="/img/placeholder-author.jpeg" alt={data.author.name} />
                                    }
                                    <div className="content">
                                        <p className="story-author-name">{data.author.name}</p>
                                        <p className="story-author-title">{data.author.title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
        </section>
    )
}

export default FeaturedStory