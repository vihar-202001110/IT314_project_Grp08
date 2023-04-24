import React from 'react'


export default function UploadRecipe() {
    return (
        <section className="h-100 h-custom" style={{backgroundColor: '#8fc4b7'}}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-8 col-xl-6">
                    <div className="card rounded-3">
                    <div className="card-body p-4 p-md-5">
                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Upload Recipe</h3>

                        <form className="px-md-2">
                            
                            {/* this is for name input */}
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="name">Recipe Title*</label>
                                <input
                                    type="text"
                                    id="recipetitle"
                                    name="recipetitle"
                                    className="form-control"
                                />
                            </div>

                            {/* this is for description */}
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Description of Recipe*</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>


                            {/* this is for cuisine */}
                            <div className="form-outline mb-4">
                                <label for="cuisine" className="form-label">Enter Cuisine*</label>
                                    <input className="form-control" list="types" id="cuisine" placeholder="Type to search..."/>
                                    <datalist id="types">
                                        <option value="Indian" />
                                        <option value="French" />
                                        <option value="Italian" />
                                        <option value="Mexican" />
                                        <option value="Chinese" />
                                        <option value="Mediterranean" />
                                        <option value="Russian" />
                                    </datalist>
                            </div>
                            
                            {/* this is for veg/non-veg */}
                            <div className="form-outline mb-4">
                                <label for="cuisinetype" className="form-label">Cuisine type*</label>
                                    <input className="form-control" list="cuisineoptions" id="cuisinetype" placeholder="Type to search...veg/non-veg/vegan"/>
                                        <datalist id="cuisineoptions">
                                            <option value="Vegetarian" />
                                            <option value="Non Vegetarian" />
                                            <option value="Vegan" />
                                        </datalist>
                            </div>
                            {/* this is duration */}
                            <div className="form-outline mb-4">
                                <label for="recipeduration" className="form-label">Duration*</label>
                                    <input className="form-control" type="number" id="recipeduration" placeholder="in minutes.."/>
                            </div>

                            {/* this is for ingrediants */}


                            {/* this is for steps of recipe */}
                            <div className="mb-3">
                                <label for="recipetutorial" className="form-label">Step by step tutorial*</label>
                                <textarea className="form-control" id="recipetutorial" rows="3" placeholder='begin new step from new line...'></textarea>
                            </div>

                            

                            <button type="submit" className="btn btn-success btn-lg mb-1">Submit</button>

                        </form>

                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}