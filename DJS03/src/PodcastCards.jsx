export default function PodcastCard (props) {
    return (
    <div className="card">
        <img className="poster" />
        <h3 className="title"></h3>
        <p className="season-count"></p>
        <div className="tags">{props.title}</div>
        <p className="updated-text"></p>
  </div>
    )
}