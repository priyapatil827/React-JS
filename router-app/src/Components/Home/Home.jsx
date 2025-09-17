    import React from 'react'
    import 'bootstrap/dist/css/bootstrap.min.css';
    import { Carousel, Card, Button } from 'react-bootstrap';


    export default function Home() {
        return (
            <div>
                {/* Hero Section with Carousel */}
                <section className="hero">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.ytimg.com/vi/fDQHzKZlauA/maxresdefault.jpg"
                                alt="Slide 1"
                                style={{ height: '500px', objectFit: 'cover' }}
                            />
                            <Carousel.Caption>
                                <h3>Quality Seeds</h3>
                                <p>High yield seeds for modern farming.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/eff50e3b8b224a78b71fc30aeebd4988?v=8a57ffff"
                                alt="Slide 2"
                                style={{ height: '500px', objectFit: 'cover' }}
                            />
                            <Carousel.Caption>
                                <h3>Fertilizers & Equipment</h3>
                                <p>Best products for healthy crops.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://avatars.mds.yandex.net/get-altay/4322051/2a00000191605e82f9c3a96aa347f8ad1be2/orig"
                                alt="Slide 3"
                                style={{ height: '500px', objectFit: 'cover' }}
                            />
                            <Carousel.Caption>
                                <h3>Modern Agriculture</h3>
                                <p>Innovative solutions for your farm.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </section>

                {/* Features Section */}
                <section className="py-5 bg-light">
                    <div className="container">
                        <h2 className="text-center mb-5">Why Choose AgriFarm?</h2>
                        <div className="row text-center">
                            <div className="col-md-4 mb-4">
                                <i className="bi bi-seedling display-1 text-success"></i>
                                <h5 className="mt-3">High Quality Seeds</h5>
                                <p>Certified seeds to maximize your crop yield.</p>
                            </div>
                            <div className="col-md-4 mb-4">
                                <i className="bi bi-gear display-1 text-success"></i>
                                <h5 className="mt-3">Modern Equipment</h5>
                                <p>Advanced farming tools for efficiency and precision.</p>
                            </div>
                            <div className="col-md-4 mb-4">
                                <i className="bi bi-droplet display-1 text-success"></i>
                                <h5 className="mt-3">Organic Fertilizers</h5>
                                <p>Boost soil fertility naturally for healthy crops.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Products / Album Section */}
                {/* Product 1 */}
                <section className='d-flex px-4'>
                <div className="col-md-3 mb-4">
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJs6G_LGdvHK3Lvi39F6H1rezfTCbqv9XQn9YTev3q22Q9CSUBHwnVdJ6GpJdUKcrGZVVJC6f4N9sO7FMi_jxLxTpfuAnPVNE7rCqako9p-T7fPGyLZr5YxoRCE9rTZavrRN53V9ZwZit59PhDaomVLIXpS5rpV778AFPZ_YmXX_10z-iD66dmrOI7ziBp/w1200-h630-p-k-no-nu/89a7f5e6-117b-4883-b9ab-fc76757c2cc5.png"
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <Card.Body className="text-center">
                            <Card.Title>Quality Seeds</Card.Title>
                            <Card.Text>Certified seeds for high yield and healthy crops.</Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                {/* Product 2 */}
                <div className="col-md-3 mb-4">
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://avatars.mds.yandex.net/get-mpic/7979862/img_id6710989919596115623.jpeg/orig"
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <Card.Body className="text-center">
                            <Card.Title>Organic Fertilizers</Card.Title>
                            <Card.Text>Natural fertilizers to boost soil fertilityyyyyyyyy.</Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                {/* Product 3 */}
                <div className="col-md-3 mb-4">
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Agricultural_machinery.jpg/960px-Agricultural_machinery.jpg"
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <Card.Body className="text-center">
                            <Card.Title>Farm Equipment</Card.Title>
                            <Card.Text>Modern tools for efficient and precise farming.</Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                {/* Product 4 */}
                <div className="col-md-3 mb-4">
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://t4.ftcdn.net/jpg/01/32/73/83/360_F_132738392_SliHWJQvJ2O03mtzQB1qmRUpCnfJOwxg.jpg"
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <Card.Body className="text-center">
                            <Card.Title>Irrigation Systems</Card.Title>
                            <Card.Text>Advanced irrigation solution for water efficiency.</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                </section>


                {/* Testimonials Section */}
                <section className="py-5 bg-light">
                    <div className="container">
                        <h2 className="text-center mb-5">Customer Testimonials</h2>
                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <Card className="p-3">
                                    <Card.Body>
                                        <Card.Text>
                                            "AgriFarm seeds gave my crops a huge boost. Highly recommend!"
                                        </Card.Text>
                                        <Card.Subtitle className="text-muted">– Rajesh K.</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-4 mb-4">
                                <Card className="p-3">
                                    <Card.Body>
                                        <Card.Text>
                                            "Excellent equipment and fast delivery. My farm efficiency increased."
                                        </Card.Text>
                                        <Card.Subtitle className="text-muted">– Meena S.</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-4 mb-4">
                                <Card className="p-3">
                                    <Card.Body>
                                        <Card.Text>
                                            "Organic fertilizers really improved soil quality. Great service!"
                                        </Card.Text>
                                        <Card.Subtitle className="text-muted">– Arjun P.</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-dark text-white text-center py-4">
                    <p>&copy; 2025 AgriFarm. All rights reserved.</p>
                    <div>
                        <a href="#" className="text-white me-3">Facebook</a>
                        <a href="#" className="text-white me-3">Instagram</a>
                        <a href="#" className="text-white">Twitter</a>
                    </div>
                </footer>
            </div>
        )
    }
