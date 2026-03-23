import Eventform from "../components/Eventform";

function Event() {
  return (
    <div className="p-6 flex gap-4 flex-wrap">
      <Eventform
        title="2v2 Basketball"
        location="Oakland Park"
        sport="Basketball"
        privacy="Public"
        description="Friendly games"
        extra="Bring your own team"
      />

      <Eventform
        title="Soccer Match"
        location="Alameda Field"
        sport="Soccer"
        privacy="Private"
        description="Invite only"
        extra="Contact host"
      />
    </div>
  );
}

export default Event;