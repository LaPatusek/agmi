import { ArrowCircleDown2, Call, Location } from 'iconsax-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Map from '../components/Elements/Map/Map.tsx';
import useInput from '../components/Hooks/useInput.tsx';
import styles from './Kontakt.module.css';

const Kontakt: React.FC = () => {
  const [formIsSent, setFormIsSent] = useState<boolean>(false);
  const iconSize = 36;

  const {
    value: enteredName,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    hasError: nameHasError,
    reset: nameReset,
  } = useInput({
    validateValue: (value: string) => value.trim() !== '',
  });

  const {
    value: enteredSurname,
    isValid: surnameIsValid,
    valueChangeHandler: surnameChangeHandler,
    inputBlurHandler: surnameBlurHandler,
    hasError: surnameHasError,
    reset: surnameReset,
  } = useInput({
    validateValue: (value: string) => value.trim() !== '',
  });

  const {
    value: enteredPhone,
    isValid: phoneIsValid,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    hasError: phoneHasError,
    reset: phoneReset,
  } = useInput({
    validateValue: (value: string) => value.trim() !== '',
  });

  const {
    value: enteredTopic,
    isValid: topicIsValid,
    valueChangeHandler: topicChangeHandler,
    inputBlurHandler: topicBlurHandler,
    hasError: topicHasError,
    reset: topicReset,
  } = useInput({
    validateValue: (value: string) => value.trim() !== '',
  });

  const {
    value: enteredMail,
    isValid: mailIsValid,
    valueChangeHandler: mailChangeHandler,
    inputBlurHandler: mailBlurHandler,
    hasError: mailHasError,
    reset: mailReset,
  } = useInput({
    validateValue: (value: string) => value.trim().includes('@'),
  });

  const {
    value: enteredMessage,
    isValid: messageIsValid,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    hasError: messageHasError,
    reset: messageReset,
  } = useInput({
    validateValue: (value: string) => value.trim() !== '',
  });

  let formIsValid = false;

  if (
    messageIsValid &&
    topicIsValid &&
    nameIsValid &&
    mailIsValid &&
    surnameIsValid &&
    phoneIsValid
  ) {
    formIsValid = true;
  }

  const formHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    setFormIsSent(true);
    nameReset();
    surnameReset();
    topicReset();
    mailReset();
    phoneReset();
    messageReset();
  };

  const resetHandler = (e: React.FormEvent) => {
    e.preventDefault();

    nameReset();
    surnameReset();
    topicReset();
    mailReset();
    phoneReset();
    messageReset();
  };

  return (
    <div className={styles.kontakt}>
      <div className={`${styles['kontakt-header']} center`}>
        <h1>Skontaktuj się z nami</h1>
        <h2>A my zaplanujemy i zrealizujemy Twoje zamówienie</h2>
      </div>

      <div className={`${styles.dane} grid`}>
        <div className={`${styles.container} center`}>
          <Call variant='Bold' size={iconSize} />
          <p>17 783 43 31</p>
          <p>535 198 620</p>
        </div>

        <div className={`${styles.container} center`}>
          <Location variant='Bold' size={iconSize} />
          <p>
            AGMI Transport <br /> ul hr. Wandy Tarnowskiej 1 <br /> 35-322
            Rzeszów
          </p>

          <Link to='/kontakt#mapa' className={`${styles['map-button']} grid`}>
            <span>Zobacz na mapie</span>
            <ArrowCircleDown2 size={'28'} variant='Bold' />
          </Link>
        </div>

        <div className={`${styles.container} center ${styles.mails}`}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={iconSize}
            height={iconSize}
            fill='#1a1a1a'
            viewBox='0 0 512 512'
          >
            <path d='M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z' />
          </svg>
          <p>
            BIURO OBSŁUGI KLIENTA
            <a href='mailto:karolina@agmitransport.pl'>
              karolina@agmitransport.pl
            </a>
          </p>
          <p>
            TRANSPORT I SPEDYCJA <br />
            <a href='mailto:transport@agmitransport.pl'>
              transport@agmitransport.pl
            </a>
            <a href='mailto:andrzej@agmitransport.pl'>
              andrzej@agmitransport.pl
            </a>
          </p>
          <p>
            KSIĘGOWOŚĆ
            <a href='mailto:sylwia@agmitranport.pl'>sylwia@agmitranport.pl</a>
          </p>
        </div>
      </div>

      <div className={`${styles['form-wrap']} grid`}>
        <h3>Wyślij do nas wiadomość</h3>
        <form onSubmit={formHandler}>
          <div className={`${styles['rows-wrap']} grid`}>
            <div className={`${styles['first-row']} grid`}>
              <label
                htmlFor='name'
                className={nameHasError ? styles.error : ''}
              >
                Imie*
              </label>
              <input
                type='text'
                id='name'
                name='user_name'
                placeholder='Twoje Imię'
                autoComplete='false'
                value={enteredName}
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
              />

              <label
                htmlFor='email'
                className={mailHasError ? styles.error : ''}
              >
                Adres email*
              </label>
              <input
                type='email'
                id='email'
                name='user_email'
                placeholder='Twój Adres Email'
                value={enteredMail}
                autoComplete='false'
                onChange={mailChangeHandler}
                onBlur={mailBlurHandler}
              />
            </div>

            <div className={`${styles['second-row']} grid`}>
              <label
                htmlFor='surname'
                className={surnameHasError ? styles.error : ''}
              >
                Nazwisko*
              </label>
              <input
                type='text'
                id='surname'
                name='user_surname'
                placeholder='Twoje Nazwisko'
                autoComplete='false'
                value={enteredSurname}
                onChange={surnameChangeHandler}
                onBlur={surnameBlurHandler}
              />
              <label
                htmlFor='phone'
                className={phoneHasError ? styles.error : ''}
              >
                Telefon*
              </label>
              <input
                type='number'
                id='phone'
                autoComplete='false'
                placeholder='Twój Numer Telefonu'
                value={enteredPhone}
                onChange={phoneChangeHandler}
                onBlur={phoneBlurHandler}
              />
            </div>
          </div>

          <div className={`${styles['full-size']} grid`}>
            <label
              htmlFor='topic'
              className={topicHasError ? styles.error : ''}
            >
              Temat*
            </label>
            <input
              type='text'
              id='topic'
              name='user_topic'
              placeholder='Temat'
              autoComplete='false'
              value={enteredTopic}
              onChange={topicChangeHandler}
              onBlur={topicBlurHandler}
            />
          </div>

          <div className={`${styles['full-size']} grid`}>
            <label
              htmlFor='wiadomosc'
              className={messageHasError ? styles.error : ''}
            >
              Wiadomość*
            </label>
            <textarea
              id='wiadomosc'
              name='message'
              rows={10}
              value={enteredMessage}
              placeholder='Twoja Wiadomość...'
              onChange={messageChangeHandler}
              onBlur={messageBlurHandler}
            />
          </div>
          <p className={styles.required}>*Wymagane</p>

          <div className={`${styles['buttons-wrap']} center`}>
            <button onClick={resetHandler}>Reset</button>
            <button type='submit' value={'Send'}>
              Wyślij
            </button>
          </div>
          {formIsSent && (
            <div className={styles['mess-after-form']}>
              <p>Dziękujemy za kontakt!</p>
            </div>
          )}
        </form>
      </div>
      <Map />
    </div>
  );
};

export default Kontakt;
