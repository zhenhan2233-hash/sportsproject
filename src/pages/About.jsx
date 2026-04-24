import pic1 from "../assets/IMG_2951.JPG";
import pic2 from "../assets/IMG_4446.JPG";


import Card from "../components/Card";

function About() {
  return (
    <div style={{ 
      display: "flex", 
      gap: "30px",
      padding: "20px",
      flexWrap: "wrap",
      justifyContent: "space-around",
      alignItems: "flex-start"
    }}>
      <div style={{ flex: "1 1 300px", maxWidth: "500px", minWidth: "300px" }}>
        <Card 
          name="Anthony"
          background="Student at Oakland Technical High School"
          goals="I want to help users that are have inadequate access to sporting facilities and events."
          skills="Experienced in sports | Avid Sports Watcher"
          pic={pic1}
        />
      </div>

      <div style={{ flex: "1 1 300px", maxWidth: "500px", minWidth: "300px" }}>
        <Card 
          name="Raymon"
          background="Student at Oakland Technical High School"
          goals="Providing a great experience for people in need of Sports Assistance."
          skills="Kind of Experienced in sports | Avid Sports Watcher and Betting Loser"
          pic={pic2}
        />
      </div>
    </div>
  );
}

export default About;