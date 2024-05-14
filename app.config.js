require("dotenv").config();
const config = {
  expo: {
    name: process.env.EXPO_PUBLIC_APP_NAME,
    slug: "find-truck-service-dev",
    scheme: [
      process.env.EXPO_PUBLIC_ANDROID_PACKAGE,
      "fb190266833399921",
      "fb618410188336369",
      `${process.env.EXPO_PUBLIC_ENVIRONMENT}.find.truck.service`,
    ],
    backgroundColor: "#CE1B3B",
    privacy: "unlisted",
    platforms: ["ios", "android"],
    version: process.env.EXPO_PUBLIC_APP_VERSION,
    orientation: "portrait",
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/splash/splash_3x.png",
      resizeMode: "cover",
    },
    updates: {
      enabled: true,
      fallbackToCacheTimeout: 0,
      url: "https://u.expo.dev/d8b039b7-7598-4c1e-b5bf-e08cf91c76c2",
    },
    androidStatusBar: {
      barStyle: "light-content",
    },
    android: {
      blockedPermissions: [
        "FOREGROUND_SERVICE_LOCATION",
        "RECORD_AUDIO",
        "SYSTEM_ALERT_WINDOW",
      ],
      googleServicesFile: `${process.env.EXPO_PROJECT_ROOT}/${process.env.EXPO_PUBLIC_GOOGLE_SERVICES_JSON_PROD}`,
      softwareKeyboardLayoutMode: "resize",
      package: process.env.EXPO_PUBLIC_ANDROID_PACKAGE,
      versionCode: 54,
      image: "./assets/icon.png",
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#CE1B3B",
      },
      config: {
        googleMaps: {
          apiKey: process.env.EXPO_PUBLIC_ANDROID_GOOGLE_MAPS_API_KEY,
        },
      },
      permissions: [
        "android.permission.READ_EXTERNAL_STORAGE",
        "android.permission.WRITE_EXTERNAL_STORAGE",
      ],
      splash: {
        backgroundColor: "#CE1B3B",
        resizeMode: "cover",
        mdpi: "./assets/splash/splash_1x.png",
        hdpi: "./assets/splash/splash_2x.png",
        xhdpi: "./assets/splash/splash_3x.png",
        xxhdpi: "./assets/splash/splash_4x.png",
      },
    },
    notification: {
      iosDisplayInForeground: true,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      usesAppleSignIn: true,
      splash: {
        backgroundColor: "#CE1B3B",
        resizeMode: "cover",
        image: "./assets/splash/splash_3x.png",
        tabletImage: "./assets/splash/splash_3x.png",
      },
      googleServicesFile: `${process.env.EXPO_PROJECT_ROOT}/${process.env.EXPO_PUBLIC_GOOGLE_SERVICES_IOS_PLIST_PROD}`,
      infoPlist: {
        LSApplicationQueriesSchemes: [
          "comgooglemaps",
          "citymapper",
          "uber",
          "lyft",
          "transit",
          "truckmap",
          "waze",
          "yandexnavi",
          "moovit",
          "yandextaxi",
          "yandexmaps",
          "kakaomap",
          "szn-mapy",
          "mapsme",
          "osmandmaps",
          "gett",
          "nmap",
          "dgis",
          "lftgpas",
        ],
        NSPhotoLibraryUsageDescription:
          "Allow $(PRODUCT_NAME) to access your photos.",
        NSPhotoLibraryAddUsageDescription:
          "Allow $(PRODUCT_NAME) to save photos.",
      },
      config: {
        googleMaps: {
          apiKey: process.env.EXPO_PUBLIC_IOS_GOOGLE_MAPS_API_KEY,
        },
        googleMapsApiKey: process.env.EXPO_PUBLIC_IOS_GOOGLE_MAPS_API_KEY,
      },
      supportsTablet: true,
      bundleIdentifier: process.env.EXPO_PUBLIC_IOS_BUNDLE_IDENTIFIER,
      buildNumber: process.env.EXPO_PUBLIC_APP_VERSION,
      privacyManifests: {
        NSPrivacyAccessedAPITypes: [
          {
            NSPrivacyAccessedAPIType:
              "NSPrivacyAccessedAPICategoryUserDefaults",
            NSPrivacyAccessedAPITypeReasons: ["CA92.1"],
          },
        ],
      },
    },
    packagerOpts: {
      config: "metro.config.js",
      sourceExts: ["js", "jsx", "svg", "svgx"],
    },
    description: "",
    extra: {
      eas: {
        projectId: "d8b039b7-7598-4c1e-b5bf-e08cf91c76c2",
      },
    },

    plugins: [
      [
        "expo-build-properties",
        {
          android: {
            buildToolsVersion: "34.0.0",
            minSdkVersion: 23,
            compileSdkVersion: 34,
            targetSdkVersion: 34,
            kotlinVersion: "1.9.20",
          },
          ios: {
            deploymentTarget: "15.0",
            useFrameworks: "static",
          },
        },
      ],
    ],
    runtimeVersion: {
      policy: "sdkVersion",
    },
    owner: "find_truck_service",
  },
};
module.exports = config;
