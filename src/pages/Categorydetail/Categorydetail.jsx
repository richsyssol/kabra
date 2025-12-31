import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  abstractprint,
  abstractprint1,
  banarasigeorgette,
  banarasigeorgette1,
  banarasikadhwa,
  banarasikadhwa1,
  banarasisorganza,
  banarasiorganza1,
  banarasiorganza2,
  banarasisilk,
  banarasisilk1,
  banarasisilk3,
  banarasitissue,
  banarasitissue1,
  banarasitissue2,
  banarasitussar,
  banarasitussar1,
  bandhanisarees,
  bandhanisarees1,
  chanderisaree,
  chanderisaree1,
  designerorganza,
  designerorganza1,
  designerprinted,
  designerprinted1,
  fancyweaving,
  fancyweaving1,
  festivewearsaree,
  festivewearsaree1,
  gadwalsilk,
  gadwalsilk1,
  haldisaree,
  haldisaree1,
  handloomsaree,
  handloomsaree1,
  handloomsilk,
  handloomsilk1,
  ikkat_patola,
  ikkat_patola1,
  kalamkarisilk,
  kalamkarisilk1,
  kalamkarisilk3,
  kanchipuram_half_fine,
  kanchipuram_half_fine2,
  kanchipuram_half_fine3,
  kanchipuramsaree,
  kanchipuramsaree1,
  kanchipuramsaree2,
  // kanchipuramsaree3,
  // kanchipuramsaree4,
  mehendisarees,
  paithanisaree,
  paithanisaree1,
  partywearsaree,
  partywearsaree1,
  patanpatola,
  puredesignerembroidery,
  puredesignerembroidery2,
  ready_to_wear,
  ready_to_wear1,
  readyblouse,
  readyblouse1,
  receptionsaree,
  receptionsaree1,
  silkprinted,
  silkprinted1,
  tussarembroiderysaree,
  tussarsilkprinted,
  tussarsilkprinted1,
  weddingsaree,
  weddingsaree1,
  //
  bandhanilehenga,
  bandhanilehenga1,
  bridallehenga,
  bridallehenga1,
  bridesmaids,
  bridesmaids1,
  croptoplehenga,
  croptoplehenga1,
  designerlehenga,
  designerlehenga1,
  engagementlehenga,
  engagementlehenga1,
  fishcutlehenga,
  fishcutlehenga1,
  mehendilehenga,
  mehendilehenga2,
  partywearlehenga,
  partywearlehenga1,
  receptionlehenga,
  receptionlehenga1,
  sangeetlehenga,
  sangeetlehenga1,
  weddinglehenga,
  weddinglehenga1,
  //
  anarkalidress,
  anarkalidress1,
  banarasisalwar,
  banarasisalwar1,
  bridalgowns,
  bridalgowns1,
  cottonsalwar,
  cottonsalwar1,
  embroideryunstitched,
  embroideryunstitched1,
  eveninglook,
  eveninglook1,
  indowestern,
  indowestern1,
  paithaniunstitched,
  paithaniunstitched1,
  palazzosuit,
  palazzosuit1,
  plussize,
  plussize1,
  readymade,
  readymade1,
  shararasuit,
  shararasuit1,
  straightcut,
  straightcut1,
} from "../../assets";
const categoryData = {
  sarees: {
    title: "Collection",
    description: "Premium silk sarees for all occasions.",

    subCategories: [
      {
        name: "Kanchipuram   Sarees",
        children: [
          {
            name: "Kanchipuram Silk Sarees",
            image: kanchipuramsaree,
            kanchipuramsaree1,
            kanchipuramsaree2,
          },

          {
            name: "Kanchipuram Pure Half Fine ",
            image: kanchipuram_half_fine,
            kanchipuram_half_fine2,
            kanchipuram_half_fine3,
          },
        ],
      },

      {
        name: "Banarsai Sarees",
        children: [
          {
            name: "Banarasi Silk Sarees",
            image: banarasisilk,
            banarasisilk1,
            banarasisilk3,
          },
          {
            name: "Banarasi Kadhwa Sarees",
            image: banarasikadhwa,
            banarasikadhwa1,
          },
          {
            name: "Banarasi Tussar Weaving",
            image: banarasitussar,
            banarasitussar1,
          },
          {
            name: "Banarasi Organza",
            image: banarasisorganza,
            banarasiorganza1,
            banarasiorganza2,
          },
          {
            name: "Banarasi Georgette Saree",
            image: banarasigeorgette,
            banarasigeorgette1,
          },
          {
            name: "Banarasi Tissue Saree",
            image: banarasitissue,
            banarasitissue1,
            banarasitissue2,
          },
        ],
      },

      {
        name: "Designer Sarees",
        children: [
          {
            name: "Pure Designer Embroidery Saree",
            image: puredesignerembroidery,
            puredesignerembroidery2,
          },
          {
            name: "Organza Sarees",
            image: designerorganza,
            designerorganza1,
          },
          {
            name: "Bandhani Sarees",
            image: bandhanisarees,
            bandhanisarees1,
          },
          {
            name: "Fancy Weaving Saree",
            image: fancyweaving,
            fancyweaving1,
          },
          {
            name: "Ready Blouse Sarees",
            image: readyblouse,
            readyblouse1,
          },
          {
            name: "Pure Tussar Embroidery Sarees",
            image: tussarembroiderysaree,
          },
          {
            name: "Ready To Wear Saree",
            image: ready_to_wear,
            ready_to_wear1,
          },
          {
            name: "Handloom Silk Embroidery Sarees",
            image: handloomsaree,
            handloomsaree1,
          },
        ],
      },

      {
        name: "Pure Handloom Silk Saree",
        children: [
          {
            name: "Handloom Sarees",
            image: handloomsilk,
            handloomsilk1,
          },
          {
            name: "Gadwal Silk",
            image: gadwalsilk,
            gadwalsilk1,
          },
          {
            name: "Paithani Sarees",
            image: paithanisaree,
            paithanisaree1,
          },
          {
            name: "Chanderi Saree",
            image: chanderisaree,
            chanderisaree1,
          },
          {
            name: "Ikkat & Patola Saree",
            image: ikkat_patola,
            ikkat_patola1,
          },
          {
            name: "Patan Patola",
            image: patanpatola,
          },
        ],
      },

      {
        name: "Printed Sarees",
        children: [
          {
            name: "Designer Printed Saree",
            image: designerprinted,
            designerprinted1,
          },
          {
            name: "Tussar Printed Saree",
            image: tussarsilkprinted,
            tussarsilkprinted1,
          },
          {
            name: "Kalamkari Silk Saree",
            image: kalamkarisilk,
            kalamkarisilk1,
            kalamkarisilk3,
          },
          {
            name: "Silk Printed Saree",
            image: silkprinted,
            silkprinted1,
          },
        ],
      },
      {
        name: "Occasion",
        children: [
          {
            name: "Wedding Saree",
            image: weddingsaree,
            weddingsaree1,
          },
          {
            name: "Festive Wear Saree",
            image: festivewearsaree,
            festivewearsaree1,
          },
          {
            name: "Party Wear Saree",
            image: partywearsaree,
            partywearsaree1,
          },
          {
            name: "Mehendi Sarees",
            image: mehendisarees,
          },
          {
            name: "Reception sarees",
            image: receptionsaree,
            receptionsaree1,
          },
          {
            name: "Abstract Print Sarees",
            image: abstractprint,
            abstractprint1,
          },
          {
            name: "Haldi Sarees",
            image: haldisaree,
            haldisaree1,
          },
        ],
      },
    ],
  },

  lehengas: {
    title: "collection",
    description: "Premium lehengas for all occasions.",

    subCategories: [
      {
        name: "Style",
        children: [
          {
            name: "Bridal Lehenga ",
            image: bridallehenga,
            bridallehenga1,
          },
          {
            name: "Designer Lehenga ",
            image: designerlehenga,
            designerlehenga1,
          },
          {
            name: "Bridesmaids Lehenga ",
            image: bridesmaids1,
            bridesmaids,
          },
          {
            name: "Crop Top Lehenga ",
            image: croptoplehenga,
            croptoplehenga1,
          },
          {
            name: "Bandhani Lehenga ",
            image: bandhanilehenga,
            bandhanilehenga1,
          },
          {
            name: "Fishcut Lehenga ",
            image: fishcutlehenga,
            fishcutlehenga1,
          },
        ],
      },

      {
        name: "Designer Lehenga",
        children: [
          {
            name: "Wedding Lehenga",
            image: weddinglehenga,
            weddinglehenga1,
          },
          {
            name: "Reception Lehenga",
            image: receptionlehenga,
            receptionlehenga1,
          },
          {
            name: "Party Wear Lehenga",
            image: partywearlehenga,
            partywearlehenga1,
          },
          {
            name: "Mehendi Lehenga",
            image: mehendilehenga,
            mehendilehenga2,
          },
          {
            name: "Sangeet Lehenga",
            image: sangeetlehenga,
            sangeetlehenga1,
          },
          {
            name: "Engagement Lehenga",
            image: engagementlehenga1,
            engagementlehenga,
          },
        ],
      },
    ],
  },

  salwarsuite: {
    title: "Collections",
    description: "Premium salwar suite for all occasions.",

    subCategories: [
      {
        name: "Style",
        children: [
          {
            name: "Readymade Suites",
            image: readymade,
            readymade1,
          },

          {
            name: "Anarkali ",
            image: anarkalidress,
            anarkalidress1,
          },
          {
            name: "Straight Cut Suit ",
            image: straightcut,
            straightcut1,
          },
          {
            name: "Sharara Suit ",
            image: shararasuit1,
            shararasuit,
          },
          {
            name: "Palazzo Suit ",
            image: palazzosuit,
            palazzosuit1,
          },
          {
            name: "Plus Size Salwar Kameez ",
            image: plussize,
            plussize1,
          },
          {
            name: "Indowestern ",
            image: indowestern,
            indowestern1,
          },
          {
            name: "Evening Look ",
            image: eveninglook,
            eveninglook1,
          },
          {
            name: "Bridal Gowns ",
            image: bridalgowns,
            bridalgowns1,
          },
        ],
      },

      {
        name: "Unstitched Salwars",
        children: [
          {
            name: "Embroidery Unstitched Salwars",
            image: embroideryunstitched1,
            embroideryunstitched,
          },
          {
            name: "Cotton Unstitched Salwars",
            image: cottonsalwar,
            cottonsalwar1,
          },
          {
            name: "Banarasi Unstitched Salwars",
            image: banarasisalwar,
            banarasisalwar1,
          },
          {
            name: "Paithani Unstitched Salwars",
            image: paithaniunstitched,
            paithaniunstitched1,
          },
        ],
      },
    ],
  },
};

