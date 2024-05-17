import { useEffect, useMemo } from "react";

const applicationId = "9JBW2RHC7JNJN8ZQ";
const sdkUrl = "https://sdk.nsureapi.com/sdk.js";
const partnerId = "DRIPXX";

export function CardPurchaseProtection() {
  const initializeScript = useMemo(() => {
    return `window.nSureAsyncInit = function(deviceId) {
              window.nSureSDK.init({
                appId: '${applicationId}',
                partnerId: '${partnerId}',
              });
            };`;
  }, []);

  useEffect(() => {
    const initializeScriptTag = document.createElement("script");
    initializeScriptTag.innerHTML = initializeScript;
    document.head.appendChild(initializeScriptTag);

    const sdkScriptTag = document.createElement("script");
    sdkScriptTag.src = sdkUrl;
    document.head.appendChild(sdkScriptTag);
    return () => {
      document.head.removeChild(sdkScriptTag);
      document.head.removeChild(initializeScriptTag);
    };
  }, [initializeScript]);

  return null;
}
