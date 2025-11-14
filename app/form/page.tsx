import styles from "./Form.module.css";

export default function Form(){
  return (
  <>
    <div className={styles.container}>
        <div className={styles.formDetails}>
          <form className={styles.form}>
             <h4>CHECKOUT</h4>
            <p className={styles.paragraph}>BILLING DETAILS</p>
            <div className={styles.billDetails}>
              <div>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`${styles.name} ${styles.formInput}`}
                  placeholder="Alexei Ward"
                  required
                />
              </div>
              <div>
               <label htmlFor="email" className={styles.label}>Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`${styles.email} ${styles.formInput}`}
                  placeholder="alexei@mail.com"
                  required
                />
              </div>
              <div>
               <label htmlFor="phone" className={styles.label}>Phone Number</label>
                <input
                  type="tel"
                  id="number"
                  name="phone"
                  className={`${styles.phone} ${styles.formInput}`}
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>
            </div>

            <p className={styles.paragraph}>SHIPPING INFO</p>
            <div className={styles.shipping}>
              <div>
              <label htmlFor="address" className={styles.label}>Address</label>
              <input
                type="text"
                id="address"
                name="address"
                className={`${styles.address} ${styles.formInput}`}
                placeholder="1137 Williams Avenue"
                required
              />
              </div>
              <div>
               <label htmlFor="zip code" className={styles.label}>ZIP Code</label>
                <input
                  type="number"
                  id="zip code"
                  name="zip code"
                  className={`${styles.zipCode} ${styles.formInput}`}
                  placeholder="10001"
                  required
                />
              </div>
              <div>
               <label htmlFor="city" className={styles.label}>City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className={`${styles.city} ${styles.formInput}`}
                  placeholder="Abuja"
                  required
                />
              </div>
              <div>
               <label htmlFor="country" className={styles.label}>Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  className={`${styles.country} ${styles.formInput}`}
                  placeholder="Nigeria"
                  required
                />
              </div>
            </div>
            <div className={styles.payment}>
              <p className={styles.paragraph}>PAYMENT DETAILS</p>

               {/* E-money Option  */}
            <div className={`${styles.paymentOption} ${styles.selected}`}>
              <input
                type="radio"
                id="e-money"
                name="paymentMethod"
                value="e-money"
                defaultChecked
              />
              <label htmlFor="e-money">
                <span className={styles.optionTitle}>E-Money</span>
              </label>
            </div>

              {/* Cash on Delivery Option  */}
            <div className={styles.paymentOption}>
              <input
                type="radio"
                id="cash-on-delivery"
                name="paymentMethod"
                value="cash-on-delivery"
              />
              <label htmlFor="cash-on-delivery">
                <span className={styles.optionTitle}>Cash on Delivery</span>
              </label>
            </div>

               {/* E-money Details  */}
            <div className={styles.paymentDetails}>
              <div className={styles.inputGroup}>
                <div className={styles.inputField}>
                  <label htmlFor="eMoneyNumber">E-Money Number</label>
                  <input
                    type="text"
                    id="eMoneyNumber"
                    className={styles.formInput}
                    placeholder="238521993"
                  />
                </div>
                <div className={styles.inputField}>
                  <label htmlFor="eMoneyPIN">PIN</label>
                  <input
                    type="password"
                    id="eMoneyPIN"
                    className={styles.formInput}
                    placeholder="1234"
                  />
                </div>
              </div>
            </div>
            </div>
              
          </form>
        </div>
    </div> 
  </>
  )
}