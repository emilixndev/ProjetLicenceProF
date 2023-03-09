import React, { useState } from "react";
import FilterProduct from "../components/filterProduct";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/Sidebar";
import client from "../services/axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const dataFake = [
    {
      id: 1,
      name: "Nom matériel",
      brand: "Marque",
      image: "https://picsum.photos/200/150",
      categoryId: 1,
    },
    {
      id: 2,
      name: "Nom matériel 2",
      brand: "Marque 2",
      image: "https://picsum.photos/200/150",
      categoryId: 0,
    },
    {
      id: 3,
      name: "Nom matériel 3",
      brand: "Marque 3",
      image: "https://picsum.photos/200/150",
      categoryId: 1,
    },
    {
      id: 4,
      name: "Nom matériel",
      brand: "Marque",
      image: "https://picsum.photos/200/150",
      categoryId: 1,
    },
    {
      id: 5,
      name: "Nom matériel 2",
      brand: "Marque 2",
      image: "https://picsum.photos/200/150",
      categoryId: 0,
    },
    {
      id: 6,
      name: "Nom matériel 3",
      brand: "Marque 3",
      image: "https://picsum.photos/200/150",
      categoryId: 1,
    },
    {
      id: 7,
      name: "Nom matériel",
      brand: "Marque",
      image: "https://picsum.photos/200/150",
      categoryId: 1,
    },
    {
      id: 8,
      name: "Nom matériel 2",
      brand: "Marque 2",
      image: "https://picsum.photos/200/150",
      categoryId: 0,
    },
    {
      id: 9,
      name: "Nom matériel 3",
      brand: "Marque 3",
      image: "https://picsum.photos/200/150",
      categoryId: 1,
    },
  ];
  const categories = [
    {
      id: 0,
      name: "casque VR",
    },
    {
      id: 1,
      name: "Ordinateur",
    },
    {
      id: 2,
      name: "Composant",
    },
  ];

  const [materials, setMaterials] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await client().get("materials");
      console.log("fetched Products", res);
      setMaterials(res);
      // return res.data.data;
    } catch (error) {
      console.log("error on products fetch", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  useEffect(() => {
    console.log(materials);
  }, [materials]);

  return (
    <div className="p-3 bg-[#FAFAFA]">
      <Navbar />
      <div id="wrapper" className="flex">
        <Sidebar />
        <main className="w-full flex flex-col">
          <div className="container grid grid-cols-3 gap-16 p-16">
            {dataFake.map((item) => {
              return (
                <Link to={"/product/" + item.id}>
                  {" "}
                  {/**A remplacer par un id */}
                  <ProductCard
                    name={item.name}
                    image={item.image}
                    brand={item.brand}
                  />
                </Link>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
