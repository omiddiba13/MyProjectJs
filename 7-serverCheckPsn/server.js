const puppeteer = require("puppeteer-core");
const notifier = require("node-notifier");

console.log("✅ The script is running. Please wait...");
console.log("🔄 The status will be updated every minute.");


async function checkServerStatus() {
  try {
    console.log("⏳ Checking server status...");

    const browser = await puppeteer.launch({
      executablePath:
        "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    await page.goto("https://status.playstation.com/en-us/", {
      waitUntil: "domcontentloaded",
    });

    await new Promise((resolve) => setTimeout(resolve, 5000));
    await page.waitForSelector("#globalStatus");

    const status = await page.$eval("#globalStatus .status-text", (el) => {
      const spanText = el.querySelector("span.offscreen")?.textContent.trim();
      if (spanText) return spanText;
      const divText = el.querySelector("div")?.textContent.trim();
      return divText || "Unable to determine status";
    });

    console.log(`✅ Server Status: ${status}`);

    notifier.notify({
      title: "PlayStation Server Status",
      message: status,
    });

    await browser.close();
  } catch (error) {
    console.log("❌ Error: Unable to retrieve server status.");
    notifier.notify({
      title: "PlayStation Server Status",
      message: "❌ Unable to retrieve server status.",
    });
  }
}


setInterval(checkServerStatus, 60000);
