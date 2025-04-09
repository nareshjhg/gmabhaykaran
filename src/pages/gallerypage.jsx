import React, { useState } from "react";
import Navbar from "../componats/navbar";
import Footer from "../componats/footer";
import "../gallery.css"; // Add this for custom animations

const galleryPhotos = [
  {
    src: "gallary1.jpg",
    desc: "GrandMaster AbhayKaran With Brajesh Pathak (Deputy Chief Minister)",
  },
  {
    src: "gallary2.jpg",
    desc: "GrandMaster AbhayKaran With Vijender Singh (Olympic Champion)",
  },
  {
    src: "gallary3.jpg",
    desc: "GrandMaster AbhayKaran With SinghRaj Adhana(Paralympics Champion)",
  },
  {
    src: "gallary4.jpg",
    desc: "GrandMaster AbhayKaran With Marathi film Actress",
  },
  { src: "gallary7.jpg", desc: "Honored by local officials" },
  {
    src: "gallary8.jpg",
    desc: "GrandMaster AbhayKaran With Brajesh Pathak (Deputy Chief Minister)",
  },
  { src: "gallary9.jpg", desc: "Honored by local officials" },
  {
    src: "Delhi-cm.jpg",
    desc: "GrandMaster AbhayKaran With Rekha Gupta (CM-Delhi)",
  },
  {
    src: "haryana-cm.jpg",
    desc: "GrandMaster AbhayKaran With Nayab Saini (CM-Haryana)",
  },
  {
    src: "eduction minister-haryana.jpg",
    desc: "GrandMaster AbhayKaran With Mahipal Dhanda Education Minister Haryana",
  },
  { src: "51.jpg", desc: "Honored by local officials" },
  { src: "52.jpg", desc: "Honored by local officials" },
  {
    src: "54.jpg",
    desc: "GrandMaster AbhayKaran With shiv pratap shukla -governor himachal pradesh",
  },
  { src: "56.jpg", desc: "Honored by local officials" },
  { src: "57.jpg", desc: "Honored by local officials" },
  { src: "58.jpg", desc: "Honored by local officials" },
  {
    src: "acharya devrat governer of gujrat.jpg",
    desc: "Grandmaster Abhaykarn With Acharya Devvrat governor of gujarat",
  },
  { src: "anna hajara.jpg", desc: "GrandMaster AbhayKaran With anna hazare" },
  {
    src: "banwari lal puroit -ex governar tamil nadu.jpg",
    desc: "GrandMaster Abhaykarn Wuth Banwarilal Purohit -ex governor Tamil Nadu",
  },
  {
    src: "bhagman birsa munda faimly .jpg",
    desc: "GrandMaster AbhayKaran With Bhagwan Birsa Munda family",
  },
  {
    src: "chamra linda tribel minister jharkhand.jpg",
    desc: "GrandMaster AbhayKaran With Chamra Linda Tribal Minister Jharkhand",
  },
  {
    src: "deepak birua- minister jharkhand.jpg",
    desc: "GrandMaster AbhayKaran With Deepak Birua- Minister Jharkhand",
  },
  {
    src: "deepka panday singh-minister jharkhand.jpg",
    desc: "GrandMaster AbhayKaran With Deepka Panday Singh-Minister Jharkhand",
  },
  {
    src: "depty-cm surinder choudary j&k.jpg",
    desc: "GrandMaster Abhaykarn With depty-cm Surinder Choudary j&k",
  },
  {
    src: "Ex-cm prem kumar dhumal-himachal .jpg",
    desc: "GrandMaster AbhayKaran Ex-cm Prem Kumar Dhumal-Himachal",
  },
  {
    src: "EX-Education Minsiter.jpg",
    desc: "GarndMaster AbhayKaran With EX-Education Minsiter.jpg",
  },
  {
    src: "ex-shri ram chouan cental mnister and jagdama pal ex -cm u.p.jpg",
    desc: "GrandMaster AbhayKaran WithEx-Shri Ram Chauhan Central Minister and Jagdambika Pal Ex -cm U.P.",
  },
  {
    src: "grandmaster abhaykaran in delhi universty.jpg",
    desc: "grandmaster abhaykaran in delhi universty",
  },
  {
    src: "hafijulhasal-minister jharkhand.jpg",
    desc: "GradMaster AbhayKaran With Hafizul Hasan-Minister Jharkhand",
  },
  {
    src: "hemamalni- indian actress.jpg",
    desc: "GrandMaster AbhayKaran With Hema Malini- Indian Actress",
  },
  {
    src: "irfan ansari -health minester jharkhand.jpg",
    desc: "GrandMaster AbhayKaran With Irfan Ansari -health Minister Jharkhand",
  },
  {
    src: "kaptain singh solanki ex-governer haryana& sartaj singh Ex-centaral minister bharat.jpg",
    desc: "GrandMAster AbhayKaran With kaptain Singh Solanki Ex-Governor Haryana, Sartaj Singh Ex-Central Minister Bharat",
  },
  {
    src: "naresh tikath kishan adhyas.jpg",
    desc: "GrandMaster AbhayKaran With Naresh Tikait kisan Adhyas",
  },
  {
    src: "nayab singh saini -cm haryana.jpg",
    desc: "GrandMaster AbhayKaran With Nayab Singh Saini -CM Haryana",
  },
  {
    src: "pandit prdeep prohit lok shaba member bargad ordisha.jpg",
    desc: "GrandMaster AbhayKaran With Pandit Pradeep Purohit Lok Sabha Member Bargarh Odisha",
  },
  {
    src: "prushatam rupala kandriya mantri.jpg",
    desc: "GrandMaster AbhayKaran With Prushtam Rupala Kendriya Mantri",
  },
  {
    src: "radha kirshan minister jharkhand.jpg",
    desc: "GrandMaster AbhayKaran With Radha krishna Minister Jharkhand",
  },
  {
    src: "ragni nayak-spok person congrss.jpg",
    desc: "GrandMaster AbhayKaran With ragni nayak-spok person congrss",
  },
  {
    src: "ram das soren- education minister jharkhand.jpg",
    desc: "GrandMaster AbhayKaran With Ramdas Soren- Education Minister Jharkhand",
  },
  {
    src: "rani rampal-captain indian hockey team.jpg",
    desc: "GrandMaster abhayKaran With Rani Rampal-Captain Indian Hockey Team",
  },
  {
    src: "sanjay yadav-minister jharkhand.jpg",
    desc: "GrandMaster AbhayKaran With Sanjay Yadav-Minister Jharkhand",
  },
  {
    src: "shibu soran EX-kandriya mantri.jpg",
    desc: "GrandMaster AbhayKaran With Shibu Soren Ex-Kendriya Mantri",
  },
  {
    src: "shiv partap shukla -governar himachal pardash.jpg",
    desc: "GrandMaster AbhayKaran With Shiv Pratap Shukla -Governor Himachal Pradesh",
  },
  {
    src: "shivraj chauan -agriculture minister.jpg",
    desc: "GrandMaster AbhayKaran With Shivraj Chouhan -Agriculture Minister",
  },
  {
    src: "shubud kant shya -ex central minister.jpg",
    desc: "GrandMaster Abhaykaran With Subodh kant Sahay -Ex Central Minister",
  },
  {
    src: "sindu tai sabkal-social worker.jpg",
    desc: "GranMaster AbhayKaran With Sindhutai Sapkal-Social Worker",
  },
  {
    src: "sports misnister-j&k.jpg",
    desc: "GrandMaster AbhayKaran With Satish Sharma Sports Minster",
  },
  {
    src: "vinod kumar panday-gearnal secatary-jharkand mukti morcha.jpg",
    desc: "GrandMaster Abhaykaran With Vinod kumar Pandey-Gearnal Secretary-Jharkhand Mukti Morcha",
  },
  {
    src: "yoginder prashad-minster of jharkhand.jpg",
    desc: "GrandMaster Abhaykaran With Yogendra Prasad-Minister of Jharkhand",
  },
];

