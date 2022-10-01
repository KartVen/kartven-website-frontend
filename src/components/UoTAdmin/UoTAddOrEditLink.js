import "./UoTAddOrEditCategory.css";
import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import LinkService from "../../services/LinkService";

const UoTAddOrEditLink = ({className, categoryId, linkId}) => {

    const [name, setName] = useState("");
    const [href, setHref] = useState("");

    const handleSubmitValue = () => {
        if (linkId) return "Update";
        return "Create";
    }

    const handleSaveLink = e => {
        e.preventDefault();
        const linkData = {name, href, categoryid: categoryId};
        if (linkId) {
            console.log("Update:");
            LinkService.updateLink(linkId, linkData)
                .then(() => window.location.reload())
                .catch(err => console.log(err));
        } else {
            console.log("Create:");
            LinkService.createLink(linkData)
                .then(() => window.location.reload())
                .catch(err => console.log(err));
        }
        console.log(linkData);
    };

    useEffect(() => {
        if (linkId) {
            LinkService.getLinkById(linkId)
                .then(res => {
                    if (res.data.name)
                        setName(res.data.name);
                        setHref(res.data.href)
                    console.log(res.data);
                })
                .catch(err => console.log(err));
        }
    }, [linkId]);


    return (
        <form method="POST" className={className}>
            <span className="td"></span>
            <span className="td"
                  style={{padding: "12px var(--padding-cell)"}}>
                <input type="text"
                       placeholder="Enter link name"
                       name="linkName"
                       value={name}
                       onChange={e => setName(e.target.value)}
                />
            </span>
            <span className="td"
                  style={{padding: "12px var(--padding-cell)"}}>
                <input type="text"
                       placeholder="Enter link href"
                       name="linkHref"
                       value={href}
                       onChange={e => setHref(e.target.value)}
                />
            </span>
            <span className="td action-tool">
                <input className="create-btn"
                       type="submit"
                       value={handleSubmitValue()}
                       onClick={e => handleSaveLink(e)}/>
                <input className="remove-btn"
                       type="submit"
                       value="X"
                       onClick={() => window.location.reload()}/>
            </span>
        </form>
    );
}

UoTAddOrEditLink.propTypes = {
    className: PropTypes.string,
    categoryId: PropTypes.number.isRequired,
    linkId: PropTypes.number,
}

UoTAddOrEditLink.default = {
    className: "",
    id: 0,
}

export default UoTAddOrEditLink;