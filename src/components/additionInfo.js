export default function AdditionInfo({info}) {
    return (
        <div className="add-info">
          <header>{info.header}</header>
          <p>{info.content}</p>
        </div>
    );
}