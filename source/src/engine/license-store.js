const { EventEmitter } = require("events");

class LicenseStore extends EventEmitter {
  constructor() {
    super();
    this.licenseStatus = {
      activated: true,
      name: "Licensed",
      product: "STARUML.V7",
      edition: "PRO",
      productDisplayName: "StarUML V7 Professional",
      deviceId: "*",
      licenseKey: null,
      activationCode: null,
      trial: false,
      trialDaysLeft: 0,
    };
  }

  async fetch() {
    this.emit("statusChanged", this.licenseStatus);
    return this.licenseStatus;
  }

  async getDeviceId() {
    return "*";
  }

  async activate() {
    await this.fetch();
  }

  async deactivate() {
    await this.fetch();
  }

  async validate() {
    await this.fetch();
    return { success: true, message: "License valid" };
  }

  getLicenseStatus() {
    return this.licenseStatus;
  }

  async checkTrialMode() {
    // no-op
  }

  async htmlReady() {
    await this.fetch();
  }
}

module.exports = LicenseStore;
