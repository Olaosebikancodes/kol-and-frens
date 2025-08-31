import React, { useState } from "react";
import {
  HelpCircle,
  DollarSign,
  Users,
  Wrench,
  Rocket,
  TrendingUp,
  Flame,
  Scale,
  CreditCard,
  MessageCircle,
  Twitter,
  Mail,
  AlertTriangle,
  ArrowDown,
} from "lucide-react";

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const faqs = [
    {
      question: "What exactly is KOL and frens?",
      answer:
        "It's a parody token that makes fun of crypto influencers and their ridiculous behavior. Think of it as a mirror held up to the most cringe parts of crypto Twitter, but with actual utility: making you laugh until you cry (or cry until you laugh).",
      icon: <HelpCircle className="w-8 h-8 text-orange-500" />,
    },
    {
      question: "Is this a legitimate investment?",
      answer:
        "About as legitimate as a 3-dollar bill signed by Satoshi himself. This is pure satire, friend. We're not here to make you rich, we're here to make you realize how silly this whole space can be. DYOR means 'Do Your Own Research,' not 'Definitely Yeet Our Rent.",
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
    },
    {
      question: "Who are the team members?",
      answer:
        "Our team consists of reformed crypto influencers who got tired of shilling dog coins to their grandmas. We have Attack Shiny (professional milk spiller), 2 Pump (disappears randomly), and Dunk Mooner (still falling for every protocol). Leadership you can trust!",
      icon: <Users className="w-8 h-8 text-blue-500" />,
    },
    {
      question: "What's the utility of $KOL tokens?",
      answer:
        "Excellent question! You can use $KOL to join our exclusive VIP group where we give terrible financial advice, share low-quality memes, and argue about whether Bitcoin is actually a vegetable. Also, you get priority access to our monthly 'How to Lose Money Faster' webinars.",
      icon: <Wrench className="w-8 h-8 text-purple-500" />,
    },
    {
      question: "When moon? When Lambo?",
      answer:
        "The moon is approximately 384,400 kilometers away, and Lamborghinis start at around $200,000. We cannot control celestial mechanics or Italian sports car pricing. However, we can guarantee that holding $KOL will make you 37% more likely to use rocket emojis inappropriately.",
      icon: <Rocket className="w-8 h-8 text-orange-500" />,
    },
    {
      question: "Are the charts real?",
      answer:
        "The charts are as real as our commitment to making you question every financial decision you've ever made. We use advanced technical analysis techniques like 'drawing random lines' and 'asking Magic 8-Ball for price predictions.' Professional traders hate this one weird trick!",
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
    },
    {
      question: "What about tokenomics?",
      answer:
        "37% burned (in a good way), 4.8 billion dollars in liquidity (trust us bro), and enough tokens to reach the moon if you stacked them really, really high. Our tokenomics were designed by actual economists* (*economists not actually involved).",
      icon: <Flame className="w-8 h-8 text-red-500" />,
    },
    {
      question: "Is this financial advice?",
      answer:
        "Absolutely not! This is financial satire. The only advice we give is: don't take advice from cartoon characters on the internet. If you're looking for real financial guidance, please consult a licensed professional, not a meme token with trust issues.",
      icon: <Scale className="w-8 h-8 text-yellow-500" />,
    },
    {
      question: "How do I buy $KOL tokens?",
      answer:
        "First, question all your life choices that led to this moment. Then, connect your wallet, swap some tokens, and prepare for a wild ride of self-reflection about the state of modern finance. Remember: we're all just numbers in someone else's blockchain.",
      icon: <CreditCard className="w-8 h-8 text-indigo-500" />,
    },
    {
      question: "What if I have more questions?",
      answer:
        "Join our community of fellow reformed crypto degenerates! We have a Discord where we share our favorite trading disasters and a Telegram where we pretend to understand market psychology. Or email us - we actually read those... sometimes.",
      icon: <MessageCircle className="w-8 h-8 text-pink-500" />,
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-br from-orange-50 via-white to-yellow-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-10 text-9xl font-bold text-orange-400">
          ?
        </div>
        <div className="absolute top-40 right-20 text-9xl font-bold text-yellow-400">
          !
        </div>
        <div className="absolute bottom-40 left-20 text-9xl font-bold text-orange-300">
          ?
        </div>
        <div className="absolute bottom-20 right-10 text-9xl font-bold text-yellow-300">
          !
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All your burning questions about our burning tokens, answered with
            the professionalism you'd expect from a meme project.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 focus:outline-none focus:ring-4 focus:ring-orange-200 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">{faq.icon}</div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`
                    text-2xl text-orange-500 transform transition-transform duration-300
                    ${openFAQ === index ? "rotate-180" : "rotate-0"}
                  `}
                  >
                    <ArrowDown />
                  </div>
                </div>
              </button>

              <div
                className={`
                transition-all duration-500 ease-in-out overflow-hidden
                ${
                  openFAQ === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }
              `}
              >
                <div className="px-6 pb-6">
                  <div className="pl-16">
                    <div className="w-full h-px bg-gradient-to-r from-orange-200 to-yellow-200 mb-4"></div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-8 rounded-3xl text-white shadow-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Still Have Questions? 🤷‍♂
            </h3>
            <p className="text-lg md:text-xl mb-6 opacity-90">
              Join our community of confused but enthusiastic crypto
              enthusiasts!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://x.com/kolandfrens"
                className="border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                Follow Twitter <Twitter className="w-5 h-5 inline-block ml-2" />
              </a>
              <a
                href="mailto:kolandfrens@gmail.com"
                className="border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                Email Us <Mail className="w-5 h-5 inline-block ml-2" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-3">
              <AlertTriangle className="w-5 h-5 inline-block ml-2" />
              <h4 className="text-lg font-bold text-gray-700">
                Legal Disclaimer
              </h4>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              This FAQ is for entertainment purposes only. Any resemblance to
              actual financial advice is purely coincidental. $KOL tokens have
              no intrinsic value other than their ability to make you question
              the fundamental nature of money itself. Please gamble responsibly,
              or at least entertainingly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
