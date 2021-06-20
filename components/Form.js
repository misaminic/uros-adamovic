import Link from 'next/link';
import classes from './Form.module.css';

const Form = () => {
  return (
    <>
      <section className={classes.links}>
        <Link href="/">HOME</Link>
        <Link href="/about">ABOUT</Link>
      </section>
      <div className={classes.formContainer}>
        <form
          action="https://formspree.io/f/xgervrnv"
          method="POST"
          className={classes.contactForm}
        >
          <h3>Get In Touch</h3>
          <article className={classes.formGroup}>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="name"
                required
                autoComplete="off"
                className={classes.formControl}
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                required
                autoComplete="off"
                className={classes.formControl}
              />
            </div>
            <div>
              <textarea
                id="textarea"
                name="textarea"
                placeholder="message"
                required
                autoComplete="off"
                className={classes.formControl}
              ></textarea>
            </div>
          </article>

          <button type="submit" className={classes.submitBtn}>
            submit
          </button>
        </form>
      </div>
      <footer className={classes.footer}>
        <h4>
          copyright&copy;{new Date().getFullYear()}
          &nbsp; all rights reserved
        </h4>
      </footer>
    </>
  );
};

export default Form;
