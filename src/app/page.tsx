"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Star, Sparkles, Waves, ChefHat, Clock } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Dining", id: "dining" },
            { name: "Experience", id: "experience" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Hotel Luxe"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Experience Luxury Redefined"
          description="Discover unparalleled elegance and comfort at Hotel Luxe, where every detail is crafted for your perfect stay"
          tag="5-Star Experience"
          tagIcon={Award}
          buttons={[
            { text: "Book Now", href: "https://booking.example.com" },
            { text: "Explore Rooms", href: "rooms" }
          ]}
          imageSrc="https://images.pexels.com/photos/1755288/pexels-photo-1755288.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury hotel exterior at sunset"
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardTwo
          title="Luxury Accommodations"
          description="Choose from our collection of elegantly appointed rooms and suites, each designed for ultimate comfort"
          tag="Premium Rooms"
          tagIcon={Star}
          products={[
            {
              id: "1",
              brand: "Hotel Luxe",
              name: "Deluxe Suite",
              price: "$450/night",
              rating: 5,
              reviewCount: "240",
              imageSrc: "https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant deluxe suite with king bed"
            },
            {
              id: "2",
              brand: "Hotel Luxe",
              name: "Presidential Suite",
              price: "$850/night",
              rating: 5,
              reviewCount: "180",
              imageSrc: "https://images.pexels.com/photos/14917460/pexels-photo-14917460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Spacious presidential suite living area"
            },
            {
              id: "3",
              brand: "Hotel Luxe",
              name: "Ocean View Room",
              price: "$320/night",
              rating: 5,
              reviewCount: "450",
              imageSrc: "https://images.pexels.com/photos/3225561/pexels-photo-3225561.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Hotel room with stunning ocean view"
            }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardTwo
          title="World-Class Amenities"
          description="Indulge in our comprehensive collection of luxury amenities designed to elevate your stay"
          tag="Premium Facilities"
          tagIcon={Sparkles}
          features={[
            {
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your body and mind with our full-service spa featuring therapeutic treatments and wellness programs",
              icon: Waves,
              button: { text: "Book Treatment", href: "spa" }
            },
            {
              title: "Fine Dining Experience",
              description: "Savor exquisite cuisine crafted by our world-renowned chefs in our award-winning restaurants",
              icon: ChefHat,
              button: { text: "View Menu", href: "dining" }
            },
            {
              title: "Infinity Pool & Deck",
              description: "Relax by our stunning infinity pool with panoramic views and premium poolside service",
              icon: Waves,
              button: { text: "Pool Hours", href: "pool" }
            },
            {
              title: "24/7 Concierge",
              description: "Our dedicated concierge team ensures every request is fulfilled with personalized attention",
              icon: Clock,
              button: { text: "Contact Concierge", href: "concierge" }
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Guest Experiences"
          description="Discover what our valued guests say about their unforgettable stays"
          tag="5-Star Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Business Executive",
              testimonial: "Hotel Luxe exceeded all expectations. The attention to detail, impeccable service, and stunning amenities made our anniversary celebration truly magical.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Mitchell"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Travel Blogger",
              testimonial: "After visiting hundreds of hotels worldwide, Hotel Luxe stands out as exceptional. The perfect blend of luxury, comfort, and authentic hospitality.",
              imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Wedding Planner",
              testimonial: "The team at Hotel Luxe went above and beyond to make our destination wedding perfect. Every detail was flawlessly executed with genuine care.",
              imageSrc: "https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Corporate Director",
              testimonial: "Business travel has never been more enjoyable. The combination of luxury accommodations and professional service makes Hotel Luxe my preferred choice.",
              imageSrc: "https://images.pexels.com/photos/7109087/pexels-photo-7109087.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Kim"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about your stay at Hotel Luxe"
          textPosition="left"
          faqs={[
            {
              id: "1",
              title: "What are your check-in and check-out times?",
              content: "Check-in begins at 3:00 PM and check-out is by 11:00 AM. Early check-in and late check-out may be available upon request and subject to availability."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide luxury airport transfer service. Please contact our concierge team at least 24 hours in advance to arrange pickup and drop-off."
            },
            {
              id: "3",
              title: "What dining options are available?",
              content: "Hotel Luxe features three award-winning restaurants, a rooftop bar, 24-hour room service, and a poolside café offering diverse culinary experiences."
            },
            {
              id: "4",
              title: "Is parking available at the hotel?",
              content: "We offer complimentary valet parking for all registered guests. Self-parking is also available in our secure underground garage."
            },
            {
              id: "5",
              title: "What amenities are included in my stay?",
              content: "All stays include complimentary WiFi, fitness center access, pool and spa facilities, 24-hour concierge service, and daily housekeeping."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Plan Your Perfect Stay"
          description="Get in touch with our team to create an unforgettable experience tailored just for you"
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false },
            { name: "dates", type: "text", placeholder: "Preferred Dates", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your ideal stay, special requests, or any questions you may have...",
            rows: 4,
            required: true
          }}
          imageSrc="https://images.pexels.com/photos/7821340/pexels-photo-7821340.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Hotel concierge desk in elegant lobby"
          buttonText="Send Inquiry"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Hotel",
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "dining" },
                { label: "Events", href: "events" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Concierge", href: "concierge" },
                { label: "Spa & Wellness", href: "spa" },
                { label: "Transportation", href: "transport" },
                { label: "Business Center", href: "business" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "Reservations", href: "reservations" },
                { label: "Special Offers", href: "offers" },
                { label: "Guest Services", href: "services" }
              ]
            }
          ]}
          copyrightText="© 2025 | Hotel Luxe"
        />
      </div>
    </ThemeProvider>
  );
}