import React from "react";
import { PricingTable, PricingSlot, PricingDetail } from "react-pricing-table";

const Pricing = () => {
  return (
    <PricingTable highlightColor="#1976D2">
      <PricingSlot
        highlighted
        // onClick={this.submit}
        buttonText="SIGN UP"
        title="BASIC"
        priceText="$24/month"
      >
        <PricingDetail>
          {" "}
          <b>35</b> projects
        </PricingDetail>
        <PricingDetail>
          {" "}
          <b>15 GB</b> storage
        </PricingDetail>
        <PricingDetail>
          {" "}
          <b>Unlimited</b> users
        </PricingDetail>
        <PricingDetail>
          {" "}
          <b>Time tracking</b>
        </PricingDetail>
      </PricingSlot>
      <PricingSlot buttonText="SIGN UP" title="Premium" priceText="5000/month">
        <PricingDetail>
          <b>24X7</b> open
        </PricingDetail>
        <PricingDetail>
          <b>Personal</b> Coach
        </PricingDetail>
        <PricingDetail>
          <b>No time Restriction</b>
        </PricingDetail>
        <PricingDetail>
          {" "}
          <b>Time tracking</b>
        </PricingDetail>
      </PricingSlot>
    </PricingTable>
  );
};

export default Pricing;
