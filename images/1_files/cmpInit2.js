if ((window.TMCONFIG.features || {}).GDPRConsentV2Enabled === 'true' || window.location.search.indexOf('GDPRConsentV2Enabled=true') >-1){
  window.__cmp = {
    config: { logging: 'debug' },
    captifyWidget: {
      url: '.well-known/widget_config.json',
// regionDetectionEnabled: true, - enable region detection
      regionDetectionEnabled: false,
      globalConfigEnabled: true, // enable global config instead of fetching
      config: {
        "pubid": "378",
        "localization": {
          "en": {
            "main": {
              "title": "Our use of cookies",
              "context": "We use cookies to help our site work, to understand how it is used, and to tailor the adverts presented on our site. By clicking “Accept” below, you agree to us doing so. You can read more in our cookie notice. Or, if you do not agree, you can click Manage below to access other choices.",
              "agree": "ACCEPT",
              "options": "MANAGE"
            },
            "options": {
              "title": "Our use of cookies",
              "context": "Here you can control cookies, including those for advertising, using the buttons below. Even if you turn off the advertising related cookies, you will still see adverts on our site, because they help us to fund it. However, those adverts will simply be less relevant to to you. You can learn more about cookies in our Cookie Notice on the site.",
              "ourListTitle": "Purposes of data collection",
              "partnersListTitle": "Our partners",
              "noPurposes": "No purposes selected!",
              "footerContext": "The technology to maintain this privacy management relies on cookie identifiers. Removing or resetting your browser cookies will reset these preferences. This process does not turn off all Internet advertising, only advertisements that are customised to your likely interests based upon previous web browsing activity.\n",
              "yourRights": "",
              "agree": " I have finished – close this window"
            },
            "rights": {
              "title": "Your rights",
              "contactUs": "Contact us",
              "fields": {
                "request": {
                  "title": "Your request",
                  "list": {
                    "correct": "Right to access and correct personal data",
                    "restrict": "Right to restrict use of personal data",
                    "portability": "Right to data portability",
                    "erasure": "Right to erasure"
                  }
                },
                "email": "Your Email",
                "comments": "Your Comments",
                "checkbox": "The process of exercising these rights requires that we set trackers, or otherwise request for proof of identity that facilitate the request. This data will not be stored any longer than necessary to fulfil your request."
              },
              "yourRights": "YOUR RIGHTS",
              "options": "OPTIONS",
              "send": "SEND",
              "mandatory": "Mandatory field",
              "characterLimit": "character limit",
              "validEmail": "Must be valid email"
            },
            "finish": {
              "title": "YOUR RIGHTS",
              "thankYou": "Thank you",
              "message": "Your message has been sent, we will come back to you shortly.",
              "options": "OPTIONS"
            }
          },
          "fr": {
            "main": {
              "title": "Our use of cookies",
              "context": "We use cookies to help our site work, to understand how it is used, and to tailor the adverts presented on our site. By clicking “Accept” below, you agree to us doing so. You can read more in our cookie notice. Or, if you do not agree, you can click Manage below to access other choices.",
              "agree": "ACCEPT",
              "options": "MANAGE"
            },
            "options": {
              "title": "Our use of cookies",
              "context": "Here you can control cookies, including those for advertising, using the buttons below. Even if you turn off the advertising related cookies, you will still see adverts on our site, because they help us to fund it. However, those adverts will simply be less relevant to to you. You can learn more about cookies in our Cookie Notice on the site.",
              "ourListTitle": "Purposes of data collection",
              "partnersListTitle": "Our partners",
              "noPurposes": "No purposes selected!",
              "footerContext": "The technology to maintain this privacy management relies on cookie identifiers. Removing or resetting your browser cookies will reset these preferences. This process does not turn off all Internet advertising, only advertisements that are customised to your likely interests based upon previous web browsing activity.\n",
              "yourRights": "",
              "agree": " I have finished – close this window"
            },
            "rights": {
              "title": "Your rights",
              "contactUs": "Contact us",
              "fields": {
                "request": {
                  "title": "Your request",
                  "list": {
                    "correct": "Right to access and correct personal data",
                    "restrict": "Right to restrict use of personal data",
                    "portability": "Right to data portability",
                    "erasure": "Right to erasure"
                  }
                },
                "email": "Your Email",
                "comments": "Your Comments",
                "checkbox": "The process of exercising these rights requires that we set trackers, or otherwise request for proof of identity that facilitate the request. This data will not be stored any longer than necessary to fulfil your request."
              },
              "yourRights": "YOUR RIGHTS",
              "options": "OPTIONS",
              "send": "SEND",
              "mandatory": "Mandatory field",
              "characterLimit": "character limit",
              "validEmail": "Must be valid email"
            },
            "finish": {
              "title": "YOUR RIGHTS",
              "thankYou": "Thank you",
              "message": "Your message has been sent, we will come back to you shortly.",
              "options": "OPTIONS"
            }
          },
          "es": {
            "main": {
              "title": "Our use of cookies",
              "context": "We use cookies to help our site work, to understand how it is used, and to tailor the adverts presented on our site. By clicking “Accept” below, you agree to us doing so. You can read more in our cookie notice. Or, if you do not agree, you can click Manage below to access other choices.",
              "agree": "ACCEPT",
              "options": "MANAGE"
            },
            "options": {
              "title": "Our use of cookies",
              "context": "Here you can control cookies, including those for advertising, using the buttons below. Even if you turn off the advertising related cookies, you will still see adverts on our site, because they help us to fund it. However, those adverts will simply be less relevant to to you. You can learn more about cookies in our Cookie Notice on the site.",
              "ourListTitle": "Purposes of data collection",
              "partnersListTitle": "Our partners",
              "noPurposes": "No purposes selected!",
              "footerContext": "The technology to maintain this privacy management relies on cookie identifiers. Removing or resetting your browser cookies will reset these preferences. This process does not turn off all Internet advertising, only advertisements that are customised to your likely interests based upon previous web browsing activity.\n",
              "yourRights": "",
              "agree": " I have finished – close this window"
            },
            "rights": {
              "title": "Your rights",
              "contactUs": "Contact us",
              "fields": {
                "request": {
                  "title": "Your request",
                  "list": {
                    "correct": "Right to access and correct personal data",
                    "restrict": "Right to restrict use of personal data",
                    "portability": "Right to data portability",
                    "erasure": "Right to erasure"
                  }
                },
                "email": "Your Email",
                "comments": "Your Comments",
                "checkbox": "The process of exercising these rights requires that we set trackers, or otherwise request for proof of identity that facilitate the request. This data will not be stored any longer than necessary to fulfil your request."
              },
              "yourRights": "YOUR RIGHTS",
              "options": "OPTIONS",
              "send": "SEND",
              "mandatory": "Mandatory field",
              "characterLimit": "character limit",
              "validEmail": "Must be valid email"
            },
            "finish": {
              "title": "YOUR RIGHTS",
              "thankYou": "Thank you",
              "message": "Your message has been sent, we will come back to you shortly.",
              "options": "OPTIONS"
            }
          },
          "de": {
            "main": {
              "title": "Our use of cookies",
              "context": "We use cookies to help our site work, to understand how it is used, and to tailor the adverts presented on our site. By clicking “Accept” below, you agree to us doing so. You can read more in our cookie notice. Or, if you do not agree, you can click Manage below to access other choices.",
              "agree": "ACCEPT",
              "options": "MANAGE"
            },
            "options": {
              "title": "Our use of cookies",
              "context": "Here you can control cookies, including those for advertising, using the buttons below. Even if you turn off the advertising related cookies, you will still see adverts on our site, because they help us to fund it. However, those adverts will simply be less relevant to to you. You can learn more about cookies in our Cookie Notice on the site.",
              "ourListTitle": "Purposes of data collection",
              "partnersListTitle": "Our partners",
              "noPurposes": "No purposes selected!",
              "footerContext": "The technology to maintain this privacy management relies on cookie identifiers. Removing or resetting your browser cookies will reset these preferences. This process does not turn off all Internet advertising, only advertisements that are customised to your likely interests based upon previous web browsing activity.\n",
              "yourRights": "",
              "agree": " I have finished – close this window"
            },
            "rights": {
              "title": "Your rights",
              "contactUs": "Contact us",
              "fields": {
                "request": {
                  "title": "Your request",
                  "list": {
                    "correct": "Right to access and correct personal data",
                    "restrict": "Right to restrict use of personal data",
                    "portability": "Right to data portability",
                    "erasure": "Right to erasure"
                  }
                },
                "email": "Your Email",
                "comments": "Your Comments",
                "checkbox": "The process of exercising these rights requires that we set trackers, or otherwise request for proof of identity that facilitate the request. This data will not be stored any longer than necessary to fulfil your request."
              },
              "yourRights": "YOUR RIGHTS",
              "options": "OPTIONS",
              "send": "SEND",
              "mandatory": "Mandatory field",
              "characterLimit": "character limit",
              "validEmail": "Must be valid email"
            },
            "finish": {
              "title": "YOUR RIGHTS",
              "thankYou": "Thank you",
              "message": "Your message has been sent, we will come back to you shortly.",
              "options": "OPTIONS"
            }
          },
        },
        "rightsContactEmail": "dataprotection@reachplc.com",
        "layout": {
          "permissions": "banner"
        },
        "theme":{
            "primary_button":"#008e82",
            "primary_button_text":"#ffffff",
            "secondary_button":"#ffffff",
            "secondary_button_text":"#008e82",
            "component_colours":"#008e82",
            "error_colours":"#008e82",
            "message_colours_text":"#008e82",
            "reopen_button":"#008e82"},
        "reopenButton":{"enabled":false,"horizontalPosition":"right","verticalPosition":"bottom","countdownMs":20000},
        "storeConsentGlobally":false
      }
    }
  };
}





