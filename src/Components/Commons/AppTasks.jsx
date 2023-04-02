import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faCalendarWeek, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const AppTasks = () => {
    return (
        <div className="app-tasks">
            <div className="tasks-title">TASKS</div>
            <ul className="task-list">
                <li>
                    <span><FontAwesomeIcon icon={faExclamationCircle} ></FontAwesomeIcon></span>
                    Upcoming
                </li>
                <li>
                    <span><FontAwesomeIcon icon={faClock}/></span>
                    Today
                </li>
                <li>
                    <span><FontAwesomeIcon icon={faCalendarWeek} /></span>
                    This Week
                </li>
            </ul>
        </div>
    )
}

export default AppTasks;