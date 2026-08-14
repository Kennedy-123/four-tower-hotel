
export interface Room {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  amenities: string[];
  description: string;
  capacity: number;
}

export const defaultRooms: Room[] = [
  {
    id: 1,
    name: "Signature Suite",
    category: "Luxury",
    price: 450,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80",
    amenities: ["King Bed", "City View", "Private Balcony", "Marble Bath"],
    description:
      "Indulge in ultimate luxury with our signature suite, featuring panoramic city views and premium amenities.",
    capacity: 5,
  },
  {
    id: 2,
    name: "Ocean View Room",
    category: "Premium",
    price: 320,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    amenities: ["Queen Bed", "Ocean View", "Spa Bath", "Work Desk"],
    description:
      "Wake up to breathtaking ocean views in our spacious premium room with modern elegance.",
    capacity: 2,
  },
  {
    id: 3,
    name: "Deluxe Garden Suite",
    category: "Deluxe",
    price: 280,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    amenities: ["Queen Bed", "Garden View", "Rain Shower", "Living Area"],
    description:
      "Experience serenity with lush garden views and refined comfort in our deluxe suite.",
    capacity: 3,
  },
  {
    id: 4,
    name: "Executive Room",
    category: "Business",
    price: 260,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    amenities: [
      "Twin Beds",
      "Executive Lounge",
      "Work Desk",
      "Business Center",
    ],
    description:
      "Perfect for business travelers with full work facilities and exclusive lounge access.",
    capacity: 2,
  },
  {
    id: 5,
    name: "Presidential Suite",
    category: "Platinum",
    price: 760,
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=80",
    amenities: ["King Bed", "Private Terrace", "Living Room", "Jacuzzi"],
    description:
      "A lavish suite with private terrace, spacious lounge, and dedicated concierge service.",
    capacity: 4,
  },
  {
    id: 6,
    name: "Junior Suite",
    category: "Superior",
    price: 340,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1800&q=80",
    amenities: ["King Bed", "City View", "Lounge Area", "Spa Access"],
    description:
      "A stylish suite offering modern comfort, a cozy lounge, and sweeping city views.",
    capacity: 2,
  },
  {
    id: 7,
    name: "Harbor View Room",
    category: "Panoramic",
    price: 380,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80",
    amenities: ["Queen Bed", "Harbor View", "Spa Bath", "Mini Bar"],
    description:
      "Enjoy sweeping harbor views from your luxurious room with soft finishes and premium service.",
    capacity: 2,
  },
];