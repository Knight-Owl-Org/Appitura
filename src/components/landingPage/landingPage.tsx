"use client";

import { useRef } from "react";
import Navbar from "./Navbar";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <main className="w-full h-full " style={{ backgroundColor: "#000000", minHeight: "100vh" }}>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        {/* Video Container */}
        <div className="video-container" style={{ paddingLeft: "91px", paddingTop: "80px", boxSizing: "border-box" }}>
          <div style={{ position: "relative", width: "1195px", height: "816px", borderRadius: "30px", overflow: "hidden" }}>
            {/* 🔵 Appitura Logo (Top Left) */}
            <div style={{ position: "absolute", zIndex: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", backgroundColor: "#000000", padding: "8px 16px", borderRadius: "20px" }}>
                <img src="/logo.png" alt="Appitura Logo" style={{ width: "84.31px", height: "86px" }} />
                <span style={{ color: "#FFFFFF", fontSize: "64px", fontWeight: 400, fontFamily: "Jura", lineHeight: "100px" }}>Appitura</span>
              </div>
            </div>

            {/* 🔘 Navbar */}
            <div style={{ position: "absolute", top: "28px", right: "400px", zIndex: 10 }}>
              <Navbar />
            </div>

            {/* 🎥 Video */}
            <video ref={videoRef} autoPlay loop muted width="1195" height="816" style={{ display: "block", width: "1195px", height: "816px", objectFit: "cover", borderRadius: "30px" }}>
              <source src="/home.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* 📝 Text Block */}
            <div style={{ position: "absolute", bottom: "50px", left: "87px", width: "600px" }}>
              <div style={{ color: "#FFFFFF", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "55px", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", letterSpacing: "0%", lineHeight: "110%" }}>
                Empowering your vision Through Innovative <span style={{ color: "#1B96C999" }}>Mobile Apps</span>
              </div>
              <div style={{ color: "#FFFFFF", fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "20px", height: "82px", lineHeight: "110%", marginTop: "21px" }}>
                At Appitura, we transform ideas into cutting-edge mobile applications that drive success and innovation. Discover the future of app development with us.
              </div>
            </div>
          </div>
        </div>

        {/* New Div Section */}
        <div style={{ marginLeft: "17px", alignSelf: "center"  }}>
          <div style={{ color: "#FFFFFF", fontFamily: "Jura", fontWeight: 700, fontSize: "45px", marginTop: "20px", width: "50px" , lineHeight: "110%"}}>
            Your App’s Blueprint
          </div>
          <div style={{ color: "#FFFFFF", fontFamily: "Jura", fontWeight: 700, fontSize: "20px", marginTop: "20px" }}>
            Top-notch Services
          </div>
          <div style={{ marginTop: "25px", display: "flex", flexDirection: "column", gap: "35px" }}>
            {/* Innovative Solutions */}
            <div style={{ display: "flex", alignItems: "center", gap: "11px" }}>
              <img src="/innavetive.png" alt="Innovative Solutions Icon" style={{ width: "24px", height: "24px" }} />
              <span style={{ color: "#FFFFFF", fontFamily: "Jura", fontWeight: 400, fontSize: "17px" }}>
                Innovative Solutions
              </span>
            </div>
            {/* Expert Development */}
            <div style={{ display: "flex", alignItems: "center", gap: "11px" }}>
              <img src="/expert.png" alt="Expert Development Icon" style={{ width: "24px", height: "24px" }} />
              <span style={{ color: "#FFFFFF", fontFamily: "Jura", fontWeight: 400, fontSize: "17px" }}>
                Expert Development
              </span>
            </div>
            {/* Collaborative Approach */}
            <div style={{ display: "flex", alignItems: "center", gap: "11px" }}>
              <img src="/collabaration.png" alt="Collaborative Approach Icon" style={{ width: "24px", height: "24px" }} />
              <span style={{ color: "#FFFFFF", fontFamily: "Jura", fontWeight: 400, fontSize: "17px" }}>
                Collaborative Approach
              </span>
            </div>
          </div>
          <button style={{ 
            width: "195px", 
            height: "49px", 
            borderRadius: "30px", 
            border: "1px solid #FFFFFF80", 
            background: "transparent", 
            color: "#FFFFFF", 
            fontFamily: "Jura, sans-serif", 
            fontWeight: 400, 
            fontSize: "18px", 
            marginTop: "22px", 
            cursor: "pointer" 
          }}>
            Contact
          </button>
        </div>
      </div>
      {/* 🔴 Explore the Experience */}
      <div style={{ position: "absolute", top: "710px", right: "39px", display: "flex", alignItems: "center", justifyContent: "space-between", width: "461px", height: "84px", borderRadius: "30px", border: "1px solid #FFFFFF80", padding: "0 31px" }}>
        <div style={{ color: "#FFFFFF", fontFamily: "Jura", fontWeight: 400, fontSize: "18px", textAlign: "center", flex: 1 }}>
          Explore the Experience
        </div>
        <button style={{ background: "transparent", border: "none", cursor: "pointer", padding: 0 }} onClick={() => { if (videoRef.current?.paused) { videoRef.current.play(); } else { videoRef.current?.pause(); } }}>
          <img src="/explore.png" alt="Play button" style={{ width: "64px", height: "62px" }} />
        </button>
      </div>
    </main>
  );
}
