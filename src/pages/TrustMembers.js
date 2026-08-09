import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import PlaceholderImage from "../assets/images/placeholder.png";
import SantoshAushikar from "../assets/images/SantoshAushikar.jpg";
import AppasahebBarse from "../assets/images/AppasahebBarse.jpg";
import BhausahebHucche from "../assets/images/BhausahebHucche.jpg";
import ParojiGondhale from "../assets/images/Paroji Gondhale.jpg";
import SadashivChavandke from "../assets/images/SadashivChavandke1.jpg";
import SagarGondhale from "../assets/images/SagarGondhale.jpg";
import SanjayGenappa from "../assets/images/SanjayGenappa.jpg";
import SomnathShahpurkar from "../assets/images/SomnathShahapurkar.jpg";
import SatishHarba from "../assets/images/SatishHarba.png";
import BalasahebMisal from "../assets/images/BalasahebMisal.jpg"
import "../assets/styles/AboutUsPage.css";
const TrustMembers = () => {

    const currentMembers = [
  {
    name: "श्री. सतीश आप्पासाहेब हरबा",
    role: "अध्यक्ष",
    image: SatishHarba,
  },
  {
    name: "श्री. संतोष कचरू औशीकर",
    role: "सचिव",
    image: SantoshAushikar,
  },
  {
    name: "श्री. उमेश लक्ष्मण दहिंडे",
    role: "खजिनदार",
    image: PlaceholderImage,
  },
];

const trustees = [
  {
    name: "श्री. भाऊ केरप्पा हुच्चे",
    image: BhausahebHucche,
  },
  {
    name: "श्री. आप्पासाहेब बारशे",
    image: AppasahebBarse,
  },
  {
    name: "श्री. बाळासाहेब सुंदराप्पा मिसाळ",
    image: BalasahebMisal,
  },
  {
    name: "श्री. संजय सटाप्पा गेनाप्पा",
    image: SanjayGenappa,
  },
  {
    name: "श्री. सोमनाथ धनाजी शहापुरकर",
    image: SomnathShahpurkar,
  },
  {
    name: "श्री. हरिभाऊ महादू हिरणवाळे",
    image: PlaceholderImage,
  },
  {
    name: "श्री. सचिन पाराजी दिवटे",
    image: PlaceholderImage,
  },
  {
    name: "श्री. सागर भागुजी गोंधळे",
    image: SagarGondhale,
  },
];

const pastMembers = [
  {
    name: "कै. आप्पासाहेब भाऊसाहेब हरबा",
    image: PlaceholderImage,
  },

  {
    name: "कै. सदाशिव महादेव चवंडके",
    image: SadashivChavandke,
  },

  {
    name: "कै. श्रीराम नागोजी दहिंडे",
    image: PlaceholderImage,
  },

  {
    name: "कै. लक्ष्मणराव राणोजी बेद्रे",
    image: PlaceholderImage,
  },

  {
    name: "कै. केरप्पा होनाजी औशीकर",
    image: PlaceholderImage,
  },

  {
    name: "कै. लक्ष्मण सदाशिव खताडे",
    image: PlaceholderImage,
  },

  {
    name: "कै. दत्तू गेणूजी गोडळकर",
    image: PlaceholderImage,
  },

   {
    name: "कै. पारोजी घुमाजी गोंधळे",
    image: ParojiGondhale,
  },

];

  return (
    <div>
    <Header/>
    <br/>
    
    <div>
       {/* ================= CURRENT MEMBERS ================= */}
        <section>
          <h2 className="section-title">👨‍💼 वर्तमान कार्यकारिणी</h2>
          <div className="member-grid">
            {currentMembers.map((member, index) => (
              <div className="member-card" key={index}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="member-image"
                />
                <h3>{member.name}</h3>
                <span>{member.role}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ================= TRUSTEES ================= */}
        <section>
          <h2 className="section-title">🤝 विश्वस्त मंडळ</h2>
          <div className="member-grid">
            {trustees.map((member, index) => (
              <div className="member-card" key={index}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="member-image"
                />
                <h3>{member.name}</h3>
                <span>विश्वस्त</span>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PAST OFFICE BEARERS ================= */}
        <section>
          <h2 className="section-title"> माजी पदाधिकारी</h2>
          <div className="member-grid">
            {pastMembers.map((member, index) => (
              <div className="member-card" key={index}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="member-image"
                />
                <h3>{member.name}</h3>
                <span>{member.role}</span>
                <p className="member-period">{member.period}</p>
              </div>
            ))}
          </div>
        </section>
    </div>
    <Footer/>
    </div>
  )
}

export default TrustMembers
