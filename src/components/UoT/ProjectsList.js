import './ProjectsList.css';
import {Link} from "react-router-dom";
import useApi from "../../hooks/useApi";
import {useState} from "react";
import {FiExternalLink, FiFolder} from "react-icons/fi";
import {node} from "prop-types";

const ProjectsList = () => {
    const iconSize = 20;

    const {data: categories, status} = useApi('/api/category');
    const [categoryId, setCategoryId] = useState(0);

    return (
        <div className="links-table">
            <div className="category-list">
                {
                    <ul>
                        {
                            status && categories.map(({id, name}) => (
                                <li key={id}>
                                    <button onClick={() => setCategoryId(id)}>{name}</button>
                                </li>
                            ))
                        }
                    </ul>
                }
            </div>
            <div className="links-list">
                {
                    <ul>
                        {
                            categories.length > 0 ? (
                                categories.map(({id, listOfLink}) => categoryId === id && listOfLink.map(({
                                                                                                              id,
                                                                                                              name,
                                                                                                              href
                                                                                                          }) => (
                                    <li key={id}>
                                        <Link to={href}>
                                            <p className="link-cnt"><FiFolder size={iconSize}
                                                                              className="folder-ico"/>{name}
                                            </p>
                                            <div className="link-tool">
                                                <FiExternalLink size={iconSize}/>
                                            </div>
                                        </Link>
                                    </li>
                                )))
                            ) : (
                                <Link to="admin" style={{
                                    margin: "auto",
                                    textDecoration: "none",
                                    color: "var(--aqua-color)"
                                }}>ADD LINK</Link>
                            )
                        }
                    </ul>
                }
            </div>
        </div>
    );

}

export default ProjectsList;