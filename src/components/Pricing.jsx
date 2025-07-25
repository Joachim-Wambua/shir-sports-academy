"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import OfferList from "./OfferList";
import Link from "next/link";

const pricingData = [
  {
    id: "academy_membership",
    nickname: "Academy Membership",
    unit_amount: 500000,
    currency: "KES",
    offers: [
      "Access to Elite Basketball & Football programs",
      "Licensed Coaching Team",
      "Tournament & Match Participation",
    ],
  },
];

const PricingBox = ({ product }) => (
  <div className="flex justify-center w-full px-4">
    <div className="relative z-10 mb-10 overflow-hidden rounded-xl bg-[#59098c] px-8 py-10 shadow-lg sm:p-12 lg:px-6 lg:py-10 xl:p-14">
      <h3 className="mb-2 text-xl font-medium text-white">
        {product.nickname}
      </h3>
      <h2 className="text-4xl font-semibold text-white">
        KES {(product.unit_amount / 100).toLocaleString()}
        <span className="text-base font-normal ml-1">/ month</span>
      </h2>
      <p className="mt-2 text-white">
        + One-Time Registration Fee of <strong>KES 8,000</strong>
      </p>

      <div className="mt-6">
        <h4 className="text-white font-semibold mb-3">What’s Included</h4>
        <ul className="space-y-2">
          {product.offers.map((offer, i) => (
            <OfferList key={i} text={offer} />
          ))}
        </ul>
      </div>

      <Link
        href="/contact"
        className="mt-6 block text-center w-full rounded-md bg-white px-7 py-3 font-bold text-[#59098C] hover:bg-primary/90"
      >
        Join Now
      </Link>
    </div>
  </div>
);

const Pricing = () => (
  <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
    <div className="container mx-auto px-4">
      <SectionTitle
        title="Pricing"
        paragraph="Get started with a one-time registration and enjoy monthly access to professional sports training."
        center
      />
      <div className="flex justify-center flex-wrap -mx-4">
        {pricingData.map((product, i) => (
          <PricingBox key={i} product={product} />
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
