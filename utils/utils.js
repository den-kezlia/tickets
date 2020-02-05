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
    },

    covertPlaceName(name) {
        let convertedName = name.split('-');
        let place;
        switch (convertedName[0]) {
            case 'p':
                place = 'Партер,'
                break
            case 'l1':
                place = 'Ложа Бенуар 1,'
                break
            case 'l2':
                place = 'Ложа Бенуар 2,'
                break
            case 'l3':
                place = 'Ложа Бенуар 3,'
                break
            case 'l4':
                place = 'Ложа Бенуар 4,'
                break
            case 'l5':
                place = 'Ложа Бенуар 5,'
                break
            case 'l6':
                place = 'Ложа Бенуар 6,'
                break
            case 'l7':
                place = 'Ложа Бенуар 7,'
                break
            case 'l8':
                place = 'Ложа Бенуар 8,'
                break
            case 'l9':
                place = 'Ложа Бенуар 9,'
                break
            case 'l10':
                place = 'Ложа Бенуар 10,'
                break
            case 'lb1':
                place = 'Ложа Бельетаж 1,'
                break
            case 'lb2':
                place = 'Ложа Бельетаж 2,'
                break
            case 'lb3':
                place = 'Ложа Бельетаж 3,'
                break
            case 'lb4':
                place = 'Ложа Бельетаж 4,'
                break
            case 'lb5':
                place = 'Ложа Бельетаж 5,'
                break
            case 'lb6':
                place = 'Ложа Бельетаж 6,'
                break
            case 'lb7':
                place = 'Ложа Бельетаж 7,'
                break
            case 'lb8':
                place = 'Ложа Бельетаж 8,'
                break
            case 'lb9':
                place = 'Ложа Бельетаж 9,'
                break
            case 'lb10':
                place = 'Ложа Бельетаж 10,'
                break
            case 'lb11':
                place = 'Ложа Бельетаж 11,'
                break
            case 'b1':
                place = 'Балкон 1,'
                break
            case 'b2':
                place = 'Балкон 2,'
                break
            case 'b3':
                place = 'Балкон 3,'
                break
            case 'b4':
                place = 'Балкон 4,'
                break
            case 'b5':
                place = 'Балкон 5,'
                break
            case 'b6':
                place = 'Балкон 6,'
                break
            case 'b7':
                place = 'Балкон 7,'
                break
            case 'b8':
                place = 'Балкон 8,'
                break
            case 'b9':
                place = 'Балкон 9,'
                break
            default:
                break
        }
        convertedName = place + ' Ряд ' + convertedName[1] + ', Место ' + convertedName[2]

        return convertedName
    }
}