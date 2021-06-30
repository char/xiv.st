import jstz from 'jstz';

const main = () => {
  const tz = jstz.determine();
  const offset = tz.timezoneOffset();

  document.querySelector("#tz").textContent = tz.name();

  const timeRegex = /(\d?\d).?(\d\d)/;
  const time = window.location.pathname.match(timeRegex);
  console.log(time);
  if (time) {
    const date = new Date();
    date.setUTCSeconds(0);
    date.setUTCMilliseconds(0);

    date.setUTCHours(time[1]);
    date.setUTCMinutes(time[2]);

    document.querySelector("#server-time").textContent = date.toISOString().match(/(\d\d:\d\d):\d\d/)[1];
    document.querySelector("#local-time").textContent = date.toLocaleString([], { hour: "2-digit", minute: "2-digit" });
  } else {

  }
};

if (document.readyState === "complete") {
  main();
} else {
  document.addEventListener("DOMContentLoaded", () => main());
}
