"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import OfferList from "./OfferList";
// import axios from "axios";

const pricingData = [
  {
    id: "academy_membership",
    nickname: "Academy Membership",
    unit_amount: 500000, // 5,000 KES in cents
    currency: "KES",
    offers: [
      "Access to Elite Basketball & Football programs",
      "Licensed Coaching Team",
      "Tournament & Match Participation",
    ],
  },
];

const PricingBox = ({ product }) => {
  //   const handleSubscription = async (e) => {
  //     e.preventDefault();
  //     const { data } = await axios.post(
  //       "/api/payment",
  //       { priceId: product.id },
  //       { headers: { "Content-Type": "application/json" } }
  //     );
  //     window.location.assign(data);
  //   };

  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="relative z-10 mb-10 overflow-hidden rounded-xl bg-[#59098c] px-8 py-10 shadow-[0px_0px_40px_0px_rgba(0,0,0,0.08)] dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14">
          <span className="mb-5 block text-xl font-medium text-dark dark:text-white">
            {product.nickname}
          </span>

          <h2 className="mb-3 text-4xl font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]">
            <span className="text-xl font-medium">KES </span>
            {(product.unit_amount / 100).toLocaleString()}
            <span className="ml-1 text-base font-normal text-body-color dark:text-dark-6">
              / month
            </span>
          </h2>

          <p className="mb-8 text-base text-body-color dark:text-dark-6">
            + One-Time Registration Fee of <strong>KES 8,000</strong>
          </p>

          <div className="mb-[50px]">
            <h3 className="mb-5 text-lg font-medium text-dark dark:text-white">
              What’s Included
            </h3>
            <div className="mb-10">
              {product.offers.map((offer, i) => (
                <OfferList key={i} text={offer} />
              ))}
            </div>
          </div>

          <div className="w-full">
            <button
              // onClick={handleSubscription}
              className="inline-block w-full rounded-md bg-white px-7 py-3 text-center text-base font-bold text-[#59098C] transition duration-300 hover:bg-primary/90"
            >
              Join Now
            </button>
          </div>
        </div>

        <div>
          <span className="absolute left-0 top-0">
            <svg
              width="495"
              height="470"
              viewBox="0 0 495 470"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="55"
                cy="442"
                r="138"
                stroke="white"
                strokeOpacity="0.04"
                strokeWidth="50"
              />
              <circle
                cx="446"
                r="39"
                stroke="white"
                strokeOpacity="0.04"
                strokeWidth="20"
              />
              <path
                d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z"
                stroke="white"
                strokeOpacity="0.08"
                strokeWidth="12"
              />
            </svg>
          </span>
          <span className="absolute bottom-0 right-0">
            <svg
              width="493"
              height="470"
              viewBox="0 0 493 470"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="462"
                cy="5"
                r="138"
                stroke="white"
                strokeOpacity="0.04"
                strokeWidth="50"
              />
              <circle
                cx="49"
                cy="470"
                r="39"
                stroke="white"
                strokeOpacity="0.04"
                strokeWidth="20"
              />
              <path
                d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z"
                stroke="white"
                strokeOpacity="0.06"
                strokeWidth="13"
              />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
};

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            // subtitle="Pricing"
            title="Pricing"
            paragraph="Get started with a one-time registration and enjoy monthly access to professional sports training."
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {pricingData.map((product, i) => (
            <PricingBox key={i} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
