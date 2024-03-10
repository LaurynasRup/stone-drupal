(function (Drupal) {
  Drupal.behaviors.tableGallery = {
    attach: function (context, settings) {
      const productTable = document.querySelector(".types-table");

      if (productTable && !productTable.classList.contains("js-table-active")) {
        const imageCells = productTable.querySelectorAll(
          ".type-image-cell span"
        );

        for (const cell of imageCells) {
          const imageUrl = cell.innerText.trim();

          console.log(imageUrl.trim());
          const wrapper = document.createElement("div");
          wrapper.classList.add("image-cell-wrapper");

          const anchor = document.createElement("a");
          anchor.href = imageUrl;

          const img = document.createElement("img");
          img.setAttribute("src", imageUrl);

          anchor.appendChild(img);
          wrapper.appendChild(anchor);
          cell.parentElement.appendChild(wrapper);

          lightGallery(wrapper, {
            thumbnail: true,
          });
        }

        productTable.classList.add("js-table-active");
      }
    },
  };
})(window.Drupal);
