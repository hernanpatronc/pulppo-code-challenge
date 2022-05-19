import type { NextPage } from "next";

const Search: NextPage = () => {
    // Debería pegarle al escribir (con un debounce de 300ms) a https://api.pulppo.com/listings/search?search={{string_to_search}}
    return (
        <div>
            <div>
                <input />
                <button>Filtros</button>
            </div>
            <div className="results"></div>
        </div>
    );
};

export default Search;
