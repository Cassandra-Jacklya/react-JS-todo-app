import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult";
import AppTasks from "./AppTasks";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const LeftBlock = ({ children }) => {
    return (
        <div className="left-block">
            <div className="left-title">
                <span>Todo</span>
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </div>
            <SearchForm>
            </SearchForm>
            <SearchResult>
            </SearchResult>
            <AppTasks>
            </AppTasks>
        </div>
    )
}

export default LeftBlock;