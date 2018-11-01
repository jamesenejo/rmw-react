const mockReduxState = {
  user: {
    id: 8,
    firstname: "James",
    lastname: "Enejo",
    email: "spec.en.james@gmail.com",
    gender: "Male",
    phone: "08064341284",
    city: "Gbagada",
    state: "Lagos",
    imgUrl: "http://res.cloudinary.com/enking/image/upload/v1540954688/nbzgydp7un7orndr9knm.jpg",
    completeness: "100%"
  },
  userDash: {
    runningOffer: {
      acceptedRequests: 0,
      availableSeats: 5,
      createdAt: "2018-10-31T00:00:00.000Z",
      departureDate: "2018-11-04T00:00:00.000Z",
      departureTime: "16:44:00",
      fromCity: "Frankini",
      fromState: "Lagos",
      id: 1,
      pickupLocation: "Seme",
      price: "4500",
      seats: 5,
      status: "Running",
      toCity: "Haniki",
      toState: "Lagosa",
      updatedAt: "2018-10-31T00:00:00.000Z",
      userId: 8
    },
    runningJoinRequest: 'You currently do not have any join ride request.'
  },
  message: {
    messages: [],
    isSuccess: false
  },
  rides: [
    {
      id: 1,
      fromState: "Lagos",
      fromCity: "Frankini",
      toState: "Lagosa",
      toCity: "Haniki",
      price: "4500",
      seats: 5,
      acceptedRequests: 0,
      availableSeats: 5,
      departureDate: "2018-11-04T00:00:00.000Z",
      departureTime: "16:44:00",
      pickupLocation: "Seme",
      status: "Running",
      userId: 8,
      createdAt: "2018-10-31T00:00:00.000Z",
      updatedAt: "2018-10-31T00:00:00.000Z"
    },
    {
      id: 2,
      fromState: "lagos",
      fromCity: "isolo",
      toState: "lagos",
      toCity: "illupeju",
      price: "0",
      seats: 4,
      acceptedRequests: 0,
      availableSeats: 4,
      departureDate: "2018-11-01T00:00:00.000Z",
      departureTime: "10:00:00",
      pickupLocation: "Jakande estate",
      status: "Running",
      userId: 15,
      createdAt: "2018-10-31T00:00:00.000Z",
      updatedAt: "2018-10-31T00:00:00.000Z"
    }
  ],
  isLoggedIn: false,
  ride: {
    rideDetails: {
      id: 1,
      fromState: "Lagos",
      fromCity: "Frankini",
      toState: "Lagosa",
      toCity: "Haniki",
      price: "4500",
      seats: 5,
      acceptedRequests: 0,
      availableSeats: 5,
      departureDate: "2018-11-04T00:00:00.000Z",
      departureTime: "16:44:00",
      pickupLocation: "Seme",
      status: "Running",
      userId: 8,
      createdAt: "2018-10-31T00:00:00.000Z",
      updatedAt: "2018-10-31T00:00:00.000Z"
    },
    driver: {
      id: 8,
      firstname: "James",
      lastname: "Enejo"
    }
  }
};

export default mockReduxState;
