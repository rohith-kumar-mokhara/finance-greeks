import React, { useEffect } from "react";
import "./tradingView.scss";

const TradingViewWidget: React.FC = () => {
  useEffect(() => {
    console.log("Embedding TradingView widget script...");
  
    if (!document.getElementById('tradingview-widget-script')) {
      const script = document.createElement("script");
      script.id = 'tradingview-widget-script';
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            {
              "proName": "FOREXCOM:SPXUSD",
              "title": "S&P 500 Index"
            },
            {
              "proName": "FOREXCOM:NSXUSD",
              "title": "US 100 Cash CFD"
            },
            {
              "proName": "FX_IDC:EURUSD",
              "title": "EUR to USD"
            },
            {
              "proName": "BITSTAMP:BTCUSD",
              "title": "Bitcoin"
            },
            {
              "proName": "BITSTAMP:ETHUSD",
              "title": "Ethereum"
            }
          ],
          "showSymbolLogo": true,
          "isTransparent": false,
          "displayMode": "adaptive",
          "colorTheme": "light",
          "locale": "en"
        }
      `;
  
      const container = document.getElementById("tradingview-widget-container");
      if (container) {
          container.appendChild(script);
      } else {
        console.error("Error: TradingView widget container not found.");
      }
    }
  
    return () => {
      console.log("Cleaning up TradingView widget script...");
      const existingScript = document.getElementById('tradingview-widget-script');
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);
  

  return (
    <div id="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default TradingViewWidget;
