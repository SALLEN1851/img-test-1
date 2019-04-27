/* define: window, document */
'use strict';

// using namespaces:
var app = app || {};

app.Model = app.Model || {};
app.Views = app.Views || {};
app.Controller = app.Controller || {};

app.Init = app.Init || {};

app.Data = app.Data || {};
app.vars = app.vars || {};

app.Init = function() {

  var baseURL = 'https://wavecel.trekbikes.com';

  app.Model.GetLocaleData(baseURL + '/assets/data/all-markets.json')
};

document.addEventListener('DOMContentLoaded', app.Init);

/* define: window, document */
'use strict';

// using namespaces:
var app = app || {};
app.Screens = app.Screens || {};
app.Init = app.Init || {};
app.Data = app.Data || {};
app.vars = app.vars || {};

app.vars = {
  // Init Level Objects.
  'inProduction': true,
  'language': navigator.language.replace('-', '_'),
  'pplConcuss': 100,
  'epsConcuss': 59,
  'wcConcuss': 1,
  'constructionBP': 1024,
  'sectionIDs': {
    'mainPage': 'MainPage',
    'globalSection': {
      'link': 'HomeURL',
      'langSel': 'LangSelBtn'
    },
    'heroSection': {
      'headline': 'HeroHeading',
      'description': 'HeroDescription',
      'playBtn': 'HeroVideoBtn',
      'shopBtn': 'HeroShopBtn'
    },
    'videoSection': {
      'headline': 'VideoHeading',
      'description': 'VideoDescription',
      'disclaimer': 'VideoDisclaimer',
      'playBtn': 'PlayInfoVideo',
      'learnBtn': 'VideoLearn',
      'videoImg': 'VideoImg',
      'videoContainer': 'VideoImageContainer',
      'modal': {
        'modalVideo': 'ModalVideo',
        'videoModal': 'VideoModal',
        'closeModal': 'VideoModalClose',
        'youtubeID': 'Dy15UTG6gbw'
      }
    },
    'revealSection': {
      'heading': 'RevealHeading',
      'revealLeft': 'RevealLeft',
      'revealRight': 'RevealRight',
      'helmetSlider': 'HelmetSlider',
      'revealSlide': 'RevealSlide',
      'revealImage': 'RevealImage'
    },
    'highlightSection': {
      'highlightHeading': 'HighlightHeading',
      'highlightDescription': 'HighlightDescription',
      'shearHeading': 'ShearHeading',
      'shearDescription': 'ShearDescription',
      'crumpleHeading': 'CrumpleHeading',
      'crumpleDescription': 'CrumpleDescription',
      'glideHeading': 'GlideHeading',
      'glideDescription': 'GlideDescription'
    },
    'productSection': {
      'waveCelXXXImage': 'WaveCelXXXImage',
      'waveCelXXXLabel': 'WaveCelXXXLabel',
      'waveCelSpecterImage': 'WaveCelSpecterImage',
      'waveCelSpecterLabel': 'WaveCelSpecterLabel',
      'waveCelBlazeImage': 'WaveCelBlazeImage',
      'waveCelBlazeLabel': 'WaveCelBlazeLabel',
      'waveCelChargeImage': 'WaveCelChargeImage',
      'waveCelChargeLabel': 'WaveCelChargeLabel'
    },
    'infographicSection': {
      'infographicHeading': 'InfographicHeading',
      'infographicDescription': 'InfographicDescription',
      'concussionsEPS': 'ConcussionsEPS',
      'concussionsEPSLabel': 'ConcussionsEPSLabel',
      'concussionsWaveCel': 'ConcussionsWaveCel',
      'concussionsWaveCelLabel': 'ConcussionsWaveCelLabel'
    },
    'illustrationSection': {
      'illustrationHeading': 'IllustrationHeading',
      'illustrationDescription': 'IllustrationDescription',
      'illustrationDisclaimerDesk': 'IllustrationDisclaimerDesk',
      'illustrationDisclaimerMobile': 'IllustrationDisclaimerMobile',
      'illustrationFoamHead': 'IllustrationFoamHead',
      'illustrationFoamLabel': 'IllustrationFoamLabel',
      'illustrationWCHead': 'IllustrationWCHead',
      'illustrationWCLabel': 'IllustrationWCLabel'
    },
    'constructionSection': {
      'constructHeading': 'ConstructionHeading',
      'construct1': 'Construct1',
      'construct1H': 'Construct1H',
      'construct1D': 'Construct1D',
      'construct2': 'Construct2',
      'construct2H': 'Construct2H',
      'construct2D': 'Construct2D',
      'construct3': 'Construct3',
      'construct3H': 'Construct3H',
      'construct3D': 'Construct3D'
    },
    'calloutSection': {
      'callDescription1': 'CallDescription1',
      'callDescription2': 'CallDescription2',
      'callDescription3': 'CallDescription3'
    },
    'collageSection': {
      'collage1': 'Collage1',
      'collage2': 'Collage2'
    },
    'shopSection': {
      'shopImage': 'ShopImage',
      'shopHeading': 'ShopHeading',
      'shopDescription': 'ShopDescription',
      'shopBtn': 'ShopBtn'
    },
    'footerSection': {
      'footerText': 'FooterText',
      'footerHash': 'FooterHash',
      'footerCopyright': 'Copyright'
    }
  },
  'supportedLocales': {
    'Česká Republika': 'cs_CZ',
    'Danmark': 'da_DK',
    'Österreich': 'de_AT',
    'Schweiz (Deutsch)': 'de_CH',
    'Deutschland': 'de_DE',
    'Australia': 'en_AU',
    'Canada (English)': 'en_CA',
    'United Kingdom': 'en_GB',
    'Ireland': 'en_IE',
    'English (International)': 'en',
    'India': 'en_IN',
    'New Zealand': 'en_NZ',
    'United States': 'en_US',
    'South Africa': 'en_ZA',
    'España': 'es_ES',
    'Español (Internacional)': 'es' ,
    'México': 'es_MX',
    'Suomi ': 'fi_FI',
    'Belgique (Français) ': 'fr_BE',
    'Canada (Français) ': 'fr_CA',
    'Suisse (Français) ': 'fr_CH',
    'France ': 'fr_FR',
    'Luxembourg (Français)': 'fr_LU',
    'Italia': 'it_IT',
    '日本 ': 'ja_JP',
    '대한민국 (한국어) ': 'ko_KR',
    'België (Nederlands) ': 'nl_BE',
    'Nederland ': 'nl_NL',
    'Norge ': 'no_NO',
    'Polska ': 'pl_PL',
    'Brazil': 'pt_BR',
    'Portugal': 'pt_PT',
    'Sverige': 'sv_SE',
    '中国': 'zh_CN'
  },
  "countySelection": {
    "heading": "Country or region/language selector",
    "AfricaMiddleEast": {
      "heading": "Africa \u0026 Middle East",
      "countries": [
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_bh",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Bahrain"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_il",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Israel"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_jo",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Jordan"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_kw",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Kuwait"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_lb",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Lebanon"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_mu",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Mauritius"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_om",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Oman"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_qa",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Qatar"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_sa",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Saudi Arabia"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_za",
          "countryCode": "za",
          "languageCode": "/en_ZA",
          "langLink": "/za/en_ZA/?clear=true",
          "name": "South Africa"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_ae",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "United Arab Emirates"
        }
      ]
    },
    "Americas": {
      "heading": "Americas",
      "countries": [
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_ar",
          "countryCode": "ar",
          "languageCode": "/es_IN_TL",
          "langLink": "/ar/es_IN_TL/?clear=true",
          "name": "Argentina"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_aw",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Aruba"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_bb",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Barbados"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_bm",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Bermuda"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_br",
          "countryCode": "br",
          "languageCode": "/pt_BR",
          "langLink": "/br/pt_BR/?clear=true",
          "name": "Brasil"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_ca",
          "countryCode": "ca",
          "languageCode": "/en_CA",
          "langLink": "/ca/en_CA/?clear=true",
          "name": "Canada (English)"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_ca",
          "countryCode": "ca",
          "languageCode": "/fr_CA",
          "langLink": "/ca/fr_CA/?clear=true",
          "name": "Canada (Français)"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_ky",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Cayman Islands"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_cl",
          "countryCode": "internationalspanish",
          "languageCode": "/es_IN_TL",
          "langLink": "/internationalspanish/es_IN_TL/?clear=true",
          "name": "Chile"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_co",
          "countryCode": "internationalspanish",
          "languageCode": "/es_IN_TL",
          "langLink": "/internationalspanish/es_IN_TL/?clear=true",
          "name": "Colombia"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_cr",
          "countryCode": "internationalspanish",
          "languageCode": "/es_IN_TL",
          "langLink": "/internationalspanish/es_IN_TL/?clear=true",
          "name": "Costa Rica"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_do",
          "countryCode": "internationalspanish",
          "languageCode": "/es_IN_TL",
          "langLink": "/internationalspanish/es_IN_TL/?clear=true",
          "name": "Dominican Republic"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_ec",
          "countryCode": "internationalspanish",
          "languageCode": "/es_IN_TL",
          "langLink": "/internationalspanish/es_IN_TL/?clear=true",
          "name": "Ecuador"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_sv",
          "countryCode": "internationalspanish",
          "languageCode": "/es_IN_TL",
          "langLink": "/internationalspanish/es_IN_TL/?clear=true",
          "name": "El Salvador"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_gt",
          "countryCode": "internationalspanish",
          "languageCode": "/es_IN_TL",
          "langLink": "/internationalspanish/es_IN_TL/?clear=true",
          "name": "Guatemala"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_hn",
          "countryCode": "internationalspanish",
          "languageCode": "/es_IN_TL",
          "langLink": "/internationalspanish/es_IN_TL/?clear=true",
          "name": "Honduras"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_jm",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Jamaica"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_mx",
          "countryCode": "mx",
          "languageCode": "/es_MX",
          "langLink": "/mx/es_MX/?clear=true",
          "name": "México"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_pa",
          "countryCode": "internationalspanish",
          "languageCode": "/es_IN_TL",
          "langLink": "/internationalspanish/es_IN_TL/?clear=true",
          "name": "Panama"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_py",
          "countryCode": "internationalspanish",
          "languageCode": "/es_IN_TL",
          "langLink": "/internationalspanish/es_IN_TL/?clear=true",
          "name": "Paraguay"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_pe",
          "countryCode": "internationalspanish",
          "languageCode": "/es_IN_TL",
          "langLink": "/internationalspanish/es_IN_TL/?clear=true",
          "name": "Peru"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_pr",
          "countryCode": "internationalspanish",
          "languageCode": "/es_IN_TL",
          "langLink": "/internationalspanish/es_IN_TL/?clear=true",
          "name": "Puerto Rico"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_an",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "St. Maarten, NA"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_sr",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Suriname"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_vg",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Tortola, British Virgin Islands"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_tt",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Trinidad"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_tc",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Turks and Caicos"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_vi",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "U.S.V.I."
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_us",
          "countryCode": "us",
          "languageCode": "/en_US",
          "langLink": "/us/en_US/?clear=true",
          "name": "United States"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_uy",
          "countryCode": "internationalspanish",
          "languageCode": "/es_IN_TL",
          "langLink": "/internationalspanish/es_IN_TL/?clear=true",
          "name": "Uruguay"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_ve",
          "countryCode": "internationalspanish",
          "languageCode": "/es_IN_TL",
          "langLink": "/internationalspanish/es_IN_TL/?clear=true",
          "name": "Venezuela"
        }
      ]
    },
    "AsiaPacific": {
      "heading": "Asia Pacific",
      "countries": [
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_am",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Armenia"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_au",
          "countryCode": "au",
          "languageCode": "/en_AU",
          "langLink": "/au/en_AU/?clear=true",
          "name": "Australia"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_az",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Azerbaijan"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_bn",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Brunei"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_pf",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "French Polynesia"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_ge",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Georgia"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_gu",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Guam"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_globe3",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Hong Kong"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_in",
          "countryCode": "in",
          "languageCode": "/en_IN",
          "langLink": "/in/en_IN/?clear=true",
          "name": "India"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_id",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Indonesia"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_kz",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Kazakhstan"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_my",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Malaysia"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_mn",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Mongolia"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_mm",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Myanmar"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_np",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Nepal"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_nc",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "New Caledonia"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_nz",
          "countryCode": "nz",
          "languageCode": "/en_NZ",
          "langLink": "/nz/en_NZ/?clear=true",
          "name": "New Zealand"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_mp",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Northern Mariana Islands"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_ph",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Philippines"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_ru",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Russia"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_sg",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Singapore"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_lk",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Sri Lanka"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_globe3",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Taiwan"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_th",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Thailand"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_vn",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Vietnam"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_kr",
          "countryCode": "kr",
          "languageCode": "/ko_KR",
          "langLink": "/kr/ko_KR/?clear=true",
          "name": "대한민국 (한국어)"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_cn",
          "countryCode": "cn",
          "languageCode": "/zh_CN",
          "langLink": "/cn/zh_CN/?clear=true",
          "name": "中国"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_jp",
          "countryCode": "jp",
          "languageCode": "/ja_JP",
          "langLink": "/jp/ja_JP/?clear=true",
          "name": "日本"
        }
      ]
    },
    "Europe": {
      "heading": "Europe",
      "countries": [
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_by",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Belarus"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_be",
          "countryCode": "be",
          "languageCode": "/fr_BE",
          "langLink": "/be/fr_BE/?clear=true",
          "name": "Belgique (Français)"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_be",
          "countryCode": "be",
          "languageCode": "/nl_BE",
          "langLink": "/be/nl_BE/?clear=true",
          "name": "België (Nederlands)"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_bg",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Bulgaria"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_hr",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Croatia"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_cy",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Cyprus"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_cz",
          "countryCode": "cz",
          "languageCode": "/cs_CZ",
          "langLink": "/cz/cs_CZ/?clear=true",
          "name": "Česká Republika"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_dk",
          "countryCode": "dk",
          "languageCode": "/da_DK",
          "langLink": "/dk/da_DK/?clear=true",
          "name": "Danmark"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_de",
          "countryCode": "de",
          "languageCode": "/de_DE",
          "langLink": "/de/de_DE/?clear=true",
          "name": "Deutschland"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_es",
          "countryCode": "es",
          "languageCode": "/es_ES",
          "langLink": "/es/es_ES/?clear=true",
          "name": "España"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_ee",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Estonia"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_fr",
          "countryCode": "fr",
          "languageCode": "/fr_FR",
          "langLink": "/fr/fr_FR/?clear=true",
          "name": "France"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_gr",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Greece"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_hu",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Hungary"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_is",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Iceland"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_ie",
          "countryCode": "ie",
          "languageCode": "/en_IE",
          "langLink": "/ie/en_IE/?clear=true",
          "name": "Ireland"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_it",
          "countryCode": "it",
          "languageCode": "/it_IT",
          "langLink": "/it/it_IT/?clear=true",
          "name": "Italia"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_lv",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Latvia"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_lt",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Lithuania"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_lu",
          "countryCode": "lu",
          "languageCode": "/fr_LU",
          "langLink": "/lu/fr_LU/?clear=true",
          "name": "Luxembourg"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_mk",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Macedonia"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_nl",
          "countryCode": "nl",
          "languageCode": "/nl_NL",
          "langLink": "/nl/nl_NL/?clear=true",
          "name": "Nederland"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_no",
          "countryCode": "no",
          "languageCode": "/no_NO",
          "langLink": "/no/no_NO/?clear=true",
          "name": "Norge"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_at",
          "countryCode": "at",
          "languageCode": "/de_AT",
          "langLink": "/at/de_AT/?clear=true",
          "name": "Österreich"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_pl",
          "countryCode": "pl",
          "languageCode": "/pl_PL",
          "langLink": "/pl/pl_PL/?clear=true",
          "name": "Polska"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_pt",
          "countryCode": "pt",
          "languageCode": "/pt_PT",
          "langLink": "/pt/pt_PT/?clear=true",
          "name": "Portugal"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_ro",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Romania"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_ch",
          "countryCode": "ch",
          "languageCode": "/de_CH",
          "langLink": "/ch/de_CH/?clear=true",
          "name": "Schweiz (Deutsch)"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_ch",
          "countryCode": "ch",
          "languageCode": "/fr_CH",
          "langLink": "/ch/fr_CH/?clear=true",
          "name": "Suisse (Français)"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_rs",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Serbia"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_sk",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Slovakia"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_si",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Slovenia"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_fi",
          "countryCode": "fi",
          "languageCode": "/fi_FI",
          "langLink": "/fi/fi_FI/?clear=true",
          "name": "Suomi"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_se",
          "countryCode": "se",
          "languageCode": "/sv_SE",
          "langLink": "/se/sv_SE/?clear=true",
          "name": "Sverige"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_tr",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Turkey"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_ua",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "Ukraine"
        },
        {
          "flag": "//trek.scene7.com/is/image/TrekBicycleProducts/region_gb",
          "countryCode": "gb",
          "languageCode": "/en_GB",
          "langLink": "/gb/en_GB/?clear=true",
          "name": "United Kingdom"
        }
      ]
    },
    "International": {
      "countries": [
        {
          "flag": "//trekcdnprod.azureedge.net/hybris/prod/_ui/desktop/theme-trek/images/globe.png",
          "countryCode": "internationalspanish",
          "languageCode": "/es_IN_TL",
          "langLink": "/internationalspanish/es_IN_TL/?clear=true",
          "name": "América Latina (Español)"
        },
        {
          "flag": "//trekcdnprod.azureedge.net/hybris/prod/_ui/desktop/theme-trek/images/globe.png",
          "countryCode": "international",
          "languageCode": "/en_IN_TL",
          "langLink": "/international/en_IN_TL/?clear=true",
          "name": "International (English)"
        }
      ]
    }
  }
};

