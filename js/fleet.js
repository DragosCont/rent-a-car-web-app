window.Fleet = {

    API_URL:"http://localhost:8089",


    getCars: function () {
        $.ajax({
            url: Fleet.API_URL + "/cars",
            method:"GET"
        }).done(function (response) {
            Fleet.displayFleet(response.content);
        });
    },

    getCarHtml: function (car) {
        return`
                    <div class="col-md-4 col-sm-4">
                         <div class="courses-thumb courses-thumb-secondary">
                              <div class="courses-top">
                                   <div class="courses-image">
                                        <img src="${car.imageUrl}" class="img-responsive" alt="">
                                   </div>
                                   <div class="courses-date">
                                        <span title="passengers"><i class="fa fa-user"></i> ${car.seats}</span>
                                        <span title="luggages"><i class="fa fa-briefcase"></i> ${car.luggageNumber}</span>
                                        <span title="doors"><i class="fa fa-sign-out"></i> ${car.doorNumber}</span>
                                        <span title="transmission"><i class="fa fa-cog"></i> ${car.transmission}</span>
                                   </div>
                              </div>

                              <div class="courses-detail">
                                   <h3><a href="fleet.html">${car.category}</a></h3>
                                   <h4>${car.brand}</h4>
                                   <h5>Car id = ${car.id} <h5>
                                   <p class="lead"><small>from</small> <strong>$${car.price}</strong> <small>per day</small></p>
                              </div>

                              <div class="courses-info">
                                   <button type="button" data-toggle="modal" data-target=".bs-example-modal" class="section-btn btn btn-primary btn-block" data-car-id = "${car.id}">Book Now</button>
                              </div>
                         </div>
                    </div>
        `

    },

    displayFleet: function (cars) {
        let carsHtml = '';

        cars.forEach(car => carsHtml += Fleet.getCarHtml(car));

        $('.section-background .container .row').html(carsHtml);
    }
};

Fleet.getCars();