import MainButton from "./MainButton";

export default function Main() {
  return (
    <main className="about">
      <div className="about-left">
        <h2 className="about-title">
          What is <br />
          Lorem Ipsum?
        </h2>
        <MainButton />
      </div>
      <div className="about-right">
        <p className="about-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p className="about-text">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
        <p className="about-text">
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </div>
    </main>
  );
}
