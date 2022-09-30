import "./UoTAddOrEditCategory.css";
import {useEffect, useState} from "react";
import CategoryService from "../../services/CategoryService";
import PropTypes from "prop-types";

const UoTAddOrEditCategory = ({className, id}) => {

    const [categoryName, setCategoryName] = useState('');

    const handleSubmitValue = () => {
        if (id) return "Update";
        return "Create";
    }

    const handleSaveCategory = e => {
        e.preventDefault();
        const categoryData = {name: categoryName};
        if (id) {
            CategoryService.updateCategory(id, categoryData)
                .then(res => window.location.reload())
                .catch(err => console.log(err));
        } else {
            CategoryService.createCategory(categoryData)
                .then(res => window.location.reload())
                .catch(err => console.log(err));
        }
    };

    useEffect(() => {
        if (id) {
            CategoryService.getCategoryById(id)
                .then(res => {
                    if (res.data.name)
                        setCategoryName(res.data.name);
                    console.log(res.data);
                })
                .catch(err => console.log(err));
        }
    }, [id]);


    return (
        <form className={className}>
            <span className="td"></span>
            <span className="td"
                  style={{padding: "12px var(--padding-cell)"}}>
                <input type="text"
                       placeholder="Enter category name"
                       name="categoryName"
                       value={categoryName}
                       onChange={e => setCategoryName(e.target.value)}
                />
            </span>
            <span className="td action-tool">
                <input className="create-btn"
                       type="submit"
                       value={handleSubmitValue()}
                       onClick={e => handleSaveCategory(e)}/>
                <input className="remove-btn"
                       type="submit"
                       value="X"
                       onClick={() => window.location.reload()}/>
            </span>
        </form>
    );
}

UoTAddOrEditCategory.propTypes = {
    className: PropTypes.string,
    id: PropTypes.number,
}

UoTAddOrEditCategory.default = {
    className: "",
    id: null,
}

export default UoTAddOrEditCategory;