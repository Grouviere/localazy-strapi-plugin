import { useLocation } from "react-router-dom";
import getNav from "./get-nav";
import pluginId from "../../../pluginId";

export default (location = null) => {
  if (!location) {
    location = useLocation();
  }
  // segment after pluginId
  const pluginSegment = location.pathname.split(`/${pluginId}/`)[1];

  if (!pluginSegment) {
    return "";
  }
  const navigation = getNav();
  const currentNavItem = navigation.find((navItem) =>
    pluginSegment.includes(navItem.id)
  );

  return currentNavItem?.description || "";
};
