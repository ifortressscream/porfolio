import React from "react";
import Facebook from "../../images/hack/facebook.png";
import LinkedIn from "../../images/hack/linkedin.png";
import GoogleColored from "../../images/hack/googlecolored.png";
import Paypal from "../../images/hack/paypal.png";
import Apple from "../../images/hack/apple.png";
import Amazon from "../../images/hack/amazon.png";
import Capital from "../../images/hack/capital-one.png";
import Microsoft from "../../images/hack/microsoft.png";
import Visa from "../../images/hack/visa.png";
import Accenture from "../../images/hack/accenture.png";

function FifthContent() {
  return (
    <div>
      <div class="mx-auto max-w-7xl">
        <div class="pb-10">
          <div class="flex justify-between">
            <div>
              <img class="w-48" src={Facebook} alt="" />
            </div>
            <div>
              <img class="w-48" src={LinkedIn} alt="" />
            </div>
            <div>
              <img class="w-48" src={GoogleColored} alt="" />
            </div>
            <div>
              <img class="w-48" src={Paypal} alt="" />
            </div>
            <div>
              <img class="w-48" src={Apple} alt="" />
            </div>
          </div>
          <div class="flex justify-between">
            <div>
              <img class="w-48" src={Amazon} alt="" />
            </div>
            <div>
              <img class="w-48" src={Capital} alt="" />
            </div>
            <div>
              <img class="w-48" src={Microsoft} alt="" />
            </div>
            <div>
              <img class="w-48" src={Visa} alt="" />
            </div>
            <div>
              <img class="w-48" src={Accenture} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FifthContent;
