 //BUSINESS
  //name: string
  //id_business_type --> foreign key
  //phone_number: integer
  //email: string
  //url_homepage: string
  //address: string
  //id_featured_image --> foreign key
  //latitude: integer
  //longitude: integer
  //id_user: integer --> foreign key
  //average_rating: integer
  //legal_business_name: string


module.exports.businesses = [
    {
        id: 1,
        name: "Autoserv",
        id_business_type: 1,
        phone_number: 5044311231,
        email: "autoserv@yahoo.com",
        url_homepage: "autoserv.com",
        address: "1800 North Broad St New Orleans",
        id_featured_image: 1,
        latitude: 29.977350,
        longitude: -90.077200,
        id_user: 1,
        average_rating: 4,
        legal_business_name: "Autoserv",
    },{
        id: 2,
        name: "John and Sons Attorneys",
        id_business_type: "2Law Office",
        phone_number: 5041424231,
        email: "johnandsons@gmail.com",
        url_homepage: "lawyerjohn.com",
        address: "4700 South Carrolton New Orleans",
        id_featured_image: 2,
        latitude: 29.955100,
        longitude: -90.121190,
        id_user: 2,
        average_rating: 4,
        legal_business_name: "John and Sons Law Offices",
    },{
        id: 3,
        name: "Beauty Hair",
        id_business_type: "3Beauty Parlor",
        phone_number: 5044323412,
        email: "beautyhair@gmail.com",
        url_homepage: "beautyhair.com",
        address: "1800 North Broad St New Orleans",
        id_featured_image: 3,
        latitude: 29.975340,
        longitude: -90.078360,
        id_user: 3,
        average_rating: 5,
        legal_business_name: "Beautyhair Inc.",
    },
    
]