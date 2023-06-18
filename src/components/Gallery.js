import React, { useState } from "react";

function Gallery() {
    const [inputData, setInputData] = useState(
        {
            title: "",
            image: ""
        }
    )

    const [imagesData, setImagesData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputData.title.trim() && inputData.image.trim())
            setImagesData([...imagesData, inputData])
        setInputData({ title: '', image: '' })
    }

    const handleInput = (event) => {
        const { name, value } = event.target;
        setInputData((prevData) => ({ ...prevData, [name]: value }))
    }

    const handleDelete = (index) => {
        setImagesData(imagesData.filter((item, itemIndex) => itemIndex !== index))
    }

    return (
        <div className="container">
            <h1 className="text-center mt-5">Image Gallery</h1>
            <div className="row col-12 col-md-8 col-lg-6 mx-auto">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label" for="title">Title</label>
                        <input type="text"
                            placeholder="Enter the title of the image"
                            className="form-control" id="title"
                            name="title"
                            value={inputData.title}
                            onChange={(event) => handleInput(event)}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="link" className="form-label">Image link</label>
                        <input type="text"
                            className="form-control"
                            placeholder="Enter the link of the Image"
                            id="link"
                            name="image"
                            value={inputData.image}
                            onChange={(event) => handleInput(event)}
                        />
                    </div>
                    <button className="btn btn-primary w-100">Add Image to Gallery</button>
                </form>
            </div>
            <div class="row justify-content-center align-items-center g-2 mt-3">
                {
                    imagesData.length > 0 ?
                        imagesData.map((image, index) =>
                            <div class="col-12 col-md-6 col-lg-4" key={index}>
                                <div className="card shadow">
                                    <img src={image.image} height="250px" alt="" class="card-img-top " />
                                    <div className="card-body d-flex justify-content-between">
                                        <h3 className="card-title">{image.title}</h3>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleDelete(index)}
                                        >Delete</button>
                                    </div>
                                </div>
                            </div>
                        ):<h4 className="text-center">No images</h4>
                }
            </div>
        </div>
    )
}

export default Gallery;