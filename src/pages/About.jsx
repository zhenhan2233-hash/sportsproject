import pic1 from "../assets/IMG_2951.JPG";
import pic2 from "../assets/IMG_4446.JPG";


import Card from "../components/Card";

function About() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <Card 
        name="Anthony"
        background="Student at Oakland Technical High School"
        goals="I want to help users that are have inadequate access to sporting facilities and events."
        skills="Experienced in sports | Avid Sports Watcher"
        pic={pic1}
      />

      <Card 
        name="Raymon"
        background="Student at Oakland Technical High School"
        goals="Providing a great experience for people in need of Sports Assistance."
        skills="Kind of Experienced in sports | Avid Sports Watcher and Betting Loser"
        pic={pic2}
      />
    </div>
  );
}

export default About;