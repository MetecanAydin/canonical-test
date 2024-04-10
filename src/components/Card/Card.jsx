import { useApiData, usePostDate } from "../../utils/hooks";

export const Card = (
    data
) => {
    const { date, title, thumbnail, link, author, category, tag } = useApiData(data.data);
    const getPostDate = usePostDate(date)

    return (
        <div className="col-4 u-equal-height" role="listitem">
            <div className="p-card p-card--highlighted">
                <div className="p-card__content u-align-text--left">
                    <div className="card_header">
                        <h4 className="p-muted-heading u-no-padding">{tag}</h4>
                        <hr className="is-muted" />
                        <a href={link}><img className="p-card__image is-muted" alt="img" src={`${thumbnail}`} /></a>
                        <div className="p-card__inner u-no-padding">
                            <a href={link}><h3 className="is-accent u-text--muted">{title.rendered}</h3></a>
                        </div>
                    </div>
                    <div className="card_footer">
                        <p className="p-heading--6 u-no-padding">By <a href={`${author}}`}>{author}</a> on {getPostDate}</p>
                        <hr className="u-no-margin--bottom is-muted" />
                        <div className="p-card__inner u-no-padding--left u-no-padding--bottom">
                            {category}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}