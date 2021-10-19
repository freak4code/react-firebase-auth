import React from "react";
import "./About.css";

const About = () => {
  // Render Html
  return (
    <div className="about-container">
      <h3 className="text-3xl text-center font-black course-title text-success text-color">
        About
      </h3>
      <p className="text-color">
        For the last 60 years, Nowhere Health's experts have been working together
        to make the nation fitter, healthier, happier and stronger, all for the
        public benefit. As an organisation with no shareholders, we invest all
        our income back into our vision to build a healthier nation. We do this
        through outstanding day-to-day services in our family of 31
        award-winning hospitals, 113 fitness and wellbeing clubs, healthcare
        clinics, and over 200 workplace wellbeing services, and through our
        flagship programmes to support communities by widening access. What
        makes us unique is the breadth of our expertise to provide connected
        care spanning from personal training and health MOTs to supporting
        people on their fitness journeys, helping patients recover with
        physiotherapy or emotional wellbeing counselling, or providing hospital
        treatments for illness and serious conditions like arthritis or cancer.
      </p>
      <p className="text-color">
        Nowhere Health delivers unsurpassed standards, with a sector-leading 94% of
        our hospitals judged good or excellent by national regulators, so it’s
        no surprise that we’re trusted by the NHS, private medical insurers,
        employers and the general public to provide exceptional health and
        wellbeing services to the nation. But what also makes us different is
        our commitment to our flagship programmes to widen access, be that
        improving the lives of hundreds of children with cystic fibrosis through
        free exercise classes, or by pioneering the world’s largest research
        project into how exercise can help men recovering from prostate cancer,
        or by partnering with schools to provide thousands of pupils with free
        timetabled programmes to improve their health and wellbeing. We’re
        committed to our vision of building a healthier nation.
      </p>
    </div>
  );
};

export default About;
