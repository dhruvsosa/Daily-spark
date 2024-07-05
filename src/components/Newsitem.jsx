import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title,description,imageUrl,newsUrl}= this.props
         return (
            <div className="my-3 container">
                <div className="card" >
                    <img src={imageUrl ? imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPjs0rKvYAeL85hJXV96n27E_Yc7IGIgM5Yg&s"} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} className="btn btn-primary" target='_blank'>Read More..</a>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Newsitem