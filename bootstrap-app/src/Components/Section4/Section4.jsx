import React from 'react'

export default function Section4() {
    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <h1 className='text-center mb-5'>Cities</h1>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">

                    {/* Card 1 */}
                    <div className="col">
                        <div className="card h-100 text-center shadow-sm">
                            <img src="https://www.rnwmultimedia.edu.in/new_panel/uploads/city_image-1689422869872-961501515.png" className="card-img-top" alt="Animation" />
                            <div className="card-body">
                                <h6 className="text-muted">Surat</h6>
                                <h5 className="fw-bold">9 Locations</h5>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col">
                        <div className="card h-100 text-center shadow-sm">
                            <img src="https://www.rnwmultimedia.edu.in/new_panel/uploads/city_image-1689571253161-647992325.png" className="card-img-top" alt="Flutter" />
                            <div className="card-body">
                                <h6 className="text-muted">Ahmedabad</h6>
                                <h5 className="fw-bold">5 locations</h5>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col">
                        <div className="card h-100 text-center shadow-sm">
                            <img src="https://www.rnwmultimedia.edu.in/new_panel/uploads/navsari.png" className="card-img-top" alt="C C++" />
                            <div className="card-body">
                                <h6 className="text-muted">Navsari</h6>
                                <h5 className="fw-bold">4 locations</h5>
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="col">
                        <div className="card h-100 text-center shadow-sm">
                            <img src="https://www.rnwmultimedia.edu.in/new_panel/uploads/city_image-1706614514308-195078638.jpg" className="card-img-top" alt="Java" />
                            <div className="card-body">
                                <h6 className="text-muted">Bharuch</h6>
                                <h5 className="fw-bold">7 locations</h5>
                            </div>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="col">
                        <div className="card h-100 text-center shadow-sm">
                            <img src="https://www.rnwmultimedia.edu.in/new_panel/uploads/city_image-1689422909981-84113364.png" className="card-img-top" alt="Node.js" />
                            <div className="card-body">
                                <h6 className="text-muted">Rajkot</h6>
                                <h5 className="fw-bold">5 locations</h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
