document.addEventListener("DOMContentLoaded", () => {
  const accordionHeaders = document.querySelectorAll(".accordion-item-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      console.log("Header clicked");
      console.log(header);
      console.log(header.nextElementSibling);
      const content = header.nextElementSibling;
      const isActive = content.classList.contains("active");
      if (isActive) {
        content.classList.remove("active");
      } else {
        closeActiveContent();
        content.classList.add("active");
      }
    });
  });

  const closeActiveContent = () => {
    const activeContents = document.querySelectorAll(
      ".accordion-item-content.active"
    );
    activeContents.forEach((content) => {
      content.classList.remove("active");
    });
  };
});
