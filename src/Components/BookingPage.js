//Page that contains form to book a reservation at the restaurant
import React from "react";
import BookForm from "../Components/BookForm";


function BookingPage() {
    return (
        <div className="booking-page">
        <div className="booking-page-container">
            <div className="booking-page-header">
            <h1>Book a reservation</h1>
            </div>
            <div className="booking-page-body">
            <BookForm />
            </div>
        </div>
        </div>
    );
    }
    
    export default BookingPage;


