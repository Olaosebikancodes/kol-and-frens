import React, { useState } from "react";
import { Theater, Users, Rocket, Laugh, Star } from "lucide-react";

const MEMES_DATA = [
  {
    id: 1,
    title: "Main KOL Character",
    description: "The legendary Bitcoin shirt guy himself",
    category: "characters",
    image: "/images/liquidity.png",
    featured: true,
  },
  {
    id: 2,
    title: "Attack Shiny",
    description: "Professional milk spiller and chaos creator",
    category: "characters",
    image: "/images/milk.jpeg",
  },
  {
    id: 3,
    title: "2 Pump",
    description: "Disappears randomly, legendary ghost",
    category: "characters",
    image: "/images/pump.jpeg",
  },
  {
    id: 4,
    title: "Dunk Mooner",
    description: "Still falling for every protocol",
    category: "characters",
    image: "/images/dunk-mooner.jpeg",
  },
  {
    id: 5,
    title: "To The Moon Meme",
    description: "Classic rocket ship energy",
    category: "memes",
    image: "/images/community.png",
  },
  {
    id: 6,
    title: "Diamond Hands",
    description: "When you're holding through everything",
    category: "memes",
    image: "/images/prince.png",
  },
  {
    id: 7,
    title: "Wen Lambo",
    description: "The eternal crypto question",
    category: "memes",
    image: "/images/lambo.jpeg",
  },
  {
    id: 8,
    title: "HODL Forever",
    description: "Never selling, ever",
    category: "memes",
    image: "/images/hold.jpeg",
  },
  {
    id: 9,
    title: "Crypto Influencer Starter Pack",
    description: "Everything you need to become a KOL",
    category: "comedy",
    image: "/images/influencer.jpeg",
  },
  {
    id: 10,
    title: "Chart Analysis",
    description: "Professional technical analysis with crayons",
    category: "comedy",
    image: "/images/chart.jpeg",
  },
  {
    id: 11,
    title: "Bullish AF",
    description: "Always optimistic, always wrong",
    category: "comedy",
    image: "/images/bullish.png",
  },
  {
    id: 12,
    title: "Exit Liquidity",
    description: "Thanks for playing!",
    category: "comedy",
    image: "/images/exit.jpeg",
  },
];

const CATEGORIES = [
  { id: "all", name: "All Memes", icon: <Theater /> },
  { id: "characters", name: "Characters", icon: <Users /> },
  { id: "memes", name: "Classic Memes", icon: <Rocket /> },
  { id: "comedy", name: "Comedy Gold", icon: <Laugh /> },
];

const FilterButton = ({ category, isActive, onClick }) => (
  <button
    onClick={() => onClick(category.id)}
    aria-pressed={isActive}
    className={`
      flex items-center gap-2 
      px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 
      rounded-full font-bold text-sm sm:text-base md:text-lg 
      transition-all duration-300 transform hover:scale-105
      ${
        isActive
          ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg"
          : "bg-white text-gray-700 shadow-md hover:shadow-lg border border-gray-200"
      }
    `}
  >
    <span className="w-5 h-5 flex items-center justify-center">
      {category.icon}
    </span>
    <span>{category.name}</span>
  </button>
);

const GalleryItem = ({ meme, index, onClick }) => (
  <div
    className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
    onClick={() => onClick(meme)}
    style={{ animationDelay: `${index * 0.1}s` }}
  >

    {meme.featured && (
      <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 flex items-center gap-2">
        <Star className="w-4 h-4 text-yellow-300" /> FEATURED
      </div>
    )}

    <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
      <img
        src={meme.image}
        alt={meme.title}
        className="w-full h-full transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
      <div className="p-4 text-white w-full">
        <h3 className="font-bold text-lg mb-1">{meme.title}</h3>
        <p className="text-sm opacity-90">{meme.description}</p>
      </div>
    </div>

    <div className="absolute top-3 right-3 bg-white bg-opacity-90 text-gray-700 text-xs font-medium px-2 py-1 rounded-full flex items-center justify-center">
      {CATEGORIES.find((cat) => cat.id === meme.category)?.icon && (
        <span className="flex items-center justify-center">
          {React.cloneElement(
            CATEGORIES.find((cat) => cat.id === meme.category).icon,
            { className: "w-4 h-4" }
          )}
        </span>
      )}
    </div>
  </div>
);

