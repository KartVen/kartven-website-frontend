import "./LinkListAdmin.css";
import UoTAddOrEditLink from "./UoTAddOrEditLink";
import {useState} from "react";
import {FiPlusSquare} from "react-icons/fi";
import PropTypes from "prop-types";

const LinkListAdmin = ({categoryId, links}) =>{

    const [isAddClicked, setIsAddClicked] = useState(false);
    const [isEditId, setIsEditId] = useState(null);

    const handleToggleAdd = () => {
        setIsAddClicked(state => !state);
        setIsEditId(null);
    };

    const handleToggleEdit = id => {
        setIsAddClicked(true);
        setIsEditId(id);
    };

    return (
        <>
            <div className="data-table">
                <div className="thead">
                    <span className="td">Id</span>
                    <span className="td">Name</span>
                    <span className="td">Href</span>
                    <span className="td"></span>
                </div>
                {
                    links.map(({id, name, href}) => (
                        <div className="tr tr-link" key={id}>
                            <span className="td">{id}</span>
                            <span className="td">{id === isEditId ? "Editing ..." : name}</span>
                            <span className="td">{id === isEditId ? "..." : href}</span>
                            <span className="td action-tool">
                                    <button className="edit-btn"
                                            onClick={() => handleToggleEdit(id)}>Edit</button>
                                    <button className="remove-btn">X</button>
                                </span>
                        </div>
                    ))
                }

            </div>
            <div className="data-table">
                {
                    isAddClicked ? (
                        <UoTAddOrEditLink className="tr" categoryId={categoryId} linkId={isEditId}/>
                    ) : (
                        <div className="tr tr-link">
                                <span className="td"
                                      onClick={handleToggleAdd}
                                      style={{padding: "12px var(--padding-cell)"}}>
                                    <FiPlusSquare size={28}
                                                  className="icon-add"/>
                                </span>
                        </div>
                    )
                }
            </div>
        </>
    );
}

LinkListAdmin.propTypes = {
    categoryId: PropTypes.number,
    links: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        href: PropTypes.string,
    })),
}

LinkListAdmin.default = {
    categoryId: 0,
    links: [],
}

export default LinkListAdmin;