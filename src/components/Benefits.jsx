import "./Benefits.css";

const Benefits = () => {
    return (
        <section id="benefits">
            <header className="benefits-head">
                <h2>The Perfect Travel</h2>
                <h3>
                    We cover everything from picking the perfect hotel <br /> to
                    flight and destination.
                </h3>
            </header>
            <div className="benefits-content">
                <video autoPlay muted loop id="tourism-video">
                    <source src="/videos/tourism3.mp4" type="video/mp4" />
                </video>
                <div className="cards">
                    <div className="card">
                        <div className="card-icon">
                            <img
                                src="/icons/route-solid.svg"
                                alt="route-icon"
                            />
                        </div>
                        <div className="card-content">
                            <h4>Travel</h4>
                            <p>Travel in over 250 countries with no effort.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-icon">
                            <img src="/icons/bed-solid.svg" alt="bed-icon" />
                        </div>
                        <div className="card-content">
                            <h4>Hotel</h4>
                            <p>Hotels located near popular areas.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-icon">
                            <img
                                src="/icons/plane-departure-solid.svg"
                                alt=""
                            />
                        </div>
                        <div className="card-content">
                            <h4>Fly</h4>
                            <p>Flight included in every purshased trip.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