export default function Categorydetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const data = categoryData[slug];

  const [selectedCategory, setSelectedCategory] = useState(
    data?.subCategories?.[0] || null
  );

  const [selectedSub, setSelectedSub] = useState(
    data?.subCategories?.[0]?.children?.[0] || null
  );

  if (!data) {
    return (
      <p className="text-center py-20 text-gray-600">Category not found</p>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-sm text-red-700">
        <button
          onClick={() => navigate("/")}
          className="text-red-700 hover:underline font-medium"
        >
          ← Home
        </button>
        <span>/</span>
        <span className="font-medium text-gray-800">{data.title}</span>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-900">{data.title}</h1>
      <div className="w-20 h-1 bg-amber-500 mt-3 mb-6"></div>
      <p className="max-w-2xl text-gray-600 mb-8">{data.description}</p>

      {/* 🔹 Main SubCategory Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        {data.subCategories.map((cat, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedCategory(cat);
              setSelectedSub(cat.children[0]);
            }}
            className={`px-4 py-2 rounded-full font-medium transition ${
              selectedCategory?.name === cat.name
                ? "bg-amber-900 text-white shadow"
                : "bg-white hover:bg-white text-black shadow-sm"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* 🔹 Inner SubCategory Buttons */}
      {selectedCategory && (
        <div className="flex flex-wrap gap-3 mb-8">
          {selectedCategory.children.map((sub, index) => (
            <button
              key={index}
              onClick={() => setSelectedSub(sub)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                selectedSub?.name === sub.name
                  ? "bg-orange-400 text-white"
                  : "bg-white hover:bg-white shadow-sm text-black"
              }`}
            >
              {sub.name}
            </button>
          ))}
        </div>
      )}

      {/* 🔹 Selected SubCategory Images */}
      {selectedSub && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.values(selectedSub)
            .filter((val) => typeof val === "string")
            .slice(1, 3)
            .map((img, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={img}
                  alt="category"
                  className="w-full h-72 object-cover"
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
