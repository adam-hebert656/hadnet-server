require('dotenv').config();
const Sequelize = require('sequelize');
const express = require('express');
const app = express();

const {
    MASTER_USERNAME,
    MASTER_PASSWORD,
    DB_NAME,
    DB_PORT,
    DB_ENDPOINT,
} = process.env;

const sequelize = new Sequelize(
    DB_NAME,
    MASTER_USERNAME,
    MASTER_PASSWORD,
    {
    host: DB_ENDPOINT,
    dialect: 'postgres',
    port: DB_PORT,
    },
);

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const Model = Sequelize.Model;

  //*******///////TABLES///////*******//

  //User table stores all data for Auth
  class User extends Model {};
  User.init({
      email:{
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      } ,
      display_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      account_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      google_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      url_image: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
  },{
    sequelize,
    modelName: 'user',
    underscored: true,
  });

  //USER
  //email: string
  //display_name: string
  //account_type (business/user): string
  //google_id: integer
  //url_image: string


  //BusinessType holds our business types
  class BusinessType extends Model {};
  BusinessType.init({
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'businesstype',
    underscored: true,
  });

  //BUSINESSTYPE
  //type: string


  // ListingType holds our listings for the communtiy listing board
  class ListingType extends Model {};
  ListingType.init({
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'listingtype',
    underscored: true,
  });

  //LISTINGTYPE
  //type: string

  class Business extends Model {};
  Business.init({
    name:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone_number: Sequelize.INTEGER,
    email: Sequelize.STRING,
    url_homepage: Sequelize.STRING,
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    latitude: Sequelize.FLOAT,
    longitude: Sequelize.FLOAT,
    average_rating: Sequelize.INTEGER,
    legal_business_name: Sequelize.STRING,
  },{
    sequelize,
    modelName: 'business',
    underscored: true,
  });

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

  //CommunityListing holds all of community listings
  class CommunityListing extends Model {};
  CommunityListing.init({
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    body: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image_url: Sequelize.STRING,
    date_expire: Sequelize.DATEONLY,
  },{
    sequelize,
    modelName: 'communitylisting',
    underscored: true,
  });
  
  //COMMUNITY_LISTING
  //id_user --> foreign key
  //id_business --> foreign key
  //title: string
  //body: string
  //image_url: string
  //id_listing_type: --> foreign key
  //date_expire: date


  //Review will hold all review data
  class Review extends Model {};
  Review.init({
    text:{
      type: Sequelize.STRING,
      allowNull: false,
    }
  },{
    sequelize,
    modelName: 'review',
    underscored: true,
  });

  //REVIEW
  //id_user --> foreign key
  //id_business --foreign key
  //text: string
  //rating_number: integer

  //Image will hold all image urls
  class Image extends Model {}
  Image.init({
    url:{
      type: Sequelize.STRING,
      allowNull: false,
    },
  },{
    sequelize,
    modelName: 'image',
    underscored: true,
  });

  //IMAGE
  //url: string
  //id_business --> foreign key


  // Business foreign keys
  BusinessType.hasOne(Business, {foreignKey: 'id_business_type'});
  Image.hasOne(Business, {
    foreignKey: 'id_featured_image',
    constraints: false,
  });
  User.hasOne(Business, {foreignKey: 'id_user'});

  //CommunityListing foreign keys
  User.hasOne(CommunityListing, {foreignKey: 'id_user'});
  Business.hasOne(CommunityListing, {foreignKey: 'id_business'});
  ListingType.hasOne(CommunityListing, {foreignKey: 'id_listing_type'});

  //Review foreign keys
  User.hasOne(Review, {foreignKey: 'id_user'});
  Business.hasOne(Review, {foreignKey: 'id_business'});

  //Image foreign keys
  Business.hasOne(Image, {foreignKey: 'id_business'})
  sequelize.sync();




  //*******///////HELPER FUNCTIONS///////*******//


module.exports = {
  db: sequelize,
  User,
  BusinessType,
  ListingType,
  Business,
  CommunityListing,
  Review,
  Image,
}