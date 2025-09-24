import React, { useState } from "react";
import "./LanguageCurrencyPopup.css";
import { TbWorld } from "react-icons/tb";

const LanguageCurrencyPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("language");

  // 40 languages
  const languages = [
    "English (US)",
    "English (UK)",
    "Español",
    "Français",
    "Deutsch",
    "Italiano",
    "Português",
    "Nederlands",
    "Svenska",
    "Norsk",
    "Dansk",
    "Polski",
    "Türkçe",
    "Ελληνικά",
    "Русский",
    "Українська",
    "Čeština",
    "Slovenčina",
    "Magyar",
    "Română",
    "Hrvatski",
    "Български",
    "עברית",
    "العربية",
    "فارسی",
    "ไทย",
    "Bahasa Indonesia",
    "Bahasa Melayu",
    "Tagalog",
    "Tiếng Việt",
    "Afrikaans",
    "Suomi",
    "Íslenska",
    "Eesti",
    "Latviešu",
    "Lietuvių",
    "Filipino",
    "Kazakh",
    "Mongolian",
    "Kurdish",
  ];

  // 40 currencies
  const currencies = [
    "USD – US Dollar",
    "EUR – Euro",
    "GBP – British Pound",
    "JPY – Japanese Yen",
    "CNY – Chinese Yuan",
    "AUD – Australian Dollar",
    "CAD – Canadian Dollar",
    "CHF – Swiss Franc",
    "SEK – Swedish Krona",
    "NOK – Norwegian Krone",
    "DKK – Danish Krone",
    "PLN – Polish Zloty",
    "TRY – Turkish Lira",
    "RUB – Russian Ruble",
    "KRW – South Korean Won",
    "INR – Indian Rupee",
    "BRL – Brazilian Real",
    "MXN – Mexican Peso",
    "ZAR – South African Rand",
    "NZD – New Zealand Dollar",
    "SGD – Singapore Dollar",
    "HKD – Hong Kong Dollar",
    "MYR – Malaysian Ringgit",
    "THB – Thai Baht",
    "PHP – Philippine Peso",
    "AED – UAE Dirham",
    "SAR – Saudi Riyal",
    "EGP – Egyptian Pound",
    "KWD – Kuwaiti Dinar",
    "QAR – Qatari Riyal",
    "OMR – Omani Rial",
    "BHD – Bahraini Dinar",
    "IDR – Indonesian Rupiah",
    "PKR – Pakistani Rupee",
    "BDT – Bangladeshi Taka",
    "NGN – Nigerian Naira",
    "KES – Kenyan Shilling",
    "ARS – Argentine Peso",
    "CLP – Chilean Peso",
    "COP – Colombian Peso",
  ];

  const closePopup = () => setIsOpen(false);

  const renderHeaderTitle = () => {
    return activeTab === "language"
      ? "Select your language"
      : "Select your currency";
  };

  return (
    <>
      <button className="popup-toggle" onClick={() => setIsOpen(true)}>
        <TbWorld size={24} color="var(--color-gray-muted)" />
      </button>

      {isOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-button"
              onClick={closePopup}
              aria-label="Close"
            >
              &times;
            </button>

            <div className="popup-tabs">
              <button
                className={activeTab === "language" ? "active" : ""}
                onClick={() => setActiveTab("language")}
              >
                Language
              </button>
              <button
                className={activeTab === "currency" ? "active" : ""}
                onClick={() => setActiveTab("currency")}
              >
                Currency
              </button>
            </div>

            <h2 className="popup-title">{renderHeaderTitle()}</h2>

            <div className="popup-content">
              {activeTab === "language" ? (
                <ul>
                  {languages.map((lang, i) => (
                    <li key={i}>{lang}</li>
                  ))}
                </ul>
              ) : (
                <ul>
                  {currencies.map((cur, i) => (
                    <li key={i}>{cur}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LanguageCurrencyPopup;
