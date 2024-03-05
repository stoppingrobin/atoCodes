function idReformatting(id) {
    const idLength = id.length;
    if (idLength === 1) {
        id = "00" + id;
    } else if (idLength === 2) {
        id = "0" + id;
    }
    return id;
}

const firstElement = $(".finition-element").first();
const firstText = $(".finition-element").first().text();
const firstImage = $(".finition-image").attr("src");
const firstLink = $(".hidden").first().attr("href");

$(".finition-display.for-product-id").text("001");

$(".separator.low-contrast").last().css("display", "none");

$(".image-18 , .image-19").attr("src", firstImage);
$(".image-18 , .image-19").attr("srcset", firstImage);
$(".text-block-2 + .h2.finition").text(firstText);
$(".section-4-divider.full-height").attr("href", firstLink);
firstElement.addClass("is-active");

$(".produit-div-hero").on("click", function () {
    let clickedImage = "";
    let clickedText = "";
    let clickedId = "";
    let clickedLink = "";
    $(".finition-element").removeClass("is-active");
    $(this).find(".finition-element").addClass("is-active");

    clickedImage = $(this).find(".finition-image").attr("src");
    clickedText = $(this).find(".finition-element").text();
    clickedId = $(this).find(".id-produit").text();
    clickedLink = $(this).find(".hidden").attr("href");

    $(".section-4-divider.full-height").attr("href", clickedLink);
    $("div.h2").text(clickedText);

    let image = $(".image-18 , .image-19");

    image.fadeOut("fast", function () {
        console.log(clickedImage);
        image.attr("src", clickedImage);
        image.attr("srcset", clickedImage);
        image.fadeIn("fast");
    });

    $(".finition-display.for-product-id").text(idReformatting(clickedId));
});

$(".simple-text-section.with-images-animation").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".images-block.animated-images");
    let targetElement2 = $(".details-section-link.animated-images");

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin: true
        }
    });
    tl.to(targetElement, {
        y: "-220vh",
        ease: "power1.inOut"
    });

    tl.to(
        targetElement2,
        {
            opacity: 1
        },
        ">-0.38"
    );
});