const galleryVideos = [
  "/assest/videos/V1.mp4",
  "/assest/videos/V2.mp4",
  "/assest/videos/V3.mp4",
  "/assest/videos/V4.mp4",
  "/assest/videos/V5.mp4",
  "/assest/videos/v7.mp4",
  "/assest/videos/v8.mp4",
  "/assest/videos/video.mp4",
  
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageDesc, setImageDesc] = useState("");
  const [showPhotos, setShowPhotos] = useState(true);

  const openImage = (img, desc) => {
    setSelectedImage(img);
    setImageDesc(desc);
  };

  const closeImage = () => {
    setSelectedImage(null);
    setImageDesc("");
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-cyan-600 text-center mb-10">
          Photo & Video Gallery
        </h1>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setShowPhotos(true)}
            className={`px-6 py-2 rounded-md font-medium shadow ${
              showPhotos
                ? "bg-cyan-600 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-cyan-100"
            } transition`}
          >
            Photos
          </button>
          <button
            onClick={() => setShowPhotos(false)}
            className={`px-6 py-2 rounded-md font-medium shadow ${
              !showPhotos
                ? "bg-cyan-600 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-cyan-100"
            } transition`}
          >
            Videos
          </button>
        </div>

        {/* Photos Section */}
        {showPhotos && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Photos</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {galleryPhotos.map((img, i) => (
                <div
                  key={i}
                  className="cursor-pointer rounded-xl overflow-hidden shadow-md bg-gray-100"
                >
                  <div
                    className="w-full aspect-[4/3] relative"
                    onClick={() =>
                      openImage(`/assest/images/${img.src}`, img.desc)
                    }
                  >
                    <img
                      src={`/assest/images/${img.src}`}
                      alt={`Gallery Photo ${i + 1}`}
                      className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-sm text-center mt-2 text-gray-700 italic animate-fade-in">
                    {img.desc.length > 0
                      ? `📸 ${img.desc}`
                      : "Capturing the essence of the moment..."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Videos Section */}
        {!showPhotos && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Videos</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {galleryVideos.map((url, idx) => (
                <div
                  key={idx}
                  className="w-full aspect-video rounded-xl overflow-hidden shadow-lg"
                >
                  <video
                    src={url}
                    controls
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div
          onClick={closeImage}
          className="fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center z-50 px-4"
        >
          <img
            src={selectedImage}
            alt="Full Preview"
            className="max-w-4xl max-h-[80vh] rounded-xl shadow-xl"
          />
          <p className="text-lg text-white mt-4 text-center">{imageDesc}</p>
          <button
            onClick={closeImage}
            className="absolute top-4 right-6 text-white text-3xl font-bold hover:text-red-500"
          >
            &times;
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GalleryPage;
