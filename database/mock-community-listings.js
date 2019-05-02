  //COMMUNITY_LISTING
  //id_user --> foreign key
  //id_business --> foreign key
  //title: string
  //body: string
  //image_url: string
  //id_listing_type: --> foreign key
  //date_expire: date

module.exports.communityListings = [
    {
        id: 1,
        id_user: 7,
        id_business: 2,
        title: "Garage Sale",
        body: "bring the whole family, 2-5 pm sunday april 23rd, super fun byob!!", 
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsIC-OBh8BYZOdhuXd0dSlA_fx_CdwwYe--527W6KCtdsV2B8Zhw",
        id_listing_type: 1,
        date_expire: '2019-06-14'
    },
    {
        id: 2,
        id_user: 2,
        id_business: 1,
        title: "Discounted Fruit on sale NOW",
        body: "we don't want food to go to waste so we're selling all our oranges for super cheap, please swing by!!!", 
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW0uFynLURfX_rZdeeoCKJy3f91ZOSKmHTL5JQb0eZV5xqSmks",
        id_listing_type: 2,
        date_expire: '2019-06-14'
    },
    // { ///got lazy 
    //     title: "",
    //     body: "", 
    //     image_url: "",
    //     listing_type: "political gathering",
    // },
    // {
    //     title: "",
    //     body: "", 
    //     image_url: "",
    //     listing_type: "barbecue",
    // },
    // {
    //     title: "",
    //     body: "", 
    //     image_url: "",
    //     listing_type: "fundraiser",
    // },
    {
        id: 3,
        id_user: 7,
        id_business: 4,
        title: "Some Random Festival Might Be Fun Come Find Out!",
        body: "We bring to you a very cool festival join in, it's gonna be a great time!!!", 
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREqnZeYpN5yQN-7rNu-VnEGCGm8RUZJ7eU7HiZ482lPBVFRtrI",
        id_listing_type: 3,
        date_expire: '2019-06-14'
    },
    {
        id: 4,
        id_user: 8,
        id_business: 3,
        title: "Movie Showing: 'US' -- Come join us!",
        body: "watching the movie US, bring the friends and family but maybe don't bring the children!!! ITS SCARY but come join us for real super fun bring popcorn and some icees", 
        image_url: "https://amc-theatres-res.cloudinary.com/amc-cdn/production/2/movies/54000/53983/PosterDynamic/67723.jpg",
        id_listing_type: 3,
        date_expire: '2019-06-14'
    },
]