import Card from "../components/Card";

function About() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <Card 
        name="Anthony"
        blurb="Student at Oakland Technical High School"
        skills="Experienced in sports | Avid Sports Watcher"
      />

      <Card 
        name="Raymon"
        blurb="Student at Oakland Technical High School"
        skills="Kind of Experienced in sports | Avid Sports Watcher and Betting Loser"
      />
    </div>
  );
}

export default About;