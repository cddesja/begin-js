// CustomerBooking type
function CustomerBooking(bookingId, customerName, film, showDate)
{
	this.customerName = customerName;
	this.bookingId = bookingId;
	this.showDate = showDate;
	this.film = film; 
}

CustomerBooking.prototype.getCustomerName = function()
{
	return this.customerName;
}	

CustomerBooking.prototype.setCustomerName = function(customerName)
{
	this.customerName = customerName;
}

CustomerBooking.prototype.getShowDate = function()
{
	return this.showDate;
}

CustomerBooking.prototype.setShowDate = function(showDate)
{
	this.showDate = showDate;
}

CustomerBooking.prototype.getFilm = function()
{
	return this.film;
}

CustomerBooking.prototype.setFilm = function(film)
{
	this.film = film;
}

CustomerBooking.prototype.getBookingID = function()
{
	return this.bookingId;
}

CustomerBooking.prototype.setBookingID = function(bookingId)
{
	this.bookingId = bookingId;
}

// Cinema type
function Cinema()
{
	this.bookings = new Array();
}

Cinema.prototype.addBooking = function(bookingId, customerName, film, showDate)
{
	this.bookings[bookingId] = new CustomerBooking(bookingId, customerName, film, showDate);
}

Cinema.prototype.getBookingsTable = function()
{
	var booking;
	var bookingsTableHTML = "<table border = 1>";

	for(booking in this.bookings)
	{
		bookingsTableHTML += "<tr><td>";
		bookingsTableHTML += this.bookings[booking].getBookingID();
		bookingsTableHTML += "</td>";

		bookingsTableHTML += "<td>";
		bookingsTableHTML += this.bookings[booking].getCustomerName();
		bookingsTableHTML += "</td>";

		bookingsTableHTML += "<td>";
		bookingsTableHTML += this.bookings[booking].getFilm();
		bookingsTableHTML += "</td>";

		bookingsTableHTML += "<td>";
		bookingsTableHTML += this.bookings[booking].getShowDate();
		bookingsTableHTML += "</td>";
	}

	bookingsTableHTML += "</table>";
	return bookingsTableHTML;
}

var londonOdeon = new Cinema();
londonOdeon.addBooking(342, "Arnold Palmer", "Toy Story", "15 July 2009 20:15");
londonOdeon.addBooking(335, "Louise Anderson", "The Shawshank Redemption", "27 July 2009 11:25");
londonOdeon.addBooking(566, "Catherine Hughes", "Never Say Never", "27 July 2009 17:55");
londonOdeon.addBooking(324, "Beci Smith", "Shrek", "29 July 2009 20:15");

document.write(londonOdeon.getBookingsTable());