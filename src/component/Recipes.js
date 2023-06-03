import React from 'react'
//import './recipes.css'

const Recipes = ({ title, image, ingredients }) => {
    return (

        <div class="col-sm-4 py-2">
            <div class="card h-100 text-white bg-danger">
                <div class="card-body">
                    <img className="card-img-top mx-auto d-block" src={image} alt=''></img>
                    <h3 className='card-title'>{title}</h3>
                    <ol>{ingredients.map((ingredients) => (
                        <li>
                            {ingredients.text}
                        </li>
                    ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Recipes