const mailer = require('nodemailer')

function sendBookingTicket(passenger_name, bookingcode, passenger_email, trip_from, trip_to, trip_date, trip_time, seat_no, no_of_customers, trip_fare){

let transporter = mailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASS, // generated ethereal password
    },
  });


let message = `
<h1><span style="font-size:14px"><strong>Dear ${passenger_name},</strong></span></h1>

<p>Thank you for choosing <strong>Croc-City Shuttle</strong> for your trip. We are committed to providing safe and comfortable travels at an affordable rate across Nigeria.</p>

<p>Find below your booking details/ticket:</p>

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse:collapse; width:500px">
	<caption>
	<p><span style="font-size:14px"><strong>Booking Ticket</strong></span></p>
	</caption>
	<tbody>
		<tr>
			<td style="width:266px"><strong>Booking Code</strong></td>
			<td style="width:220px">${bookingcode}</td>
		</tr>
		<tr>
			<td style="width:266px"><strong>Departure Terminal</strong></td>
			<td style="width:220px">${trip_from}</td>
		</tr>
		<tr>
			<td style="width:266px"><strong>Destination</strong></td>
			<td style="width:220px">${trip_to}</td>
		</tr>
		<tr>
			<td style="width:266px"><strong>Departure Date/Time</strong></td>
			<td style="width:220px">${trip_date} / ${trip_time}</td>
		</tr>
		<tr>
			<td style="width:266px"><strong>Seat Number</strong></td>
			<td style="width:220px">${seat_no}</td>
		</tr>
		<tr>
			<td style="width:266px"><strong>Shuttle Fare</strong></td>
			<td style="width:220px"><del style="text-decoration-style:double;">N</del>${trip_fare/no_of_customers}</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>

<p><strong>=========== TERMS & CONDITIONS =========================</strong></p>

<ol>
	<li>You are required to produce a copy of this ticket (softcopy/hardcopy) or your booking code at the terminal on the day of travel. Failure to produce this ticket or your booking code means you will not be allowed to proceed on the trip as this serves as official proof of booking.</li>
	<li>All passengers are required to be at the terminal and checked in at least 15 minutes before departure time.</li>
	<li>All passengers are entitled to a piece of luggage weighing a maximum of 15kg at no cost. Additional luggage will attract a cost or will be required to be sent via courier service.</li>
	<li>Drinking Alcohol or Smoking is prohibited while the trip is on. We take the comfort and safety of our passengers as a top priority.</li>
	<li>The seating arrangement is strictly according to the seat chosen while booking.</li>
	<li><strong>This ticket is valid for seven (7) days from the date of booking and failure to travel on the due date without due notice will attract a fee of two thousand five hundred naira #2,500</strong></li>
	<li><strong>This ticket is NOT transferrable and NON-REFUNDABLE</strong></li>
</ol>
`
transporter.sendMail({
    from: '"Croc-City Shuttle" <nenisoftsolutions@gmail.com>', // sender address
    to: passenger_email, // list of receivers
    subject: `Shuttle Ticket - ${passenger_name}`, // Subject line
    html: message, // html body
  });
}
module.exports = sendBookingTicket
