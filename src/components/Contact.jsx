import "./Contact.css";

const Contact = () => {
    return (
        <section id="contact">
            <div className="form-wrapper">
                <header className="form-head">
                    <h2>Contact Us</h2>
                </header>
                <form>
                    <div className="name-form">
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" name="name" required />
                    </div>
                    <div className="email-form">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="text" name="email" required />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
