$(document).ready(function(){
    $('#hospitalCarousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        responsive:{
            0: { items: 1 },
            576: { items: 2 },
            992: { items: 3 }
        },
        navText: [
            '<span class="btn btn-light rounded-circle"><i class="fas fa-chevron-left"></i></span>',
            '<span class="btn btn-light rounded-circle"><i class="fas fa-chevron-right"></i></span>'
        ]
    });
});


let specialtyMatch = (selectedSpecialty === "Choose Specialty") || hospitalSpecialty.includes(selectedSpecialty.toLowerCase());
if (locationMatch && ratingMatch && specialtyMatch) {
    $(this).closest(".col-md-4").fadeIn();  // Show hospitals that match all filters
} else {
    $(this).closest(".col-md-4").fadeOut(); // Hide non-matching hospitals
}

