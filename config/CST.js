module.exports = {
    MAX_SEATS_TO_BOOK: 8,
    STATUS: {
        BOOKED: 'booked',
        FREE: 'free',
        SOLD: 'sold',
        HOLD: 'hold'
    },
    PANZOOM: {
        maxScale: 2,
        //excludeClass: 'seat',
        contain: 'outside',
        animate: true
    },
    ERROR: {
        ERROR: 'error',
        TO_MANY_TICKETS: 'toManyTickets',
        DB_ERROR: 'DBError',
        SOLD_SEATS: 'soldSeats'
    }
}