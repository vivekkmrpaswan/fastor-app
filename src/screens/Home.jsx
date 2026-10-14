import { useNavigate } from "react-router-dom";
import StatusBar from "../components/StatusBar";
import { PhoneIcon, WalletIcon } from "../components/Icons";
import { images } from "../assets/images";

const bestSellers = [
  { img: images.sushi, price: "$103.0" },
  { img: images.curry, price: "$50.0" },
  { img: images.lasagna, price: "$12.99" },
  { img: images.cupcake, price: "$8.20" },
];

const popular = [
  {
    img: images.shake,
    name: "Strawberry Shake",
    price: "₹20.00",
    date: "29 Nov, 01:20 pm",
    items: "2 items",
  },
  {
    img: images.burger,
    name: "Chicken Burger",
    price: "₹20.00",
    date: "17 Oct, 01:20 pm",
    items: "1 item",
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="phone">
      <StatusBar />

      <div className="px-5 pb-[6px] shrink-0 border-b border-gray-200">
        <p className="text-[11px] text-subtle">Current Locations</p>
        <p className="text-[12px] font-medium mt-[6px] text-[#000000]">
          Model Town, New Delhi
        </p>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 pb-6">
        {/* Greeting + actions */}
        <div className="mt-[12px] flex items-center gap-[10px]">
          <div className="flex-1 h-[48px] rounded-t-[14px] rounded-b-[18px] bg-field px-4 flex items-center text-[18px] text-gray-600">
            Karan
          </div>
          <button
            type="button"
            aria-label="Call"
            className="w-[48px] h-[48px] rounded-[8px] bg-[#ff7a5c] text-white flex items-center justify-center"
          >
            <PhoneIcon className="w-[24px] h-[24px]" />
          </button>
          <button
            type="button"
            aria-label="Wallet"
            className="w-[48px] h-[48px] rounded-[8px] bg-[#4a9dea] text-white flex items-center justify-center"
          >
            <WalletIcon className="w-[24px] h-[24px]" />
          </button>
        </div>

        {/* Best seller */}
        <h2 className="mt-[26px] ml-1 text-[20px] font-semibold text-[#391713]">
          Best Seller
        </h2>
        <div className="mt-[10px] grid grid-cols-4 gap-[7px]">
          {bestSellers.map((b) => (
            <button
              key={b.price}
              type="button"
              onClick={() => navigate("/product")}
              className="relative aspect-72/100"
            >
              <img
                src={b.img}
                alt=""
                className="block w-full h-full object-cover rounded-[20px]"
              />
              <span className="absolute bottom-4 -right-[1.3px] bg-brand text-white text-[10px] px-[6px] py-[1px] rounded-l-[30px]">
                {b.price}
              </span>
            </button>
          ))}
        </div>

        {/* Promo banner */}
        <div className="mt-[10px] relative h-[128px] rounded-[14px] overflow-hidden bg-brand flex">
          <div className="relative z-10 w-[48%] pl-4 pt-[26px] text-white">
            <p className="text-[14px] leading-[14px] font-light">
              Experience our
              <br />
              delicious new dish
            </p>
            <p className="mt-[8px] text-[32px] leading-[34px] font-extrabold">
              30% OFF
            </p>
          </div>
          <img
            src={images.pizza}
            alt=""
            className="absolute right-0 top-0 h-full w-[52%] object-cover"
          />
          <span className="absolute -top-[14px] left-[56%] w-[48px] h-[28px] rounded-b-full border-[5px] border-[#ffb400] border-t-0" />
          <span className="absolute -bottom-[10px] -left-[10px] w-[26px] h-[26px] rounded-full border-[5px] border-[#ffb400]" />
        </div>
        <div className="mt-[6px] flex justify-center gap-[6px]">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className={`h-[3px] w-[18px] rounded-full ${i === 2 ? "bg-brand" : "bg-[#ffe3a0]"}`}
            />
          ))}
        </div>

        {/* Popular items */}
        <h2 className="mt-[40px] ml-1 text-[17px] font-semibold text-[#391713]">
          Popular Items
        </h2>
        <div className="mt-[10px]">
          {popular.map((p, i) => (
            <div
              key={p.name}
              onClick={() => navigate("/product")}
              className={`flex gap-3 py-[10px] cursor-pointer ${i > 0 ? "border-t border-[#FFD8C7]" : ""}`}
            >
              <img
                src={p.img}
                alt=""
                className="w-[72px] h-[108px] rounded-[10px] object-cover shrink-0"
              />
              <div className="flex-1 pt-[14px]">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-[20px] font-medium text-[#391713]">{p.name}</h3>
                  <span className="text-[20px] font-medium text-brand-muted">
                    {p.price}
                  </span>
                </div>
                <div className="flex justify-between mt-[2px] text-[14px] text-[#391713]">
                  <span>{p.date}</span>
                  <span>{p.items}</span>
                </div>
                <div className="mt-[10px] flex justify-between">
                  <button
                    type="button"
                    className="h-[26px] px-[14px] rounded-full bg-brand text-white text-[13px] font-semibold"
                  >
                    Cancel Order
                  </button>
                  <button
                    type="button"
                    className="h-[26px] px-[14px] rounded-full bg-brand-soft text-brand-muted text-[13px] font-semibold"
                  >
                    Track Driver
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
