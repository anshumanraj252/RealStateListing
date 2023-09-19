import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>
          Real estate website is a digital space where realtors, home sellers, and homebuyers can get in touch to make a purchase or rent contract for a real estate item.Rent, buy, sell properties without brokerage. Get end to end assistance on NoBroker. Sell Your Land Easily. Just List It on NoBroker and Sell in Just a Few Clicks. Sell Your Land Faster. Plots Listings Now Live.
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contributers</h2>
          <p>Name:Aashish</p>
          <p>Name:Anshuman Raj</p>
          <p>Name:Anurag</p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <p>Phone: +91 7300454266</p>
          <p>GitHub: anuragk-24</p>
          <p>GitHub: anshumanraj252</p>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <p>Continent: Asia</p>
          <p>Country: India</p>
          <p>Current Location: Banglore</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer