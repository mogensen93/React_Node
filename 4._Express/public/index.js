console.log("Javascript init");

$.get("cars", ({response}) => {
    console.log(response);
    response.map((car) => {
        const carCard = `
        <div id="car-${car.id}" class="car-card"> 
            <button  onClick=deleteCar(${car.id})> Delete </button>
            <p>${car.name ? car.name:"No Name"} </p>
            <p>${car.id ? car.id:"No ID"} </p>
        </div>
    `;
    $('#car-wrapper').append(carCard);
    });

});

function deleteCar(carId) {
    console.log(carId);
    $.ajax({
      url: "cars/" + carId,
      type: "DELETE"
    }).done(({ response }) => {
        $('#car-' + carId).remove();
        console.log(response);
    });
}



