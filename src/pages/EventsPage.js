import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EventBannerImage from '../assets/images/event-banner.jpg'; // Import the image
// import '../assets/styles/EventsPage.css'; // Uncomment and create this file for styling

const EventsPage = () => {
  const upcomingEvents = [
    {
      id: 1,
      name: 'Monthly Community Gathering',
      date: 'October 27, 2023',
      time: '6:00 PM - 8:00 PM',
      location: 'Samaj Bhavan, Ahilyanagar',
      description: 'Join us for our monthly meeting to discuss community matters, upcoming plans, and social networking.',
    },
    {
      id: 2,
      name: 'Diwali Celebration',
      date: 'November 12, 2023',
      time: 'All Day',
      location: 'Community Grounds, Ahilyanagar',
      description: 'A grand celebration of Diwali with traditional food, cultural performances, and fireworks. All are welcome!',
    },
    {
      id: 3,
      name: 'Youth Leadership Workshop',
      date: 'December 2, 2023',
      time: '10:00 AM - 4:00 PM',
      location: 'Samaj Hall, Ahilyanagar',
      description: 'A workshop designed to empower young members of our community with leadership skills and career guidance.',
    },
  ];

  return (
    <div className="events-page">
      <Header />
      <main>
        <section className="events-hero" style={{ backgroundImage: `url(${EventBannerImage})` }}>
          <div className="events-hero-overlay">
            <h2>Community Events</h2>
            <p>Stay updated with our latest gatherings and celebrations.</p>
          </div>
        </section>

        <section className="upcoming-events">
          <h3>Upcoming Events</h3>
          {upcomingEvents.length > 0 ? (
            <div className="event-list">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="event-card">
                  <h4>{event.name}</h4>
                  <p><strong>Date:</strong> {event.date}</p>
                  <p><strong>Time:</strong> {event.time}</p>
                  <p><strong>Location:</strong> {event.location}</p>
                  <p>{event.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No upcoming events currently scheduled. Please check back soon!</p>
          )}
        </section>

        <section className="past-events">
          <h3>Past Events Highlights</h3>
          <p>Relive moments from our previous successful events (links to photo galleries or summaries could go here).</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;