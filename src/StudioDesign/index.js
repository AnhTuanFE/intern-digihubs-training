import * as studioComponents from "./studioComponents";
import FooterStudio from "./studioLayouts/componentsStudio/FooterStudio/FooterStudio";

function StudioDesign() {
  return (
    <div>
      <studioComponents.AdvertisingContent />
      <studioComponents.ListClient />
      <studioComponents.HelpBusiness />
      <studioComponents.TypicalProduct />
      <FooterStudio />
    </div>
  );
}

export default StudioDesign;