/* define: window, document */
'use strict';

// using namespaces:
var app = app || {};
app.Data = app.Data || {};
app.vars = app.vars || {};

app.Views = app.Views || {};

app.Views.CreateYouTubeHero = function(ytID, vidID, vidH, vidW, vidArgs) {
  var scriptID = 'ytAPI';
  var ytAPI = document.getElementById(scriptID);

  if (!ytAPI) {
    var tag = document.createElement('script');
    tag.id = scriptID;
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  var player;
  window.onYouTubeIframeAPIReady = function() {
    console.log('Made it to YouTube.');
    player = new YT.Player(vidID, {
      height: vidH,
      width: vidW,
      videoId: ytID,
      playerVars: vidArgs,
      setPlaybackQuality: 'highres',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  function onPlayerStateChange(event) {
    event.target.playVideo();
  }
};

/* define: window, document */
'use strict';

// using namespaces:
var app = app || {};
app.Data = app.Data || {};
app.vars = app.vars || {};

app.Views = app.Views || {};

// Current namespace: app.Views
// Parameters: args, ytID, ytClass, apd
// args: Whatever parameters you want the video to have from Youtube's api.
// ytID: The Video ID you want to place.
// ytClass: CSS Classes you want on the video.
// apd: Where you want to append the video to.
app.Views.CreateYouTubeVideo = function(args, ytID, ytClass, apd) {
  var video = document.createElement('iframe');
  video.setAttribute('class', ytClass);
  video.src = 'https://www.youtube.com/embed/' + ytID + '?' + args.join('&');
  video.setAttribute('allowfullscreen', '');
  video.setAttribute('frameborder', '0');

  video.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; loop');

  apd.appendChild(video);
};

/* define: window, document */
'use strict';

// using namespaces:
var app = app || {};
app.Data = app.Data || {};
app.vars = app.vars || {};

app.Views = app.Views || {};

// Current namespace:
app.Views.FireVideoModal = function(playBtn, modalID, closeBtn, videoID, ytID) {
  var playButton = document.getElementById(playBtn);

  playButton.addEventListener('click', function() {
    var page = document.getElementById('MainPage');

    // Add modal to page.
    var modal = document.createElement('div');
    modal.id = modalID;
    modal.setAttribute('class', 'modal');

    page.appendChild(modal);

    // Add video to modal.
    var video = document.createElement('div');
    video.id = videoID;
    video.classList.add('video-overlay');

    modal.appendChild(video);

    var lang = window.location.pathname;
    var langBase = lang.split('/');

    var langSelector;
    switch (langBase[2]) {
      case 'en_IN_TL':
        langSelector = 'en';
        break;
      case 'es_IN_TL':
        langSelector = 'es';
        break;
      default:
        langSelector = langBase[2];
        break;
    }

    var args = [
      'modestbranding=1',
      'autoplay=1',
      'cc_load_policy=1',
      'hl=' + langSelector,
      'cc_lang_pref=' + langSelector,
      'rel=0',
      'enablejsapi=1',
      'origin=https://wavecel.trekbikes.com'
    ];

    // Parameters: args, ytID, ytClass, apd
    // args: Whatever parameters you want the video to have from Youtube's api.
    // ytID: The Video ID you want to place.
    // ytClass: CSS Classes you want on the video.
    // apd: Where you want to append the video to.
    // Hflf6klb7u0
    app.Views.CreateYouTubeVideo(args, 'Hflf6klb7u0', 'youtube-video', video);



    var closeModal = document.createElement('button');
    closeModal.setAttribute('type', 'button');
    closeModal.id = closeBtn;
    closeModal.setAttribute('class', 'close-btn');

    video.appendChild(closeModal);

    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    var svgNS = svg.namespaceURI;

    var titleEl = document.createElement('title');
    var titleText = document.createTextNode('Person');

    titleEl.appendChild(titleText);
    svg.appendChild(titleEl);

    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('class', 'close-icon');
    svg.setAttribute('version', '1.1');
    svg.setAttribute('xmlns','http://www.w3.org/2000/svg')
    svg.setAttribute('xmlns:xlink','http://www.w3.org/1999/xlink')

    var path = document.createElementNS(svgNS, 'path');
    path.setAttribute('d', 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z');

    svg.appendChild(path);

    closeModal.appendChild(svg);


    var video = document.getElementById(videoID);

    setTimeout(function() {
      modal.classList.add('show');
    }, 300);

    closeModal.addEventListener('click', function() {
      modal.remove();
    });
  });
};

/* define: window, document */
'use strict';

// using namespaces:
var app = app || {};
app.Data = app.Data || {};
app.vars = app.vars || {};

app.Views = app.Views || {};

// Current namespace:
app.Views.LanguageModal = function() {
  var lang = app.vars.language,
      langAttr;

  switch (lang) {
    case 'en':
      langAttr = 'en_IN_TL';
      break;
    case 'es':
      langAttr = 'es_ES';
      break;
    case 'es_419':
      langAttr = 'es_IN_TL';
      break;
    default:
      langAttr = lang;
      break;
  }

  var sectionID = app.vars.sectionIDs,
      pageCopy = app.Data.locales[langAttr].languageSection;

  var page = document.getElementById('PageBody');

  var langSection = [
    {
      "id": "africa-mid-east",
      "headline": "Africa \u0026 Middle East",
      "countries": [
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_bh",
          "name": "Bahrain"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_il",
          "name": "Israel"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_jo",
          "name": "Jordan"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_kw",
          "name": "Kuwait"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_lb",
          "name": "Lebanon"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_mu",
          "name": "Mauritius"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_om",
          "name": "Oman"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_qa",
          "name": "Qatar"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_sa",
          "name": "Saudi Arabia"
        },
        {
          "langCode": "za/en_ZA",
          "href": "/za/en_ZA/",
          "regionCode": "region_za",
          "name": "South Africa"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_ae",
          "name": "United Arab Emirates"
        }
      ]
    },
    {
      "id": "america",
      "headline": "Americas",
      "countries": [
        {
          "langCode": "ar/es_IN_TL",
          "href": "/ar/es_IN_TL/",
          "regionCode": "region_ar",
          "name": "Argentina"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_aw",
          "name": "Aruba"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_bb",
          "name": "Barbados"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_bm",
          "name": "Bermuda"
        },
        {
          "langCode": "br/pt_BR",
          "href": "/br/pt_BR/",
          "regionCode": "region_br",
          "name": "Brasil"
        },
        {
          "langCode": "ca/en_CA",
          "href": "/ca/en_CA/",
          "regionCode": "region_ca",
          "name": "Canada (English)"
        },
        {
          "langCode": "ca/fr_CA",
          "href": "/ca/fr_CA/",
          "regionCode": "region_ca",
          "name": "Canada (Français)"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_ky",
          "name": "Cayman Islands"
        },
        {
          "langCode": "internationalspanish/es_IN_TL",
          "href": "/internationalspanish/es_IN_TL/",
          "regionCode": "region_cl",
          "name": "Chile"
        },
        {
          "langCode": "internationalspanish/es_IN_TL",
          "href": "/internationalspanish/es_IN_TL/",
          "regionCode": "region_co",
          "name": "Colombia"
        },
        {
          "langCode": "internationalspanish/es_IN_TL",
          "href": "/internationalspanish/es_IN_TL/",
          "regionCode": "region_cr",
          "name": "Costa Rica"
        },
        {
          "langCode": "internationalspanish/es_IN_TL",
          "href": "/internationalspanish/es_IN_TL/",
          "regionCode": "region_do",
          "name": "Dominican Republic"
        },
        {
          "langCode": "internationalspanish/es_IN_TL",
          "href": "/internationalspanish/es_IN_TL/",
          "regionCode": "region_ec",
          "name": "Ecuador"
        },
        {
          "langCode": "internationalspanish/es_IN_TL",
          "href": "/internationalspanish/es_IN_TL/",
          "regionCode": "region_sv",
          "name": "El Salvador"
        },
        {
          "langCode": "internationalspanish/es_IN_TL",
          "href": "/internationalspanish/es_IN_TL/",
          "regionCode": "region_gt",
          "name": "Guatemala"
        },
        {
          "langCode": "internationalspanish/es_IN_TL",
          "href": "/internationalspanish/es_IN_TL/",
          "regionCode": "region_hn",
          "name": "Honduras"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_jm",
          "name": "Jamaica"
        },
        {
          "langCode": "mx/es_MX",
          "href": "/mx/es_MX/",
          "regionCode": "region_mx",
          "name": "México"
        },
        {
          "langCode": "internationalspanish/es_IN_TL",
          "href": "/internationalspanish/es_IN_TL/",
          "regionCode": "region_pa",
          "name": "Panama"
        },
        {
          "langCode": "internationalspanish/es_IN_TL",
          "href": "/internationalspanish/es_IN_TL/",
          "regionCode": "region_py",
          "name": "Paraguay"
        },
        {
          "langCode": "internationalspanish/es_IN_TL",
          "href": "/internationalspanish/es_IN_TL/",
          "regionCode": "region_pe",
          "name": "Peru"
        },
        {
          "langCode": "internationalspanish/es_IN_TL",
          "href": "/internationalspanish/es_IN_TL/",
          "regionCode": "region_pr",
          "name": "Puerto Rico"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_an",
          "name": "St. Maarten, NA"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_sr",
          "name": "Suriname"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_vg",
          "name": "Tortola, British Virgin Islands"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_tt",
          "name": "Trinidad"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_tc",
          "name": "Turks and Caicos"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_vi",
          "name": "U.S.V.I."
        },
        {
          "langCode": "us/en_US",
          "href": "/us/en_US/",
          "regionCode": "region_us",
          "name": "United States"
        },
        {
          "langCode": "internationalspanish/es_IN_TL",
          "href": "/internationalspanish/es_IN_TL/",
          "regionCode": "region_uy",
          "name": "Uruguay"
        },
        {
          "langCode": "internationalspanish/es_IN_TL",
          "href": "/internationalspanish/es_IN_TL/",
          "regionCode": "region_ve",
          "name": "Venezuela"
        }
      ]
    },
    {
      "id": "asia",
      "headline": "Asia Pacific",
      "countries": [
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_am",
          "name": "Armenia"
        },
        {
          "langCode": "au/en_AU",
          "href": "/au/en_AU/",
          "regionCode": "region_au",
          "name": "Australia"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_az",
          "name": "Azerbaijan"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_bn",
          "name": "Brunei"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_pf",
          "name": "French Polynesia"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_ge",
          "name": "Georgia"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_gu",
          "name": "Guam"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_globe3",
          "name": "Hong Kong"
        },
        {
          "langCode": "in/en_IN",
          "href": "/in/en_IN/",
          "regionCode": "region_in",
          "name": "India"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_id",
          "name": "Indonesia"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_kz",
          "name": "Kazakhstan"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_my",
          "name": "Malaysia"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_mn",
          "name": "Mongolia"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_mm",
          "name": "Myanmar"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_np",
          "name": "Nepal"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_nc",
          "name": "New Caledonia"
        },
        {
          "langCode": "nz/en_NZ",
          "href": "/nz/en_NZ/",
          "regionCode": "region_nz",
          "name": "New Zealand"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_mp",
          "name": "Northern Mariana Islands"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_ph",
          "name": "Philippines"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_ru",
          "name": "Russia"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_sg",
          "name": "Singapore"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_lk",
          "name": "Sri Lanka"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_globe3",
          "name": "Taiwan"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_th",
          "name": "Thailand"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_vn",
          "name": "Vietnam"
        },
        {
          "langCode": "kr/ko_KR",
          "href": "/kr/ko_KR/",
          "regionCode": "region_kr",
          "name": "대한민국 (한국어)"
        },
        {
          "langCode": "cn/zh_CN",
          "href": "/cn/zh_CN/",
          "regionCode": "region_cn",
          "name": "中国"
        },
        {
          "langCode": "jp/ja_JP",
          "href": "/jp/ja_JP/",
          "regionCode": "region_jp",
          "name": "日本"
        }
      ]
    },
    {
      "id": "europe",
      "headline": "Europe",
      "countries": [
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_by",
          "name": "Belarus"
        },
        {
          "langCode": "be/fr_BE",
          "href": "/be/fr_BE/",
          "regionCode": "region_be",
          "name": "Belgique (Français)"
        },
        {
          "langCode": "be/nl_BE",
          "href": "/be/nl_BE/",
          "regionCode": "region_be",
          "name": "België (Nederlands)"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_bg",
          "name": "Bulgaria"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_hr",
          "name": "Croatia"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_cy",
          "name": "Cyprus"
        },
        {
          "langCode": "cz/cs_CZ",
          "href": "/cz/cs_CZ/",
          "regionCode": "region_cz",
          "name": "Česká Republika"
        },
        {
          "langCode": "dk/da_DK",
          "href": "/dk/da_DK/",
          "regionCode": "region_dk",
          "name": "Danmark"
        },
        {
          "langCode": "de/de_DE",
          "href": "/de/de_DE/",
          "regionCode": "region_de",
          "name": "Deutschland"
        },
        {
          "langCode": "es/es_ES",
          "href": "/es/es_ES/",
          "regionCode": "region_es",
          "name": "España"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_ee",
          "name": "Estonia"
        },
        {
          "langCode": "fr/fr_FR",
          "href": "/fr/fr_FR/",
          "regionCode": "region_fr",
          "name": "France"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_gr",
          "name": "Greece"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_hu",
          "name": "Hungary"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_is",
          "name": "Iceland"
        },
        {
          "langCode": "ie/en_IE",
          "href": "/ie/en_IE/",
          "regionCode": "region_ie",
          "name": "Ireland"
        },
        {
          "langCode": "it/it_IT",
          "href": "/it/it_IT/",
          "regionCode": "region_it",
          "name": "Italia"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_lv",
          "name": "Latvia"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_lt",
          "name": "Lithuania"
        },
        {
          "langCode": "lu/fr_LU",
          "href": "/lu/fr_LU/",
          "regionCode": "region_lu",
          "name": "Luxembourg"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_mk",
          "name": "Macedonia"
        },
        {
          "langCode": "nl/nl_NL",
          "href": "/nl/nl_NL/",
          "regionCode": "region_nl",
          "name": "Nederland"
        },
        {
          "langCode": "no/no_NO",
          "href": "/no/no_NO/",
          "regionCode": "region_no",
          "name": "Norge"
        },
        {
          "langCode": "at/de_AT",
          "href": "/at/de_AT/",
          "regionCode": "region_at",
          "name": "Österreich"
        },
        {
          "langCode": "pl/pl_PL",
          "href": "/pl/pl_PL/",
          "regionCode": "region_pl",
          "name": "Polska"
        },
        {
          "langCode": "pt/pt_PT",
          "href": "/pt/pt_PT/",
          "regionCode": "region_pt",
          "name": "Portugal"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_ro",
          "name": "Romania"
        },
        {
          "langCode": "ch/de_CH",
          "href": "/ch/de_CH/",
          "regionCode": "region_ch",
          "name": "Schweiz (Deutsch)"
        },
        {
          "langCode": "ch/fr_CH",
          "href": "/ch/fr_CH/",
          "regionCode": "region_ch",
          "name": "Suisse (Français)"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_rs",
          "name": "Serbia"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_sk",
          "name": "Slovakia"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_si",
          "name": "Slovenia"
        },
        {
          "langCode": "fi/fi_FI",
          "href": "/fi/fi_FI/",
          "regionCode": "region_fi",
          "name": "Suomi"
        },
        {
          "langCode": "se/sv_SE",
          "href": "/se/sv_SE/",
          "regionCode": "region_se",
          "name": "Sverige"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_tr",
          "name": "Turkey"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_ua",
          "name": "Ukraine"
        },
        {
          "langCode": "gb/en_GB",
          "href": "/gb/en_GB/",
          "regionCode": "region_gb",
          "name": "United Kingdom"
        }
      ]
    },
    {
      "id": "international",
      "headline": null,
      "countries": [
        {
          "langCode": "internationalspanish/es_IN_TL",
          "href": "/internationalspanish/es_IN_TL/",
          "regionCode": "region_globe",
          "name": "América Latina (Español)"
        },
        {
          "langCode": "international/en_IN_TL",
          "href": "/international/en_IN_TL/",
          "regionCode": "region_globe",
          "name": "International (English)"
        }
      ]
    }
  ];

  // Add modal.
  var modal = document.createElement('div');
  modal.setAttribute('class', 'modal language-selection-container');

  page.prepend(modal);

  // Add modal header.
  var header = document.createElement('header');
  header.setAttribute('class', 'modal-header container full-width');

  modal.appendChild(header);

  // Add modal close button.
  var closeBtn = document.createElement('button');
  closeBtn.setAttribute('type', 'button');
  closeBtn.setAttribute('class', 'close-btn');
  closeBtn.setAttribute('id', 'LanguageCloseBtn');

  header.appendChild(closeBtn);

  // Add modal button text.
  var closeText = document.createTextNode(pageCopy.backBtn);
  closeBtn.appendChild(closeText);

  // Add modal button svg.
  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  var svgNS = svg.namespaceURI;
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('class', 'close-icon');
  svg.setAttribute('version', '1.1');
  svg.setAttribute('xmlns','http://www.w3.org/2000/svg')
  svg.setAttribute('xmlns:xlink','http://www.w3.org/1999/xlink')

  closeBtn.appendChild(svg);

  // Add svg path.
  var path = document.createElementNS(svgNS, 'path');
  path.setAttribute('d', 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z');

  svg.appendChild(path);

  var modalBody = document.createElement('div');
  modalBody.setAttribute('class', 'container modal-body');

  modal.appendChild(modalBody);

  var modalHeadline = document.createElement('h2');
  modalHeadline.setAttribute('class', 'headline');

  modalBody.appendChild(modalHeadline);

  var headlineText = document.createTextNode(pageCopy.languageSelHeadline);
  modalHeadline.appendChild(headlineText);

  // Add Columns for country list.
  langSection.forEach(function(cl, i) {
    var countryList = document.createElement('div');
    countryList.setAttribute('class', 'country-list list-' + cl['id']);

    modalBody.appendChild(countryList);

    if (cl.headline != null) {
      var sectionHeading = document.createElement('h3');
      sectionHeading.setAttribute('class', 'headline section-title country-expander');

      countryList.appendChild(sectionHeading);

      var headingText = document.createTextNode(cl.headline)
      sectionHeading.appendChild(headingText);

      var headingSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      var headingSvgNS = svg.namespaceURI;
      headingSvg.setAttribute('viewBox', '0 0 24 24');
      headingSvg.setAttribute('class', 'expander mobile-only');
      headingSvg.setAttribute('version', '1.1');
      headingSvg.setAttribute('xmlns','http://www.w3.org/2000/svg')
      headingSvg.setAttribute('xmlns:xlink','http://www.w3.org/1999/xlink')

      sectionHeading.appendChild(headingSvg);

      // Add svg path.
      var expander = document.createElementNS(headingSvgNS, 'path');
      expander.setAttribute('d', 'M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z');

      headingSvg.appendChild(expander);

    }

    var listContainer = document.createElement('div');
    listContainer.setAttribute('class', 'country-list-container');

    countryList.appendChild(listContainer);

    cl.countries.forEach(function(country, i) {
      var lc = country.langCode.split('/');
      // var cBtn = document.createElement('button');
      // cBtn.setAttribute('type', 'button');
      // cBtn.setAttribute('class', 'country-btn');
      // cBtn.setAttribute('data-language', lc[1]);

      var cBtn = document.createElement('a');
      // cBtn.setAttribute('type', 'button');
      cBtn.setAttribute('class', 'country-btn');
      if (app.vars.inProduction == true) {
        cBtn.setAttribute('href', 'https://wavecel.trekbikes.com/' + country.langCode);
      } else {
        cBtn.setAttribute('href', '/build/' + country.langCode);
      }

      listContainer.appendChild(cBtn);

      var flag = document.createElement('img');
      flag.setAttribute('class', 'country-flag');
      flag.src = '//trek.scene7.com/is/image/TrekBicycleProducts/' + country.regionCode;
      cBtn.appendChild(flag);

      var t = document.createTextNode(country.name);
      cBtn.appendChild(t);
    });
  });

  var expandBtn = document.querySelectorAll('.country-expander');

  expandBtn.forEach(function(b, i) {
    b.addEventListener('click', function() {
      var p = this.parentElement;

      if (p.classList.contains('expanded')) {
        var allLists = document.querySelectorAll('.country-list');

        allLists.forEach(function(b, i) {
          b.classList.remove('expanded');
        });
      } else {
        var ex = document.querySelector('.expanded');
        if (ex) {
          ex.classList.remove('expanded');
        }
        p.classList.add('expanded');
      }
    });
  });

  closeBtn.addEventListener('click', function() {
    modal.remove();
    page.classList.remove('no-scroll');
  });

  // Add visibility class to modal.
  setTimeout(function() {
    modal.classList.add('show');
  }, 300);

  setTimeout(function() {
    page.classList.add('no-scroll');
  }, 600);
};

/* define: window, document */
'use strict';

// using namespaces:
var app = app || {};
app.Data = app.Data || {};
app.vars = app.vars || {};

app.Views = app.Views || {};

// Current namespace:
app.Views.LanguageSelector = function() {
  var btn = document.getElementById(app.vars.sectionIDs.globalSection.langSel);

  btn.addEventListener('click', function() {
    app.Views.LanguageModal();
  });
};

/* define: window, document */
'use strict';

// using namespaces:
var app = app || {};
app.Data = app.Data || {};
app.vars = app.vars || {};

app.Views = app.Views || {};

// Current namespace:
app.Views.RevealHelmet = function() {
  var touchDevice;
  (function is_touch_device() {
    try {
      document.createEvent('TouchEvent');
      touchDevice = true;
      return true;
    } catch (e) {
      touchDevice = false;
      console.log('Not a touch device.');
      return false;
    }
  })();

  var helmetSlider = document.getElementById(app.vars.sectionIDs.revealSection.helmetSlider);
  var revealSlider = document.getElementById(app.vars.sectionIDs.revealSection.revealSlide);

  revealSlider.addEventListener('touchstart', function(event) {
    var shiftX = event.clientX - revealSlider.getBoundingClientRect().right;

    slide(event.pageX);

    // centers the revealSlider at (pageX) coordinates
    function slide(pageX) {
      var eC = helmetSlider.getBoundingClientRect();
      var mP = pageX;
      var offsetRight = eC.right;
      var el = helmetSlider.offsetWidth;

      var slideWidth = (offsetRight - mP) / el * 100;

      if (0 < slideWidth && slideWidth < 100) {
        revealSlider.style.width = slideWidth + '%';
      }
    }

    function onMouseMove(event) {
      if (event.targetTouches.length == 1) {
        var touch = event.targetTouches[0];

        slide(touch.pageX);
      }
    }

    // (3) move the revealSlider on mousemove
    helmetSlider.addEventListener('touchmove', onMouseMove);

    // (4) drop the revealSlider, remove unneeded handlers
    revealSlider.addEventListener('touchend', function() {
      helmetSlider.removeEventListener('touchmove', onMouseMove);
      revealSlider.onmouseup = null;
    });
  });

  revealSlider.addEventListener('mousedown', function(event) {
    var shiftX = event.clientX - revealSlider.getBoundingClientRect().right;

    slide(event.pageX);

    // centers the revealSlider at (pageX) coordinates
    function slide(pageX) {
      var eC = helmetSlider.getBoundingClientRect();
      var mP = pageX;
      var offsetRight = eC.right;
      var el = helmetSlider.offsetWidth;

      var slideWidth = (offsetRight - mP) / el * 100;

      if (0 < slideWidth && slideWidth < 100) {
        revealSlider.style.width = slideWidth + '%';
      }
    }

    function onMouseMove(event) {
      slide(event.pageX);
    }

    // (3) move the revealSlider on mousemove
    helmetSlider.addEventListener('mousemove', onMouseMove);

    // (4) drop the revealSlider, remove unneeded handlers
    revealSlider.addEventListener('mouseup', function() {
      helmetSlider.removeEventListener('mousemove', onMouseMove);
      revealSlider.onmouseup = null;
    });
  });

  revealSlider.addEventListener('dragstart', function() {
    return false;
  });
};

/* define: window, document */
'use strict';

// using namespaces:
var app = app || {};
app.Data = app.Data || {};
app.vars = app.vars || {};

app.Views = app.Views || {};

// Current namespace:
app.Views.ScrollPage = function() {
  var head = document.querySelector('.masthead'),
      h = document.querySelector('.hero'),
      hr = document.querySelector('.reveal-section'),
      iv = document.querySelector('.information-video'),
      hl = document.querySelector('.highlight-container'),
      pr = document.querySelector('.product-line'),
      cInfo = document.querySelector('.concussion-infographic'),
      cIll = document.querySelector('.concussion-illustration'),
      hc = document.querySelector('.helmet-construction'),
      layer1 = document.querySelector('.helmet-shell'),
      layer2 = document.querySelector('.helmet-insert'),
      layer3 = document.querySelector('.helmet-dial'),
      cc = document.querySelector('.construction-container'),
      tu = document.querySelector('.three-up'),
      ic = document.querySelector('.image-collage'),
      sh = document.querySelector('.shop-helmets');

  var headht = head.clientHeight, // Hero height
      hht = h.clientHeight, // Helmet Reveal
      ivht = iv.clientHeight, // Info video section
      hrht = hr.clientHeight, // Helmet Reveal
      hlht = hl.clientHeight, // Highlight Section
      prht = pr.clientHeight, // Product Line
      cInfoht = cInfo.clientHeight, // Concussion Infographic
      cIllht = cIll.clientHeight, // Concussion Illustration
      hcht = hc.clientHeight, // Helmet construction
      lht1 = layer1.clientHeight, // Helmet construction
      lht2 = layer2.clientHeight, // Helmet construction
      lht3 = layer3.clientHeight, // Helmet construction
      tuht = tu.clientHeight, // Three Up
      icht = ic.clientHeight, // Image collage
      shht = sh.clientHeight; // Shop section.

  window.addEventListener('resize', function() {
    headht = head.clientHeight, // Hero height
    hht = h.clientHeight, // Hero height
    hrht = hr.clientHeight, // Helmet Reveal
    ivht = iv.clientHeight, // Info video section
    hlht = hl.clientHeight, // Highlight Section
    prht = pr.clientHeight, // Product Line
    cInfoht = cInfo.clientHeight, // Concussion Infographic
    cIllht = cIll.clientHeight, // Concussion Illustration
    hcht = hc.clientHeight, // Helmet construction
    tuht = tu.clientHeight, // Three Up
    icht = ic.clientHeight, // Image collage
    shht = sh.clientHeight; // Shop section.

    app.Views.SetConstructionHeight();
  });

  var helmetShell = document.querySelector('.helmet-shell');
  var helmetInsert = document.querySelector('.helmet-insert');
  var helmetDial = document.querySelector('.helmet-dial');

  var helmetShellHeight = helmetShell.clientHeight;
  var helmetInsertHeight = helmetInsert.clientHeight;
  var helmetDialHeight = helmetDial.clientHeight;

  var ch = helmetShellHeight + helmetInsertHeight + helmetDialHeight + 400;
  var dialStyleTop = window.getComputedStyle(helmetDial);
  dialStyleTop = dialStyleTop.getPropertyValue('top');
  dialStyleTop = dialStyleTop.replace('px', '');

  var constant = headht + hht,
      heroInfoCombo = constant + ivht * .25,
      highlightVisible = constant + ivht + hrht * .25,
      prodLineVisible = constant + ivht + hrht * .5,
      graphicVisible = constant + ivht + hrht + hlht + prht * .5,
      illustartionVisible = constant + ivht + hrht + hlht + prht + cInfoht * .5,
      constructionVisible = constant + ivht + hrht + hlht + prht + cInfoht * .75,
      constructHeight = lht1 + lht2 + lht3,
      threeUpVisible = constant + ivht + hrht + hlht + prht + cInfoht + cIllht + constructHeight + tuht * .5,
      collageVisible = constant + ivht + hrht + hlht + prht + cInfoht + cIllht + constructHeight + tuht * .75,
      shopVisible = constant + ivht + hrht + hlht + prht + cInfoht + cIllht + (lht1 + lht2 + lht3) + tuht + icht + shht * .25;

  window.addEventListener('scroll', function(e) {
    var windowScrollPlus = window.pageYOffset + headht;
    var heightNudge = 80;

    var scrollReveal = windowScrollPlus > heroInfoCombo,
        scrollHighlight = windowScrollPlus > highlightVisible,
        scrollProducts = windowScrollPlus > prodLineVisible,
        scrollConcussInfo = windowScrollPlus > graphicVisible,
        scrollConcussIll = windowScrollPlus > illustartionVisible,
        scrollPreConstruct = windowScrollPlus > headht + hht + hrht + ivht + hlht + prht + cInfoht + cIllht * .25,
        scrollConstruct = windowScrollPlus + heightNudge > constructionVisible,
        scrollThreeUp = windowScrollPlus > threeUpVisible,
        scrollImageCol = windowScrollPlus > collageVisible,
        scrollShopHelmet = windowScrollPlus > shopVisible;

    // Handle scroll to .reveal-section
    if (scrollReveal) {

      hr.classList.add('scroll-in');
    } else {
      hr.classList.remove('scroll-in');
    }

    // Handle scroll to .highlight-container
    if (scrollHighlight) {

      hl.classList.add('scroll-in');
    } else {
      hl.classList.remove('scroll-in');
    }

    // Handle scroll to .product-line
    if (scrollProducts) {

      pr.classList.add('scroll-in');
    } else {
      pr.classList.remove('scroll-in');
    }

    // Handle scroll to .concussion-infographic
    if (scrollConcussInfo) {

      cInfo.classList.add('scroll-in');
    } else {
      cInfo.classList.remove('scroll-in');
    }

    // Handle scroll to .concussion-illustration
    if (scrollConcussIll) {

      cIll.classList.add('scroll-in');
    } else {
      cIll.classList.remove('scroll-in');
    }

    // Handle scroll to .helmet-construction scrollPreConstruct
    if (scrollPreConstruct) {

      hc.classList.add('scroll-in');
    }

    if (scrollConstruct) {

      var pageTop = document.getElementById('MainPage').getBoundingClientRect().top;
      var helmetTop = document.querySelector('.construction-container').getBoundingClientRect().top;
      var helmetBottom = document.querySelector('.construction-container').getBoundingClientRect().bottom;

      var helmTop = Math.abs(pageTop + helmetTop);
      var helmBot = Math.abs(pageTop + helmetBottom);
      var helmPos = pageTop + window.pageYOffset;

      var helmTruePos = helmPos - helmetTop + heightNudge;
      var helmTrueHeight = ch;

      var pagePos;
      if (0 < helmTruePos) {
        pagePos = helmTruePos / ch;
      } else {
        pagePos = 0
      }

      var insertFudge = helmTrueHeight * (4 / 100);
      var dialFudge = helmTrueHeight * (7.5 / 100);

      var insertMovement = insertFudge + helmTrueHeight * pagePos;
      insertMovement = parseInt(insertMovement);

      var dialMovement = dialFudge + helmTrueHeight * pagePos;
      dialMovement = parseInt(dialMovement);

      var insertEndPos = helmetShellHeight + insertFudge + 200;
      insertEndPos = parseInt(insertEndPos);

      var dialEndPos = ch - helmetDialHeight;
      dialEndPos = parseInt(dialEndPos);

      dialStyleTop = parseInt(dialStyleTop);

      if (insertMovement > helmetShellHeight) {
        document.querySelector('.helmet-insert .caption').classList.add('construct-scroll');
      } else {
        document.querySelector('.helmet-insert .caption').classList.remove('construct-scroll');
      }

      if (insertMovement < insertEndPos) {
        helmetInsert.setAttribute('style', 'top: ' + insertMovement + 'px');
      }

      if (insertMovement > insertEndPos) {
        document.querySelector('.helmet-dial .caption').classList.add('construct-scroll');
      } else {
        document.querySelector('.helmet-dial .caption').classList.remove('construct-scroll');
      }

      if (dialMovement < dialEndPos) {
        helmetDial.setAttribute('style', 'top: ' + dialMovement + 'px');
      }
    } else {
      hc.classList.remove('scroll-in');
    }

    // Handle scroll to .three-up
    if (scrollThreeUp) {

      tu.classList.add('scroll-in');
    } else {
      tu.classList.remove('scroll-in');
    }

    // Handle scroll to .image-collage
    if (scrollImageCol) {

      ic.classList.add('scroll-in');
    } else {
      ic.classList.remove('scroll-in');
    }

    // Handle scroll to .image-collage
    if (scrollShopHelmet) {

      sh.classList.add('scroll-in');
    } else {
      sh.classList.remove('scroll-in');
    }
  });
};

/* define: window, document */
'use strict';

// using namespaces:
var app = app || {};
app.Data = app.Data || {};
app.vars = app.vars || {};

app.Views = app.Views || {};

// Current namespace:
app.Views.SetConstructionHeight = function(limit) {
  var hc = document.querySelector('.helmet-construction'),
      contain = document.querySelector('.construction-container'),
      hShell = document.querySelector('.helmet-shell'),
      hInsert = document.querySelector('.helmet-insert'),
      hDial = document.querySelector('.helmet-dial');

  setContainer()

  window.addEventListener('resize', function() {
    setContainer()
  });

  function setContainer() {

    if (window.innerWidth >= app.vars.constructionBP) {
      var trueDialHeight = hShell.clientHeight + hInsert.clientHeight + hDial.clientHeight + 400;

      contain.setAttribute('style', 'height:' + trueDialHeight + 'px');
    } else {
      contain.removeAttribute('style');
    }
  }
};

/* define: window, document */
'use strict';

// using namespaces:
var app = app || {};
app.Data = app.Data || {};
app.vars = app.vars || {};

app.Views = app.Views || {};

// Current namespace:
app.Views.SetHeroVideo = function() {
  var hero = document.getElementById('HeroContainer');

  // Parameters: args, ytID, ytClass, apd
  // args: Whatever parameters you want the video to have from Youtube's api.
  // ytID: The Video ID you want to place.
  // ytClass: CSS Classes you want on the video.
  // apd: Where you want to append the video to.
  // ytID, vidID, vidH, vidW, vidArgs
  var videoHeight = window.innerWidth * .5625;
  var videoWidth = window.innerWidth;
  var videoArgs = {
    controls: 0,
    showinfo: 0,
    rel: 0,
    autoplay: 1,
    mute: 1,
    cc_load_policy: 0
  }

  var video = app.Views.CreateYouTubeHero('KTtBU0jJFgE', 'HeroVideo', videoHeight, videoWidth, videoArgs);

};

/* define: window, document */
'use strict';

// using namespaces:
var app = app || {};
app.Data = app.Data || {};
app.vars = app.vars || {};

app.Views = app.Views || {};

// Current namespace:
app.Views.SharePopup = function(l, w, h) {
  var newWindow = null;


  function PopoutWindow() {
    if (newWindow == null || newWindow.closed) {
      var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : window.screenX;
      var dualScreenTop = window.screenTop != undefined ? window.screenTop : window.screenY;

      var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
      var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

      var left = ((width / 2) - (w / 2)) + dualScreenLeft;
      var top = ((height / 2) - (h / 2)) + dualScreenTop;

      newWindow = window.open(l, 'newWindow', 'width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

      if (window.focus) {
        newWindow.focus();
      }

      return false;
    } else {
      newWindow.focus();
    }
  }

  PopoutWindow();
};

/* define: window, document */
'use strict';

// using namespaces:
var app = app || {};
app.Data = app.Data || {};

app.Model = app.Model || {};

// Current namespace:
app.Model.GetLocaleData = function(file) {
  app.Data.locales = {};

  var httpReq = new XMLHttpRequest();

  httpReq.open('GET', file, true);
  httpReq.setRequestHeader('Content-Type', 'application/json');
  httpReq.onload = getData;
  httpReq.send(null);

  function getData(res, req) {
    if (httpReq.readyState === XMLHttpRequest.DONE) {
      req = httpReq.status;

      if (req === 200) {
        res = JSON.parse(httpReq.responseText);

        var results = Object.keys(res);

        results.forEach(function(l, i) {
          app.Data.locales[l] = [res[l]][0];
        });

        app.Controller.GetData();
      } else {
        console.log('Opps.... something went wrong!');
      }
    }
  }
};

/* define: window, document */
'use strict';

// using namespaces:
var app = app || {};

// Current namespace:
app.Model = app.Model || {};

app.Model.InitData = function(file) {
  var httpReq = new XMLHttpRequest();

  httpReq.open('GET', file, true);
  httpReq.setRequestHeader('Content-Type', 'application/json');
  httpReq.onload = getData;
  httpReq.send(null);

  function getData(res, req) {
    if (httpReq.readyState === XMLHttpRequest.DONE) {
      req = httpReq.status;

      if (req === 200) {
        console.log('Data Initialized.');
      } else {
        console.log('Opps.... something went wrong!');
      }
    }
  }
};

/* define: window, document */
'use strict';

// using namespaces:
var app = app || {};
app.Data = app.Data || {};
app.vars = app.vars || {};
app.Views = app.Views || {};

app.Controller = app.Controller || {};

// Current namespace:
app.Controller.GetData = function(data) {
  app.Controller.GetData.prototype.UI();
};

app.Controller.GetData.prototype.UI = function() {
  var lang = app.vars.language,
      langAttr;

  switch (lang) {
    case 'en':
      langAttr = 'en_IN_TL';
      break;
    case 'es':
      langAttr = 'es_ES';
      break;
    case 'es_419':
      langAttr = 'es_IN_TL';
      break;
    default:
      langAttr = lang;
      break;
  }

  var sectionID = app.vars.sectionIDs,
      pageCopy = app.Data.locales[langAttr].languageSection,
      self = this;

  app.Views.SetHeroVideo();

  var footSection = app.vars.sectionIDs.footerSection;
  var copyright = document.getElementById(footSection.footerCopyright);
  var thisYear = new Date();
  copyright.innerHTML = '\u00a9 Trek Bicycle Corporation ' + thisYear.getFullYear();

  app.Views.RevealHelmet();
  app.Views.SetConstructionHeight();
  app.Views.ScrollPage();

  var vidSecPlay = sectionID.videoSection.videoContainer;
  var vidSecMod = sectionID.videoSection.modal.modalVideo;
  var vidSecClose = sectionID.videoSection.modal.closeModal;
  var vidSecVideo = sectionID.videoSection.modal.videoModal;
  var vidSecYT = sectionID.videoSection.modal.youtubeID;

  app.Views.FireVideoModal(vidSecPlay, vidSecMod, vidSecClose, vidSecVideo, vidSecYT);

  app.Views.LanguageSelector();

  var fbShare = document.getElementById('FacebookShare'),
      twShare = document.getElementById('TwitterShare'),
      mlShare = document.getElementById('MailShare');

  var thisLink = window.location.href;

  fbShare.addEventListener('click', function() {
    var fbLink = 'https\u003a\u002f\u002fwww.facebook.com\u002fsharer\u002fsharer.php\u003fu\u003D' + thisLink;

    app.Views.SharePopup(fbLink, 450, 350);
  });

  twShare.addEventListener('click', function() {
    var twLink = 'https\u003a\u002f\u002ftwitter.com\u002fhome\u003fstatus\u003D' + thisLink;

    app.Views.SharePopup(twLink, 450, 500);
  });

  mlShare.addEventListener('click', function() {
    var subject = this.getAttribute('data-subject');
    var mailbody = this.getAttribute('data-body');
    mailbody = mailbody.split(' ');
    mailbody = mailbody.join('%20');

    var thisEmail = 'mailto\u003a\u003f\u0026subject\u003D' + subject + '\u0026body\u003D' + mailbody + '. ' + thisLink

    window.location.href = thisEmail;
  });
};

/* define: window, document */
'use strict';

var app = app || {};
app.Init = app.Init || {};

app.Init.LocationService = function(loader, percent) {
  var self = this;

  if (navigator.geolocation) {
    // geolocation is available
    console.log('Init Geolocation!');

    var options = {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0
    };

    var success = self.LocationServiceSuccess;
    var error = self.LocationServiceError;

    navigator.geolocation.getCurrentPosition(success, error, options);
  } else {
    // geolocation IS NOT available
    console.log('Geoloaction is unavailable.');
    self.LocationServiceError();
  }
};

app.Init.LocationService.prototype.LocationServiceSuccess = function(pos) {
  var loc = pos.coords,
      lat = loc.latitude,
      lon = loc.longitude,
      acc = loc.accuracy;
};

app.Init.LocationService.prototype.LocationServiceError = function(err) {
  console.warn('ERROR(' + err.code + '):' + err.message);
};
