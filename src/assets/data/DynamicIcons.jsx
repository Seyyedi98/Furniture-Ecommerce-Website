/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import serviceDate from "./serviceData";

const icons = serviceDate.map((item) => item.icon);
const obj = { ...icons };

import {
  RiTruckLine,
  RiRefreshLine,
  RiSecurePaymentLine,
  RiExchangeDollarLine,
} from "react-icons/ri";

const components = {
  RiTruckLine,
  RiRefreshLine,
  RiSecurePaymentLine,
  RiExchangeDollarLine,
};

export const DynamicIcons = ({ type }) => {
  const Icon = components[type];
  return <Icon></Icon>;
};

export default DynamicIcons;
