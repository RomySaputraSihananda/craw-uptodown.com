class Uptodown {
  constructor() {
    this.#start();
  }

  async #start() {
    return new Promise((res) => {
      setTimeout(() => {
        res();
        console.log("ok");
      }, 1000);
    });
  }
}

// https://super-sus.id.uptodown.com/mng/v2/app/1035948/comments/unixtime?offset=20
// https://telegram-google-play-version.id.uptodown.com/mng/v2/app/1298037/comments/unixtime?offset=10

const formData = new FormData();
formData.set("page", 2);

const response = await fetch(
  "https://www.uptodown.com/android/apps/fcat/dev-onboard",
  {
    method: "POST",
    headers: {
      Accept: "application/json, application/xml, text/plain, text/html, *.*",
      "Content-Type": "multipart/form-data",
    },
  }
);

console.log(await response.json());
