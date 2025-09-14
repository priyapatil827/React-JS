import React from 'react'
import "./Section3.css"

export default function Section3() {
    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <h1 className='text-center mb-5'>Trending Courses</h1>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">

                    {/* Card 1 */}
                    <div className="col">
                        <div className="card h-100 text-center shadow-sm">
                            <img src="https://i.pinimg.com/1200x/8f/5f/14/8f5f14eaebc083eb5ad9706f0ca35094.jpg" className="card-img-top" alt="Animation" />
                            <div className="card-body">
                                <h6 className="text-muted">Master in</h6>
                                <h5 className="fw-bold">Full-stack Developer</h5>
                                <button className="btn btn-primary mt-3">View More</button>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col">
                        <div className="card h-100 text-center shadow-sm">
                            <img src="https://i.pinimg.com/1200x/48/75/11/487511e754834bdf2e6771376d59707e.jpg" className="card-img-top" alt="Flutter" />
                            <div className="card-body">
                                <h6 className="text-muted">Master in</h6>
                                <h5 className="fw-bold">Flutter</h5>
                                <button className="btn btn-primary mt-3">View More</button>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col">
                        <div className="card h-100 text-center shadow-sm">
                            <img src="https://www.rnwmultimedia.edu.in/images/ai.jpg" className="card-img-top" alt="C C++" />
                            <div className="card-body">
                                <h6 className="text-muted">Advance in</h6>
                                <h5 className="fw-bold">Data Science & AL/ML</h5>
                                <button className="btn btn-primary mt-3">View More</button>
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="col">
                        <div className="card h-100 text-center shadow-sm">
                            <img src="https://www.rnwmultimedia.edu.in/images/webdesign.jpg" className="card-img-top" alt="Java" />
                            <div className="card-body">
                                <h6 className="text-muted">Advance in</h6>
                                <h5 className="fw-bold">Web Designing</h5>
                                <button className="btn btn-primary mt-3">View More</button>
                            </div>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="col">
                        <div className="card h-100 text-center shadow-sm">
                            <img src="https://www.rnwmultimedia.edu.in/images/nodejs.png" className="card-img-top" alt="Node.js" />
                            <div className="card-body">
                                <h6 className="text-muted">Advance in</h6>
                                <h5 className="fw-bold">Node.js</h5>
                                <button className="btn btn-primary mt-3">View More</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
