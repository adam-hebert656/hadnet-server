  //REVIEW
  //id_user --> foreign key
  //id_business --foreign key
  //text: string
  //rating_number: integer

module.exports.reviews = [
    {
        id: 1,
        id_user: 7,
        id_business: 1,
        text: "very cool services, would come back/10",
        rating_number: 5,
    },
    {
        id: 2,
        id_user: 2,
        id_business: 2,
        text: "the pie was great, but I came to the auto body shop for car repairs",
        rating_number: 4,
    },
    {
        id: 3,
        id_user: 3,
        id_business: 3,
        text: "I'm not so sure I enjoy life anymore",
        rating_number: 3,
    },
    {
        id: 4,
        id_user: 3,
        id_business: 4,
        text: "Fantastic waffles. Spectacular.",
        rating_number: 4,
    },
    {
        id: 5,
        id_user: 4,
        id_business: 5,
        text: "I expected pie but was fed tires. Still tasted okay though",
        rating_number: 4,
    },
    {
        id: 6,
        id_user: 2,
        id_business: 4,
        text: "I'm just here for the free samples so worth it mmm ",
        rating_number: 5,
    },
    {
        id: 7,
        id_user: 1,
        business_id: 3,
        text: "Sometimes I sniff bike seats for gratification. I tell myself I'll stop sometimes but it's difficult. ya know?",
        rating_number: 4,
    },
]