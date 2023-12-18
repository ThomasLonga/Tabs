const tabs = document.querySelectorAll("li");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabContents.forEach((content) => {
      content.style.display = "none";
    });

    const tabId = tab.id.replace("-tab", "");
    const contentToShow = document.getElementById(tabId + "-content");
    contentToShow.style.display = "block";
  });
});
