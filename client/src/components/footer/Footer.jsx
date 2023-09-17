import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>
          Rent, buy, sell properties without brokerage. Get end to end assistance on NoBroker. Sell Your Land Easily. Just List It on NoBroker and Sell in Just a Few Clicks. Sell Your Land Faster. Plots Listings Now Live. Steps: Owner And Tenant Meet To Close The Deal Directly, Tenant Selects Property & Schedules An Appointment, List Your Property.
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <p>Phone: +91 7300454266</p>
          <p>YouTube: WebDevMania</p>
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