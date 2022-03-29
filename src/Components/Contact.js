import React from 'react'

const Contact = () => {
    return (
        <div>
            <section id="contact-title">
        <h1>Contact Us</h1>
    </section>

    <main className="form-box">
        <form>
            <input type="text" class="form-input" name="firstname" placeholder="Full Name" required/>
            <br>
            </br>
            <input type="email" class="form-input" name="email" placeholder="Email" required/>
            <br>
            </br>
            <textarea class="form-input" name="comments" placeholder="Plants you would like to see from us or comments" rows="4"></textarea>
            <br></br>
            <input type="submit" class="submit-button"/>
        </form>

        <div id ="other-info">
            <h2>Contact</h2>
            <p>help@earthshaven.com</p>

            <h2>Based In</h2>
            <p>Charlotte,NC</p>
        </div>
    </main>
        </div>
    )
}

export default Contact
