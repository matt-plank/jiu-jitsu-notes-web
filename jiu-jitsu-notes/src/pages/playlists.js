import Footer from "../components/footer";
import NavBar from "../components/navbar";

const Playlists = ({ account }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar selected="/playlists" username={account.username} />

      <div className="flex-1" />
      <Footer />
    </div>
  );
};

export default Playlists;
