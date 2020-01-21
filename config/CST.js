module.exports = {
    MAX_SEATS_TO_BOOK: 2,
    TIMER: 300,
    STATUS: {
        BOOKED: 'booked',
        FREE: 'free',
        SOLD: 'sold',
        HOLD: 'hold'
    },
    PANZOOM: {
        maxScale: 10,
        excludeClass: 'seat',
        contain: 'outside',
        animate: true
    },
    ERROR: {
        ERROR: 'error',
        TO_MANY_TICKETS: 'toManyTickets',
        SOLD_SEATS: 'soldSeats'
    }
}