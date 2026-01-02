import { FiClock, FiShield, FiPackage, FiUsers } from "react-icons/fi";

const AboutPage = () => {
  const FeatureCard = ({ icon, title, desc, delay }) => (
    <div
      className={`space-y-3 p-6 bg-base-100 rounded-xl shadow hover:shadow-xl transition
    animate-fadeUp ${delay} hover:scale-[1.02] cursor-pointer`}
    >
      <div className="animate-float">{icon}</div>
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-sm text-base-content/70">{desc}</p>
    </div>
  );

  const StatCard = ({ number, label, delay }) => (
    <div
      className={`bg-base-100 shadow p-6 rounded-lg animate-fadeUp ${delay}
    hover:scale-[1.05] hover:shadow-xl transition`}
    >
      <h3 className="text-3xl font-bold text-primary">{number}</h3>
      <p className="text-base-content/80">{label}</p>
    </div>
  );
  return (
    <div className="space-y-20">
      <section className="bg-[url('https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80')] bg-cover bg-center h-96 flex items-center justify-center text-white">
        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center animate-fadeUp">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            About PawMart 🐾
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            We connect pets and people — with trust, expertise, and love.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6">
        <h2 className="mt-12 text-2xl font-semibold text-gray-800">Features</h2>
        <div className="w-20 h-1 mt-2 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full" />

        <div className="grid md:grid-cols-4 gap-6 text-center mt-2.5">
          <FeatureCard
            icon={<FiShield className="text-4xl text-primary" />}
            title="Trusted Sellers"
            desc="Verified & reliable community"
            delay="delay-[0ms]"
          />
          <FeatureCard
            icon={<FiClock className="text-4xl text-primary" />}
            title="Fast Shipping"
            desc="Deliveries you can count on"
            delay="delay-[0ms]"
          />
          <FeatureCard
            icon={<FiPackage className="text-4xl text-primary" />}
            title="Secure Packaging"
            desc="Safety first, always"
            delay="delay-[0ms]"
          />
          <FeatureCard
            icon={<FiUsers className="text-4xl text-primary" />}
            title="Pet Community"
            desc="Growing every day"
            delay="delay-[0ms]"
          />
        </div>
      </section>
      <section className="bg-base-200 py-16 animate-fadeUpSlow">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          <h2 className="mt-12 text-2xl font-semibold text-gray-800">
            Our Story
          </h2>
          <div className="w-20 h-1 mt-2 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full" />
          <p className="text-lg text-left text-base-content/80">
            PawMart began with a mission — make pet care easy, reliable &
            joyful.
          </p>
          <p className="text-base-content/70 text-left">
            PawMart is a trusted, community-driven platform designed to simplify
            and enhance the pet care experience. Built with a deep love for
            animals, our mission is to make pet adoption, buying, and selling
            safe, reliable, and joyful for everyone. We bring together pet
            lovers, breeders, shelters, and pet shops under one secure and
            easy-to-use platform. At PawMart, transparency and trust are at the
            heart of everything we do. Every listing is carefully managed to
            ensure safety, authenticity, and ethical care. From adopting a new
            furry companion to purchasing high-quality pet food, toys, and
            accessories, PawMart offers a seamless experience tailored to modern
            pet families. We believe pets are more than companions—they are
            family. That's why we focus on building meaningful connections,
            promoting responsible pet ownership, and supporting long-term pet
            well-being. Today, PawMart proudly supports thousands of families by
            providing reliable services, trusted products, and a platform built
            on care, compassion, and innovation. Together, we are creating a
            better, safer future for pets and the people who love them. 🐾
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-8">
          <h2 className="mt-8 text-2xl font-semibold text-gray-800">
            Our Achievements
          </h2>
          <div className="w-20 h-1 mt-2 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full" />
        </div>
        <div className="grid gap-8 text-center sm:grid-cols-2 md:grid-cols-3">
          <StatCard number="20K+" label="Happy Customers" delay="delay-[0ms]" />
          <StatCard
            number="97%"
            label="Product Satisfaction"
            delay="delay-[0ms]"
          />
          <StatCard number="90%" label="Repeat Buyers" delay="delay-[0ms]" />
        </div>
      </section>

      <section className="bg-black rounded-md text-white py-12 animate-fadeUpSlow">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h3 className="text-2xl font-bold">Stay Updated with PawMart 🐕</h3>
          <div className="flex flex-col md:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full max-w-md focus:ring focus:ring-secondary"
            />
            <button className="btn btn-secondary">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
