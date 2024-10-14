const price = (price) => {
    Number.prototype.format = function (n, x) {
      var re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\." : "$") + ")";
      return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, "g"), "$&,");
    };
    return price.format();
  };
  
  const listing = [
    {
      id: 1,
      title: "Apartment for rent",
      slug: "apartment-for-rent",
      price: price(350000),
      location: "Mombasa",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
      images: ["image2.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
      amenities: [
        "Air Conditioning",
        "Security System",
        "Parking Space",
        "Gym Room",
        "Free WIFI",
        "Fire Place",
      ],
      agent: {
        name: "Elizabeth Keen",
        image: "agent1.jpg",
      },
      features: {
        bedrooms: 3,
        status: true,
        garage: 1,
        elevator: true,
        kitchen: true,
      },
      address: {
        address: "Nairobi Westlands",
        county: "Nairobi",
        city: "Nairobi",
        street: "Tengecha St",
        area: "Nairobi",
      },
  
      featured: true,
      type: "rental",
      listedIn: "rentals",
      category: "Apartments",
    },
    {
      id: 2,
      title: "House for Sell",
      slug: "house-for-sell",
      price: price(25000),
      location: "Nakuru",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
      images: ["image8.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
      amenities: [
        "Air Conditioning",
        "Security System",
        "Parking Space",
        "Gym Room",
        "Free WIFI",
        "Fire Place",
      ],
      agent: {
        name: "Kevin Caster",
        image: "agent3.jpg",
      },
      features: {
        bedrooms: 3,
        status: true,
        garage: 1,
        elevator: true,
        kitchen: true,
      },
      address: {
        address: "Nairobi Westlands",
        county: "Kisumu",
        city: "Nairobi",
        street: "Tengecha St",
        area: "Nairobi",
      },
      featured: true,
      type: "rental",
      listedIn: "rentals",
      category: "Offices",
    },
    {
      id: 3,
      title: "Apartment In Nairobi",
      slug: "apartment-in-nairobi",
      price: price(31000),
      location: "Nairobi",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
      images: ["image7.jpg", "image3.jpg", "image2.jpg", "image8.jpg"],
      amenities: [
        "Air Conditioning",
        "Security System",
        "Parking Space",
        "Gym Room",
        "Free WIFI",
        "Fire Place",
      ],
      agent: {
        name: "Elizabeth Keen",
        image: "agent4.jpg",
      },
      features: {
        bedrooms: 3,
        status: true,
        garage: 1,
        elevator: true,
        kitchen: true,
      },
      address: {
        address: "Nairobi Westlands",
        county: "Mombasa",
        city: "Nairobi",
        street: "Tengecha St",
        area: "Nairobi",
      },
      featured: true,
      type: "rental",
      listedIn: "Sales",
      category: "Offices",
    },
    {
      id: 4,
      title: "Renovated House For Sale",
      slug: "renoveted-house-for-sale",
      price: price(35000),
      location: "Kisumu",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
      images: ["image4.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
      amenities: [
        "Air Conditioning",
        "Security System",
        "Parking Space",
        "Gym Room",
        "Free WIFI",
        "Fire Place",
      ],
      agent: {
        name: "Priscilla Frankson",
        image: "agent2.jpg",
      },
      features: {
        bedrooms: 3,
        status: true,
        garage: 1,
        elevator: true,
        kitchen: true,
      },
      address: {
        address: "Nairobi Westlands",
        county: "Kisii",
        city: "Nairobi",
        street: "Tengecha St",
        area: "Nairobi",
      },
      featured: true,
      type: "sale",
      listedIn: "Sales",
      category: "Houses",
    },
    {
      id: 5,
      title: "House in Nakuru",
      slug: "house-in-nakuru",
      price: price(35000),
      location: "Nairobi",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
      images: ["image2.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
      amenities: [
        "Air Conditioning",
        "Security System",
        "Parking Space",
        "Gym Room",
        "Free WIFI",
        "Fire Place",
      ],
      agent: {
        name: "Joram Davies",
        image: "agent1.jpg",
      },
      features: {
        bedrooms: 3,
        status: true,
        garage: 1,
        elevator: true,
        kitchen: true,
      },
      address: {
        address: "Nairobi Westlands",
        county: "Nairobi",
        city: "Nairobi",
        street: "Tengecha St",
        area: "Nairobi",
      },
      featured: true,
      type: "sale",
      listedIn: "Sales",
      category: "Retails",
    },
    {
      id: 6,
      title: "Apartment for rent",
      slug: "apartment-for-rent",
      price: price(35000),
      location: "Nairobi",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
      images: ["image2.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
      amenities: [
        "Air Conditioning",
        "Security System",
        "Parking Space",
        "Gym Room",
        "Free WIFI",
        "Fire Place",
      ],
      agent: {
        name: "Kevin Caster",
        image: "agent2.jpg",
      },
      features: {
        bedrooms: 10,
        status: true,
        garage: 1,
        elevator: true,
        kitchen: true,
      },
      address: {
        address: "Nairobi Westlands",
        county: "Nairobi",
        city: "Nairobi",
        street: "Tengecha St",
        area: "Nairobi",
      },
      featured: true,
      type: "sale",
      listedIn: "rentals",
      category: "Apartments",
    },
    {
      id: 7,
      title: "Offices for rent",
      slug: "offices-for-rent",
      price: price(35000),
      location: "Nairobi",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
      images: ["image2.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
      amenities: [
        "Air Conditioning",
        "Security System",
        "Parking Space",
        "Gym Room",
        "Free WIFI",
        "Fire Place",
      ],
      agent: {
        name: "Laura Ray",
        image: "agent1.jpg",
      },
      features: {
        bedrooms: 8,
        status: true,
        garage: 1,
        elevator: true,
        kitchen: true,
      },
      address: {
        address: "Nairobi Westlands",
        county: "Nairobi",
        city: "Nairobi",
        street: "Tengecha St",
        area: "Nairobi",
      },
      featured: true,
      type: "rental",
      listedIn: "rentals",
      category: "Houses",
    },
    {
      id: 8,
      title: "Apartment for rent",
      slug: "apartmen-for-rent",
      price: price(35000),
      location: "Nairobi",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
      images: ["image2.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
      amenities: [
        "Air Conditioning",
        "Security System",
        "Parking Space",
        "Gym Room",
        "Free WIFI",
        "Fire Place",
      ],
      agent: {
        name: "Elizabeth Keen",
        image: "agent4.jpg",
      },
      features: {
        bedrooms: 4,
        status: true,
        garage: 1,
        elevator: true,
        kitchen: true,
      },
      address: {
        address: "Nairobi Westlands",
        county: "Nairobi",
        city: "Nairobi",
        street: "Tengecha St",
        area: "Nairobi",
      },
      featured: true,
      type: "rental",
      listedIn: "rentals",
      category: "Houses",
    },
    {
      id: 9,
      title: "Apartment for rent",
      slug: "apartment-for-rent",
      price: price(35000),
      location: "Nairobi",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
      images: ["image2.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
      amenities: [
        "Air Conditioning",
        "Security System",
        "Parking Space",
        "Gym Room",
        "Free WIFI",
        "Fire Place",
      ],
      agent: {
        name: "Edward Johnson",
        image: "agent4.jpg",
      },
      features: {
        bedrooms: 3,
        status: true,
        garage: 1,
        elevator: true,
        kitchen: true,
      },
      address: {
        address: "Nairobi Westlands",
        county: "Nairobi",
        city: "Nairobi",
        street: "Tengecha St",
        area: "Nairobi",
      },
      featured: true,
      type: "sale",
      listedIn: "rentals",
      category: "Retails",
    },
  ];
  
  export default listing;