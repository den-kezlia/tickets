export default {
    filterSeat(seats, id) {
        let seat;

        for (let key in seats) {
            const element = seats[key]

            if (element.id === id) {
                seat = element
            }
        }

        return seat
    }
}