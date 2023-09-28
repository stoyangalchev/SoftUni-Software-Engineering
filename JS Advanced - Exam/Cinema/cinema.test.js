
let expect = require('chai').expect;
const cinema = require('./cinema');

describe('Cinema Tests', () => {
    describe('Show Movies Tests', () => {
        it('Should return correct message if array length is zero', () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });
        it('Should return correct result if array length is bigger than zero', () => {
            expect(cinema.showMovies(['The Tommorow War', 'Joker', 'The Dark Knight'])).to.equal('The Tommorow War, Joker, The Dark Knight');
        });
    });

    describe('Ticket Price Tests', () => {
        it('Should return error if projection type is invalid', () => {
            expect(() => cinema.ticketPrice('Invalid Type')).to.throw('Invalid projection type.');
        });

        it('Should return correct premiere price', () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
        });

        it('Should return correct normal price', () => {
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
        });

        it('Should return correct discount price', () => {
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
        });
    });

    describe('Swipe Seats In Hall Tests', () => {

        it('Should return unsuccessfull change when input is not correct', () => {
            // If first is not an integer
            expect(cinema.swapSeatsInHall('15', 12)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall([], 12)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(false, 12)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(15.56, 12)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(undefined, 12)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(null, 12)).to.equal('Unsuccessful change of seats in the hall.');

            // If second is not an integer
            expect(cinema.swapSeatsInHall(12, '14')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(12, [])).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(12, false)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(12, 15.56)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(12, undefined)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(12, null)).to.equal('Unsuccessful change of seats in the hall.');

            // If first is less or equal to zero
            expect(cinema.swapSeatsInHall(0, 12)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-16, 12)).to.equal('Unsuccessful change of seats in the hall.');

            // If second is less or equal to zero
            expect(cinema.swapSeatsInHall(12, 0)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(16, -12)).to.equal('Unsuccessful change of seats in the hall.');

            // If first is bigger than 20
            expect(cinema.swapSeatsInHall(21, 12)).to.equal('Unsuccessful change of seats in the hall.');

            // If second is bigger than 20
            expect(cinema.swapSeatsInHall(12, 21)).to.equal('Unsuccessful change of seats in the hall.');

            // If the two arguments are equal
            expect(cinema.swapSeatsInHall(12, 12)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(true, true)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(undefined, undefined)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(null, null)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('Should return successfull change when input is correct', () => {
            expect(cinema.swapSeatsInHall(12, 17)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(20, 17)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(12, 20)).to.equal('Successful change of seats in the hall.');
        });
    });
})