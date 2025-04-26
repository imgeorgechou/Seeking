import React, { useState, useEffect } from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Herosction } from "./components/Herosction";
import { Character } from "./components/Character";
import { Festival } from "./components/Festival";
import { Header } from "./components/Header";
import { Feature } from "./components/Feature";
import { Photo } from "./components/Photo";
import { Promote } from "./components/Promote";
import { Footer } from "./components/Foot";
import { motion } from "framer-motion";
import { Aboutus } from "./pages/Aboutus";
import { StoryAns } from "./pages/StoryAns";

const HomePage = () => {
  return (
    <div className="pt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Herosction />
      </motion.div>
      <motion.h3
        className="text-center text-amber-50 text-l mt-25 sm:text-3xl"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        「在熙攘的人群中，我看見了一個蹲在地上哭泣的小男孩。」
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Character />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Festival />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Feature />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Photo />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Promote />
      </motion.div>
    </div>
  );
};

export const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模擬資料載入
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  return (
    <Router>
      <div className="min-h-screen w-full bg-black ">
        {loading ? (
          <div className="h-screen w-full flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
          </div>
        ) : (
          <>
            <div className="w-full max-w-full px-0 mx-0">
              <Header />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/storyans" element={<StoryAns />} />
              </Routes>
              <Footer />
            </div>
          </>
        )}
      </div>
    </Router>
  );
};
