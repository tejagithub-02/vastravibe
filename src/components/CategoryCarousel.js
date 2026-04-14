import React from "react";
import "./CategoryCarousel.css";

const categories = [
  { title: "Saree Collections", image: "/images/c1.jpeg" },
  { title: "Rented Gowns", image: "/images/c2.jpeg" },
  { title: "Happy Costumes", image: "/images/c3.jpeg" },
  { title: "Kuchchu Children Dresses", image: "/images/c4.jpeg" },
  { title: "Patch Works", image: "/images/c5.jpeg" },
  { title: "Back neck Designs", image: "/images/c6.jpeg" },
  { title: "Gowns and embroidery works", image: "/images/c7.jpeg" },
];

const CategoryCarousel = () => {
  return (
    <section className="category-carousel">
      <h2 className="carousel-title">Explore all categories</h2>
      <div className="carousel-wrapper">
        <div className="carousel-track">
          {categories.concat(categories).map((cat, index) => (
            <div className="carousel-item1" key={index}>
              <div className="category-image">
                <img src={cat.image} alt={cat.title} />
              </div>
              <p className="category-title">{cat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCarousel;
