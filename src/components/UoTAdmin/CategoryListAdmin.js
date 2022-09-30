import "./CategoryListAdmin.css"
import {useEffect, useState} from "react";
import CategoryService from "../../services/CategoryService";
import UoTAddOrEditCategory from "./UoTAddOrEditCategory";
import {FiPlusSquare} from "react-icons/fi";
import LinkListAdmin from "./LinkListAdmin";

const CategoryListAdmin = () => {

    const [categories, setCategories] = useState([]);
    const [isAddClicked, setIsAddClicked] = useState(false);
    const [isEditId, setIsEditId] = useState(null);
    const [isActiveCategory, setIsActiveCategory] = useState({
        active: false, id: 0, name: null, links: []
    });

    const handleToggleAdd = () => {
        setIsAddClicked(state => !state);
        setIsEditId(null);
    };

    const handleToggleEdit = id => {
        setIsAddClicked(true);
        setIsEditId(id);
    };

    useEffect(() => {
        CategoryService.getAllCategories()
            .then(res => setCategories(res.data))
            .catch(err => console.log(err))
    }, []);

    return (
        <>
            <div className="data-list-admin">
                <h2>Category List</h2>
                <div className="data-table">
                    <div className="thead">
                        <span className="td">Id</span>
                        <span className="td">Name</span>
                        <span className="td"></span>
                    </div>
                    {
                        categories.map(({id, name, listOfLink}) => (
                            <div className="tr tr-link"
                                 key={id}
                                 onClick={() => setIsActiveCategory({active: true, id, name, links: listOfLink})}>
                                <span className="td">{id}</span>
                                <span className="td">{id === isEditId ? "Editing ..." : name}</span>
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
                            <UoTAddOrEditCategory className="tr" id={isEditId}/>
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
            </div>
            <div className="data-list-admin">
                {
                    isActiveCategory.active ? (
                        <>
                            <h2>{isActiveCategory.name}'s Link List</h2>
                            <LinkListAdmin categoryId={isActiveCategory.id} links={isActiveCategory.links}/>
                        </>
                    ) : (
                        <h2>Category's Link List</h2>
                    )
                }

            </div>
        </>
    );
}

export default CategoryListAdmin;