const StatsCard = ({ icon, value, label, color }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform duration-200">
    <div className="text-3xl mb-2 flex justify-center">{icon}</div>
    <div className={`text-2xl font-bold ${color}`}>{value}</div>
    <div className="text-gray-600 font-medium">{label}</div>
  </div>
);

const Modal = ({ selectedImage, onClose }) => {
  if (!selectedImage) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="aspect-square bg-gradient-to-br from-orange-200 to-yellow-200 flex items-center justify-center overflow-hidden">
          <img
            src={selectedImage.image}
            alt={selectedImage.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.innerHTML = `
                <div class="w-full h-full flex items-center justify-center text-8xl bg-gradient-to-br from-orange-200 to-yellow-200">
                  🎭
                </div>
              `;
            }}
          />
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-gray-600">{selectedImage.description}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              ×
            </button>
          </div>

          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium flex items-center gap-2">
              <span className="w-4 h-4">
                {
                  CATEGORIES.find((cat) => cat.id === selectedImage.category)
                    ?.icon
                }
              </span>
              {
                CATEGORIES.find((cat) => cat.id === selectedImage.category)
                  ?.name
              }
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const BackgroundDecorations = () => (
  <div className="absolute inset-0 overflow-hidden opacity-5">
    <div className="absolute top-20 left-10 text-9xl font-bold text-orange-400 rotate-12">
      📸
    </div>
    <div className="absolute top-40 right-20 text-9xl font-bold text-yellow-400 -rotate-12">
      🎨
    </div>
    <div className="absolute bottom-40 left-20 text-9xl font-bold text-orange-300 rotate-45">
      🖼
    </div>
    <div className="absolute bottom-20 right-10 text-9xl font-bold text-yellow-300 -rotate-45">
      🎭
    </div>
  </div>
);

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredMemes =
    activeFilter === "all"
      ? MEMES_DATA
      : MEMES_DATA.filter((meme) => meme.category === activeFilter);

  const stats = {
    total: MEMES_DATA.length,
    characters: MEMES_DATA.filter((m) => m.category === "characters").length,
    comedy: MEMES_DATA.filter((m) => m.category === "comedy").length,
    featured: MEMES_DATA.filter((m) => m.featured).length,
  };


  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
  };

  const handleImageClick = (meme) => {
    setSelectedImage(meme);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-50 relative overflow-hidden">

      <BackgroundDecorations />

      <div className="container mx-auto px-4 relative z-10">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Meme{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
              Gallery
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A curated collection of our finest digital art, professional
            character designs, and absolutely legendary memes.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map((category) => (
            <FilterButton
              key={category.id}
              category={category}
              isActive={activeFilter === category.id}
              onClick={handleFilterChange}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredMemes.map((meme, index) => (
            <GalleryItem
              key={meme.id}
              meme={meme}
              index={index}
              onClick={handleImageClick}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <StatsCard
            icon={<Users className="w-6 h-6 mx-auto" />}
            value={stats.total}
            label="Total Memes"
            color="text-orange-600"
          />
          <StatsCard
            icon={<Users className="w-6 h-6 mx-auto" />}
            value={stats.characters}
            label="Characters"
            color="text-blue-600"
          />
          <StatsCard
            icon={<Laugh className="w-6 h-6 mx-auto" />}
            value={stats.comedy}
            label="Comedy Gold"
            color="text-green-600"
          />
          <StatsCard
            icon={<Star className="w-6 h-6 mx-auto" />}
            value={stats.featured}
            label="Featured"
            color="text-purple-600"
          />
        </div>
      </div>

      <Modal selectedImage={selectedImage} onClose={handleCloseModal} />
    </section>
  );
}
