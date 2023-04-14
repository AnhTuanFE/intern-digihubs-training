import AdvertisingContent from "./AdvertisingContent/AdvertisingContent";
import ListClient from "./ListClient/ListClient";
import TypicalProduct from "./TypicalProduct/TypicalProduct";
import HelpBusiness from "./HelpBusiness/HelpBusiness";
import FooterStudio from "./FooterStudio/FooterStudio";
function StudioDesign() {
  return (
    <div>
      <AdvertisingContent />
      <ListClient />
      <HelpBusiness />
      <TypicalProduct />
      <FooterStudio />
    </div>
  );
}

export default StudioDesign;
