import { motion } from "framer-motion";

export default function Hero() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  return (
    <main
      id="home"
      className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full opacity-20 animate-bounce blur-sm"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full opacity-30 animate-bounce blur-sm"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-32 left-20 w-12 h-12 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full opacity-25 animate-bounce blur-sm"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full opacity-20 animate-bounce blur-sm"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-orange-100 rounded-full opacity-40 animate-pulse"></div>
        <div
          className="absolute top-2/3 right-1/3 w-6 h-6 bg-yellow-100 rounded-full opacity-50 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-20 pb-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-[85vh] gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="animate-fade-in-up space-y-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 leading-tight tracking-tight">
                Hey, fellow{" "}
                <span className="text-orange-500 relative inline-block">
                  doodleheads!
                  <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-orange-200 to-yellow-200 -rotate-1 -z-10 opacity-80"></span>
                  <span className="absolute -bottom-1 left-1 w-full h-2 bg-orange-300 rotate-1 -z-10 opacity-60"></span>
                </span>
              </h1>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700">
                it's{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent font-black">
                  KOL
                </span>{" "}
                and{" "}
                <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent font-black">
                  frens!
                </span>
              </h2>

              <div className="space-y-5">
                <p className="text-xl md:text-2xl text-gray-600 font-medium">
                  An edgy parody, staked in mud.
                </p>
                <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto lg:mx-0">
                  The most notorious crypto types, but make it{" "}
                  <span className="font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded-lg shadow-sm">
                    absolutely ridiculous
                  </span>
                  .
                </p>
              </div>

              <motion.div
                className="mt-12 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={itemVariants}
              >
                <motion.a
                  href="https://t.me/kolandfrens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg inline-block text-center"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#374151",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  Join Telegram Group
                </motion.a>

                <motion.a
                  href="https://dexscreener.com/solana/5h2ih9jha7gveblvkzglzj3nmygfschn9hectzrtpzsc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-800 px-8 py-4 rounded-xl font-bold text-lg border-2 border-orange-300 shadow-lg"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#fed7aa",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  Buy DOODLEHEAD NFTs
                </motion.a>
              </motion.div>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full opacity-30 blur-3xl scale-110 animate-pulse"></div>

                <div className="relative w-full h-full  rounded-full flex items-center justify-center shadow-2xl ring-4 ring-white/20 ring-offset-4 ring-offset-transparent overflow-hidden">
                  <img
                    src="/images/hero.png"
                    alt="KOL Character"
                    className="w-full h-full object-cover rounded-full transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </div>
              <div className="absolute -top-8 -left-8 w-12 h-12 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full opacity-70 animate-ping shadow-lg"></div>
              <div
                className="absolute -bottom-8 -right-8 w-8 h-8 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full opacity-70 animate-ping shadow-lg"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute top-8 -right-12 w-6 h-6 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full opacity-60 animate-bounce"
                style={{ animationDelay: "0.8s" }}
              ></div>
              <div
                className="absolute -bottom-12 -left-6 w-10 h-10 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full opacity-50 animate-bounce"
                style={{ animationDelay: "1.2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <motion.div className="mt-16" variants={itemVariants}>
        <motion.div
          className="bg-white/60 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto border border-white/80"
          whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-gray-700 font-medium italic">
            "This is a parody, and dev owes me a lot of dogecoin"
          </p>
          <p className="text-sm text-gray-600 mt-2">
            - John Lawyerman III, esq.
          </p>
        </motion.div>
      </motion.div>
    </main>
  );
}
