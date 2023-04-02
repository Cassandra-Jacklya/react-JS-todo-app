import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchForm= () => {

    const search = document.getElementById('search-input');

    //here
    search.addEventListener('focus', function () {
        search.select();
    });
    
    search.addEventListener('click', function () {
        search.select();
    });

    return (
        <div>
            <form id="search-form">
                <input id="search-input" className="input-field input-field-search" placeholder="Search" />
                <button id="search-button" className="button" hidden>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
        </div> 
    )
}


export default SearchForm;