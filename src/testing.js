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
    body: formData,
  }
);

console.log(await response.json());
