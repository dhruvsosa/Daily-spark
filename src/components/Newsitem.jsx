import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date,source } = this.props
        return (
            <div className="my-3 container">
                <div className="card" >
                    <img className='news-img' src={imageUrl ? imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPjs0rKvYAeL85hJXV96n27E_Yc7IGIgM5Yg&s"} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...  <span className="position-absolute  top-0 start-50 translate-middle badge rounded-pill bg-danger">
                           {source}
                           
                        </span></h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} className="btn btn-primary" rel="noreferrer" target='_blank'>Read More..</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default Newsitem