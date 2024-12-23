import { useState } from "react";
import styles from './Gallery.module.css';
import getImageData from "./Images";

const Gallery = () => {
    const data = getImageData();

    const [select, setSelect] = useState(null);

    const selectImage = (img) => {
        setSelect(img);
    };

    return (
        <>
            <h1>Click on an Image</h1>
            <ul className={styles.container}>
                {
                    data.map((img, idx) => {
                        return (
                            <li onClick={() => selectImage(img)} key={idx}>
                                <img src={img.url} alt={img.description} />
                            </li>
                        );
                    })
                }
            </ul>

            {/* Display selected image only if one is selected */}

            {/* This is a conditional rendering in React using the logical AND (&&) operator.
            select is a piece of state that stores the currently selected image object. Initially, select is set to null (when no image is selected).
            React will evaluate the expression before the &&. If select has a truthy value (i.e., an image object), it will render the JSX inside the parentheses ((...)). If select is null or undefined, React will ignore the JSX and render nothing. */}
            {select && (
                <div className={styles.selectedImage}>
                    <img src={select.url} alt={select.description} />
                    <p>{select.description}</p>
                </div>
            )}
        </>
    );
}
export default Gallery;
