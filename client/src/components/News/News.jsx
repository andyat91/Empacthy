

export default function News({ title, photo, link }) {
  return (
    <div className="new">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h5>{title} </h5>
        <img src={photo} />
      </a>
    </div>
  );
}
