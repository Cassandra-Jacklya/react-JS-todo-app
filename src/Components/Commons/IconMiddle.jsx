import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconMiddle = () => {
    return (
        <div className="d-flex justify-end">
            <span id="show-all" className="border-all">
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </span>
            <span id="completed" className="border-all">
                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
            </span>
        </div>
    )
}

export default IconMiddle;