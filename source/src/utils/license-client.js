/* global globalThis */

const packageJson = require("../../package.json");

const LICENSE_PRODUCT_ID = packageJson.productId;

const PRODUCT_DISPLAY_NAME = {
  "STARUML.V2": "StarUML V2",
  "STARUML.V3": "StarUML V3",
  "STARUML.V4": "StarUML V4",
  "STARUML.V5": "StarUML V5",
  "STARUML.V6": "StarUML V6",
  "STARUML.V7": "StarUML V7",
};

const EDITION_DISPLAY_NAME = {
  STD: "Standard",
  PRO: "Professional",
  CO: "Commercial",
  ED: "Educational",
  PS: "Personal",
  CR: "Classroom",
  CAMPUS: "Campus",
  SITE: "Site",
};

function buildActivatedStatus() {
  return {
    activated: true,
    name: "Licensed",
    product: LICENSE_PRODUCT_ID,
    edition: "PRO",
    productDisplayName: getProductDisplayName(LICENSE_PRODUCT_ID, "PRO"),
    deviceId: "*",
    licenseKey: null,
    activationCode: null,
    trial: false,
    trialDaysLeft: 0,
  };
}

let licenseStatus = buildActivatedStatus();

async function getDeviceId() {
  return "*";
}

async function localValidate() {
  licenseStatus = buildActivatedStatus();
  return {
    success: true,
    message: "License valid",
  };
}

async function remoteValidate() {
  licenseStatus = buildActivatedStatus();
  return {
    success: true,
    message: "License valid",
  };
}

async function localActivate() {
  licenseStatus = buildActivatedStatus();
}

async function remoteActivate() {
  licenseStatus = buildActivatedStatus();
  return {
    success: true,
    message: "License valid",
  };
}

async function localDeactivate() {
  licenseStatus = buildActivatedStatus();
}

async function remoteDeactivate() {
  licenseStatus = buildActivatedStatus();
  return {
    success: true,
    message: "License valid",
  };
}

function getLicenseStatus() {
  return licenseStatus;
}

function getProductDisplayName(product, edition) {
  let displayName = PRODUCT_DISPLAY_NAME[product] || "StarUML";
  if (edition) {
    displayName += " " + (EDITION_DISPLAY_NAME[edition] || edition);
  }
  return displayName;
}

module.exports = {
  getDeviceId,
  localValidate,
  remoteValidate,
  localActivate,
  remoteActivate,
  localDeactivate,
  remoteDeactivate,
  getLicenseStatus,
};
