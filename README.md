# 📱 Mobile Automation Framework (Appium + WebDriverIO + BrowserStack)

## CI Status

| Workflow | Status |
|----------|--------|
| Android Emulator Tests | ![Android Mobile Browser Tests](https://github.com/SN5024/mobile-appium/actions/workflows/android-browser-tests.yml/badge.svg) |
| BrowserStack Android Tests | ![BrowserStack Android Tests](https://github.com/SN5024/mobile-appium/actions/workflows/browserstack-tests.yml/badge.svg) |


A **robust, scalable, and modern automation framework** for **native mobile applications** on both **iOS and Android**. This framework provides **end-to-end test automation** with maintainable and reusable patterns, making it ideal for production-level mobile testing.

> ⚡ **Note:** Currently supports **native app testing**. Mobile web browser testing will be added in the future.

---

## ✨ Features

- **Cross-platform:** Works on **Android** and **iOS** simulators/emulators  
- **Native App Testing:** End-to-end automation for native apps  
- **Scalable Architecture:** Modular page-object structure for easy expansion  
- **Stable and Robust:** Designed to minimize flaky tests  
- **Modern Tooling:** Built with **WebdriverIO** and **Appium**, using **Mocha** and **Chai**  
- **Parallel Execution:** Supports parallel tests for faster CI/CD  
- **Detailed Reporting:** Structured logs and optional reporting integrations  

---

## 📱 Platforms

- **Android:** Supports emulators and real devices using **UiAutomator2**  
- **iOS:** Supports simulators and real devices using **XCUITest**  

---

## ⚙️ Full Setup and Usage

```bash
# 1. Clone the repository
git clone <YOUR_REPO_URL> mobile-appium
cd mobile-appium

# 2. Install project dependencies
npm install

# 3. Install Appium globally (if not already installed)
npm install -g appium

# 4. Add your test apps
Android: place .apk files in app/android/
iOS: place .app bundles in app/ios/
⚡ For large iOS apps, use Git LFS to track .app directories

# 5. Running Tests
# Run Android tests
npx wdio config/wdio.conf.js

# Run iOS tests
npx wdio config/wdio.ios.conf.js

```
---

## 🗂️ Project Structure
```
mobile-appium/
├── app/
│   ├── android/
│   │   └── ApiDemos-debug.apk            # Android test app
│   └── ios/
│       └── TestApp.app                   # iOS test app
├── config/
│   ├── wdio.conf.js                      # WebdriverIO config for Android
│   └── wdio.ios.conf.js                  # WebdriverIO config for iOS
├── test/
│   └── native/
│       ├── android/
│       │   ├── pageobjects/              # Android Page Object classes
│       │   └── specs/                    # Android E2E test specs
│       └── ios/
│           ├── pageobjects/              # iOS Page Object classes
│           └── specs/                    # iOS E2E test specs
├── package.json                          # Node.js dependencies and scripts
├── package-lock.json                     # Lockfile for Node.js dependencies
└── README.md                             # Project documentation

```
---

## 🤝 Contributing
- Create a feature branch for each enhancement
- Follow the existing page-object pattern for new tests
- Run all tests locally before raising a PR

---

## ⚙️ Tech Stack
- Node.js
- WebdriverIO
- Appium
- Mocha & Chai
- Git & Git LFS

---

## 🚀 Mobile Automation & CI Integration

This project demonstrates a production-style mobile browser automation setup using **WebdriverIO + Appium**, executed against a real Android Emulator and fully integrated with **GitHub Actions CI**.

--- 

### 🔹 Key Highlights
- Android mobile browser automation using **Chrome on Emulator**
- Appium-driven execution with **automatic ChromeDriver management**
- GitHub Actions pipeline with:
  - Emulator provisioning
  - Hardware acceleration (KVM)
  - Dependency & driver caching
  - Appium server lifecycle handling
- Optimized for **CI stability and performance**
- Designed with **real-world QA practices**

---

### 🔹 Test Coverage
- Mobile web login flow validation
- Real-device browser interactions
- CI-safe synchronization and reporting

---

### 🔹 CI Workflow
On every push or pull request:
1. Android Emulator boots on GitHub Actions
2. Appium server starts with secure driver auto-download
3. Mobile browser tests execute via WebdriverIO
4. Logs are captured and uploaded for debugging

---

## 🎯 Learning Outcomes

By using this framework, you will learn how to:

- Build a **scalable mobile automation framework** for real-world use  
- Automate **native Android and iOS applications** using Appium  
- Configure and run tests with **UiAutomator2** and **XCUITest**  
- Apply the **Page Object Model** for maintainable test design  
- Run tests on **emulators, simulators, and real devices**  
- Follow **best practices** for stable, production-ready mobile automation  

---

## 📌 Additional Notes
- Tests are written to be platform-agnostic where possible, with separate configurations for Android and iOS
- The framework is CI/CD ready and can be integrated with GitHub Actions, Jenkins, or CircleCI