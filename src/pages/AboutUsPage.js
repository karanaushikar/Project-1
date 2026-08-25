import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/styles/AboutUsPage.css";



console.log("Checkpoint 1");

const AboutUsPage = () => {
  return (
    <>
      <Header />
      
      <main className="about-us-container">
        {/* ================= TRUST INFO ================= */}
        <section className="about-card">
          <h2>🏛 ट्रस्टची माहिती</h2>
          <div className="trust-details">
            <div>
              <strong>ट्रस्टचे नाव</strong>
              <p>ब्रह्मसिद्धेश्वर सावरगाव ट्रस्ट</p>
            </div>
            <div>
              <strong>स्थापना</strong>
              <p>१ / २ / १९६८</p>
            </div>
            <div>
              <strong>नोंदणी क्रमांक</strong>
              <p>A-१५९१ / बीड</p>
            </div>
          </div>
        </section>

       

        {/* Information Section */}
        <section className="contact-grid"> <div className="contact-card"> <h2>📍 पत्ता</h2> <p>श्री ब्रह्मसिद्धेश्वर मंदिर, सावरगाव, <br />  आष्टी, बीड – ४१४२०३,<br /> महाराष्ट्र </p> </div> 
        {/*<div className="contact-card"> <h2>🕒 दर्शन वेळ</h2> <p> सकाळ <br /> ६:०० ते १२:०० </p> <p> संध्याकाळ <br /> ५:०० ते ९:०० </p> </div>*/} </section>

        
        {/* ================= TEMPLE INFO ================= */}
        <section className="about-card"> <h2>🛕 मंदिराची माहिती</h2> <p> मंदिर हे समाजाचे श्रद्धास्थान असून येथे दररोज पूजा, आरती आणि धार्मिक कार्यक्रम आयोजित केले जातात. </p> </section>


        {/* ================= MAP ================= */} 
        <section className="about-card">

  <h2>🗺 मंदिराचे स्थान</h2>

  <div className="map-container">

    <iframe
      title="Temple Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14432.758062499037!2d75.07752166938694!3d19.099325024532174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb5164e1c54d5b%3A0x8f1bc4c67035cc75!2z4KS24KWN4KSw4KWALuCkuOCkv-CkpuCkvuCknOClgCDgpIXgpKrgpY3gpKrgpL4g4KS44KSu4KS-4KSn4KWAIOCkruCkguCkpuCkv-CksA!5e1!3m2!1sen!2sin!4v1785868274564!5m2!1sen!2sin" 
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>

  </div>

  <a
    href= "https://maps.app.goo.gl/uRQKVDS8rKEDn1U76"
    target="_blank"
    rel="noopener noreferrer"
    className="map-btn"
  >
    📍 Google Maps मध्ये उघडा
  </a>

</section>
      </main>

      <Footer />
    </>
  );
};

export default AboutUsPage;