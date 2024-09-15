import { FaCookie, FaHeart, FaUsers, FaBook, FaEnvelope } from "react-icons/fa";
import Header from "../Components/Header/Header";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="bg-[#f5f3f0] min-h-screen">
        {/* Hero Section */}
        <section className="bg-[#a0785d] text-white py-20">
          <div className="container px-6 mx-auto text-center">
            <h1 className="mb-4 text-5xl font-bold">Sweet Delights</h1>
            <p className="text-xl">
              Crafting Moments of Joy, One Treat at a Time
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container px-6 mx-auto">
            <h2 className="text-3xl font-bold text-[#5f4b3a] mb-8 text-center">
              Our Story
            </h2>
            <div className="flex flex-col items-center md:flex-row">
              <div className="mb-8 md:w-1/2 md:mb-0">
                <img
                  src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-traditional-indian-mithai-png-image_10212114.png"
                  alt="Our Bakery"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="text-xl font-bold md:w-1/2 md:pl-8">
                <p className="text-[#5f4b3a] mb-4">
                  Founded in 2024, Sweet Delights began as a small family bakery
                  with a passion for creating the most delectable treats. Our
                  journey started with a simple goal: to bring smiles to our
                  community through the magic of freshly baked goods.
                </p>
                <p className="text-[#5f4b3a]">
                  Over the years, we've grown from a local favorite to a beloved
                  brand, but our commitment to quality ingredients and
                  handcrafted recipes remains unchanged. Every pastry, cake, and
                  cookie is made with love, just like it was on day one.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="bg-[#a0785d] text-white py-16">
          <div className="container px-6 mx-auto text-center">
            <h2 className="mb-8 text-3xl font-bold">Our Mission</h2>
            <div className="flex flex-wrap justify-center">
              <div className="w-full p-4 sm:w-1/2 md:w-1/3">
                <FaCookie className="mx-auto mb-4 text-5xl" />
                <h3 className="mb-2 text-xl font-semibold">
                  Quality Ingredients
                </h3>
                <p>
                  We use only the finest, natural ingredients in all our
                  creations.
                </p>
              </div>
              <div className="w-full p-4 sm:w-1/2 md:w-1/3">
                <FaHeart className="mx-auto mb-4 text-5xl" />
                <h3 className="mb-2 text-xl font-semibold">Spread Joy</h3>
                <p>
                  Our goal is to make every day a little sweeter for our
                  customers.
                </p>
              </div>
              <div className="w-full p-4 sm:w-1/2 md:w-1/3">
                <FaUsers className="mx-auto mb-4 text-5xl" />
                <h3 className="mb-2 text-xl font-semibold">Community Focus</h3>
                <p>
                  We're committed to giving back and supporting local
                  initiatives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16">
          <div className="container px-6 mx-auto">
            <h2 className="text-3xl font-bold text-[#5f4b3a] mb-8 text-center">
              Meet Our Team
            </h2>
            <div className="flex flex-wrap justify-center">
              {[
                {
                  name: "Zeyad",
                  role: "Product Owner ",
                  image:
                    "https://media.discordapp.net/attachments/1239307079853019276/1277876324123410452/zeyad.JPG?ex=66d8a5d1&is=66d75451&hm=f2292ad4c4e739bb3632c793b356386f13523398a5f2b81d0d7d3a93315a579a&=&format=webp&width=442&height=662",
                },
                {
                  name: "ABDALRAHMAN",

                  role: "Scrum Master",
                  image:
                    "https://cdn.discordapp.com/attachments/1239307079853019276/1281229483759636502/1718722252682.png?ex=66dee9f1&is=66dd9871&hm=b912f5f6e3ed00237da02eee733742d091c81f706da50cf1ca91930f70d4faf8&",
                },
                {
                  name: "Sondos ",
                  role: "Quality Assurance",
                  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s",
                },
                {
                  name: "abed al majeed ",
                  role: " Developer ",
                  image:
                    "https://cdn.discordapp.com/attachments/1279794719647469711/1281231601950392320/FB_IMG_1725539798781.jpg?ex=66de432a&is=66dcf1aa&hm=0cd9611909fdbbdb6027a9f74fdadbdcf87e15911244dd28895a3c3fa8fa3506&",
                },
                {
                  name: "Noor",
                  role: " Developer",
                  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s",
                },
                {
                  name: "Hashem",
                  role: "Developer ",
                  image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="w-full p-4 sm:w-1/2 md:w-1/3 lg:w-1/4"
                >
                  <div className="p-6 text-center bg-white rounded-lg shadow-lg">
                    <img
                      src={member.image}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                      alt={member.name}
                      style={{
                        border: "4px solid #5f4b3a",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <h3 className="text-xl font-semibold text-[#5f4b3a] mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#a0785d]">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Products */}
        <section className="bg-[#f5f3f0] py-16">
          <div className="container px-6 mx-auto">
            <h2 className="text-3xl font-bold text-[#5f4b3a] mb-8 text-center">
              Our Products
            </h2>
            <div className="flex flex-wrap justify-center">
              {[
                {
                  name: "Signature Desserts",
                  icon: (
                    <FaCookie className="text-5xl text-[#a0785d] mx-auto" />
                  ),
                  description:
                    "Delight in our range of signature desserts, crafted with love and precision.",
                },
                {
                  name: "Artisan Breads",
                  icon: <FaBook className="text-5xl text-[#a0785d] mx-auto" />,
                  description:
                    "Experience the taste of tradition with our freshly baked artisan breads.",
                },
                {
                  name: "Specialty Cakes",
                  icon: <FaHeart className="text-5xl text-[#a0785d] mx-auto" />,
                  description:
                    "Perfect for any occasion, our specialty cakes are both beautiful and delicious.",
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="w-full p-4 sm:w-1/2 md:w-1/3 lg:w-1/4"
                >
                  <div className="p-6 text-center bg-white rounded-lg shadow-lg">
                    {product.icon}
                    <h3 className="text-xl font-semibold text-[#5f4b3a] mb-2">
                      {product.name}
                    </h3>
                    <p className="text-[#a0785d]">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="bg-[#a0785d] text-white py-16">
          <div className="container px-6 mx-auto text-center">
            <h2 className="mb-8 text-3xl font-bold">Contact Us</h2>
            <p className="mb-6 text-xl">
              Have questions or need to get in touch? We’d love to hear from
              you!
            </p>
            <FaEnvelope className="mx-auto mb-4 text-5xl" />
            <a
              href="mailto:info@sweetdelights.com"
              className="text-xl font-semibold text-white underline"
            >
              info@sweetdelights.com
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;