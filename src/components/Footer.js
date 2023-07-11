import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareTwitter, faSquareFacebook, faSquareInstagram, faSquareGithub, faAccusoft } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {

    return (
        <div className="footing">
            <FontAwesomeIcon icon={faSquareTwitter} style={{ color: '#918E9B' }} />
            <FontAwesomeIcon icon={faSquareFacebook} style={{ color: '#918E9B' }} />
            <FontAwesomeIcon icon={faSquareInstagram} style={{ color: '#918E9B' }} />
            <FontAwesomeIcon icon={faSquareGithub} style={{ color: 'pink' }} />
        </div>
    );
}