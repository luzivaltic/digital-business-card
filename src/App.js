import Footer from "./components/Footer";
import Info from "./components/info";
import "./style/style.css";
import image from "./Vector.png";

function App() {
  const person = {
    name: "Laura Smith",
    job: "Frontend Developer",
    webUrl: "laurasmith.website",
    additionInfo: [
      {
        header: "About",
        content: `
        I am a frontend developer with a particular interest in making
        things simple and automating daily tasks. I try to keep up with
        security and best practices, and am always looking for new things
        to learn.
        `,
      },
      {
        header: "interest",
        content: `
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        `,
      },
    ],
  };

  return (
    <div className="App">
      <div className="card-container">
        <div className="card">
          <section className="image">
            <img src={image} width={"100%"}></img>
          </section>
          <Info person={person}/>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
