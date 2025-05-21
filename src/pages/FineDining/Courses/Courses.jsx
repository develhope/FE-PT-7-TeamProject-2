import './Courses.css'

function Courses({imgSrc, title, description, price, onClick}) {
    return(
        <div className='course-card' onClick={onClick}>
            <img src={imgSrc} alt={title} className='dish-image'/>
            <div className='dish-details'>
                <h3 className='dish-name'>{title}</h3>
                <p className='dish-description'>{description}</p>
            </div>
            <div className='dish-price'>${price}</div>
        </div>
    )
}

export default Courses