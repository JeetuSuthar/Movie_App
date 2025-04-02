import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setBannerData, setImageURL } from "./store/movieoSlice";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const fetchTrendingData = async () => {
    try {
      const response = await axios.get("/trending/all/week");
      dispatch(setBannerData(response.data.results));
    } catch (error) {
      console.error("Trending API error:", error);
    }
  };

  const fetchConfiguration = async () => {
    try {
      const response = await axios.get("/configuration");
      dispatch(setImageURL(response.data.images.secure_base_url + "original"));
    } catch (error) {
      console.error("Configuration API error:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([fetchTrendingData(), fetchConfiguration()]);
      setLoading(false);
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen flex flex-col justify-center items-center bg-black text-white">
        {/* Navbar Placeholder */}
        <div className="h-16 w-full bg-gray-900 fixed top-0"></div>

        {/* Simple Loader */}
        <div className="flex flex-col justify-center items-center">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-white text-lg font-semibold">
          Lights, camera, action! Loading your movie experience..
          </p>
        </div>
      </div>
    );
  }

  

  return (
    <main className="pb-14 lg:pb-0">
      <Header />
      <div className="min-h-[90vh]">
        <Outlet />
      </div>
      <Footer />
      <MobileNavigation />
    </main>
  );
}

export default App;
