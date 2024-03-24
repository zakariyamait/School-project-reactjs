import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "81345101-fca1-4a22-8b32-040b5c63d446");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
       <div className='contact-col'>
            <h3>Send us a message <img src={msg_icon} alt='' /></h3>
            <p>We're here to help and answer any questions you might have.
                We look forward to hearing from you! Whether you're curious about our services,
                need support, or want to share your feedback, feel free to reach out. 
                Contact us via email below.
                Our team is dedicated to ensuring your experience with us is nothing short of excellent. Let's connect!</p>
                <ul>
                    <li><img src={mail_icon} alt='' />SchoolPro@gmail.com </li>
                    <li><img src={phone_icon} alt='' />+1 123-445-9963 </li>
                    <li> <img src={location_icon} alt='' /> 142 Maple Street <br/>Springfield, IL 68855,United 
                    States</li>
                </ul>
       </div>
       <div className='contact-col'>
         <form onSubmit={onSubmit}>
             <label>Your name </label>
             <input type='text' name='name' placeholder='enter your name' required/>
             <label>phone number </label>
             <input type='tel' name='phone' placeholder='enter your mobile number' required/>
             <label>Write your message here </label>
             <textarea name='message'  rows="6" placeholder='enter your message' required/>
             <button type='submit' className='btn dark-btn'  >Submit now <img src={white_arrow} alt='' /></button>
          </form>
          <span>{result}</span>
       </div>
    </div>
  )
}

export default Contact
