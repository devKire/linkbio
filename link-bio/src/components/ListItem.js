export default function ListItem(props) {
  return (
    <section>
        <a target="_blank" href={props.url}>
          <div>
            <img src={props.imageUrl} alt={props.alt}></img>
            <h2>{props.subtitle}</h2>
          </div>
        </a>
    </section>
  );
}
