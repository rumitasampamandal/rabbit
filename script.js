const book = document.getElementById("book");

// Cover Page
const cover = document.createElement("div");
cover.classList.add("page");

cover.innerHTML = `
<img src="Cover page.png" alt="Cover">
`;

book.appendChild(cover);

// All Pages
for (let i = 1; i <= 30; i++) {

    const page = document.createElement("div");

    page.classList.add("page");

    page.innerHTML = `
    <img src="rabb/${i}.png" alt="Page ${i}">
    `;

    book.appendChild(page);
}

// Flipbook
const pageFlip = new St.PageFlip(
    document.getElementById("book"),
    {
        width: 700,
        height: 1000,

        minWidth: 500,
        maxWidth: 1200,

        minHeight: 700,
        maxHeight: 1600,

        size: "stretch",

        showCover: true,

        usePortrait: false,

        autoSize: true,

        drawShadow: true,

        maxShadowOpacity: 0.7,

        mobileScrollSupport: true,

        flippingTime: 1000
    }
);

pageFlip.loadFromHTML(
    document.querySelectorAll(".page")
);
