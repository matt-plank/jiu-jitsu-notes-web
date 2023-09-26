import Footer from "../components/footer";
import NavBar from "../components/navbar";

const Playlists = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar selected="/playlists" />

      <div className="flex-1" />
      <Footer />
    </div>
  );
};

export default Playlists;
