import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdditionInfo from "./additionInfo";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Info({person}) {
    return (
    <section className="info">
        <div className="personal">
          <h1 id="name"> {person.name} </h1>
          <h3 id="job">{person.job}</h3>
          <h4 id="web-url">{person.webUrl}</h4>
          <div className="contact">
            <button className="email">
                <FontAwesomeIcon icon={faEnvelope} />
                Email
                </button>
            <button className="linkedin">
                <FontAwesomeIcon icon={faLinkedin} />
                LinkedIn</button>
          </div>
        </div>

        {person.additionInfo.map((info, index) => {
            return <AdditionInfo info={info} />        
        })}
      </section>
    );
}