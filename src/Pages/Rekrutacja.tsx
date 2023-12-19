import axios from 'axios';
import { TickCircle } from 'iconsax-react';
import React, { useState } from 'react';
import useInput from '../components/Hooks/useInput.tsx';
import styles from './Rekrutacja.module.css';

const Kontakt: React.FC = () => {
  const [formIsSent, setFormIsSent] = useState<boolean>(false);
  const [enteredFile, setEnteredFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<boolean>(false);

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

  const validateFile = (file: File | null) => {
    if (!file) {
      setFileError(true);
    } else {
      setFileError(false);
    }
  };

  const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(false);
    setEnteredFile(e.target.files ? e.target.files[0] : null);
  };

  const fileBlurHandler = () => {
    validateFile(enteredFile);
  };

  let formIsValid = false;

  if (
    messageIsValid &&
    nameIsValid &&
    mailIsValid &&
    surnameIsValid &&
    phoneIsValid &&
    enteredFile
  ) {
    formIsValid = true;
  }

  const formHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const temat = `od ${enteredName} ${' '} ${enteredSurname}`;
    const mailBody = `${enteredMessage} \n tel:${' '}${enteredPhone} \n${'             '} mail:${' '}${enteredMail}`;

    validateFile(enteredFile);

    if (!formIsValid) {
      return;
    }

    const formData = new FormData();
    formData.append('from', 'snwtestowy@gmail.com');
    formData.append('subject', temat);
    formData.append('html', mailBody);

    if (enteredFile !== null) {
      formData.append('attachments', enteredFile);
    }

    sendEmail(formData);
    setFormIsSent(true);
    setEnteredFile(null);
    nameReset();
    surnameReset();
    mailReset();
    phoneReset();
    messageReset();
  };

  const sendEmail = async (formData: FormData) => {
    try {
      await axios.post('http://localhost:3001/send-email', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className={styles.kontakt}>
      <div className={`${styles['kontakt-header']} center`}>
        <h1>Dołącz do naszego zespołu</h1>
      </div>

      <div className={styles['wymagania-wrap']}>
        <h2>
          KIEROWCA W TRANSPORCIE KRAJOWYM <br />
          <span>
            Codzienne powroty do domu lub wyjazdy tygodniowe weekendy w domu.
          </span>
        </h2>

        <h3>Wymagania:</h3>
        <ol>
          <li>prawo jazdy kat. C+E</li>
          <li>karta kierowcy</li>
          <li>dyspozycyjność</li>
          <li>mile widziane uprawnienia ADR</li>
          <li>
            akceptujemy również osoby bez doświadczenia po wstępnej kwalifikacji
          </li>
        </ol>

        <h3>Oferujemy:</h3>
        <ol>
          <li>stabilne warunki pracy w stale rozwijającym się firmie</li>
          <li>umowa o pracę lub kontrakt B2B</li>
          <li>atrakcyjne wynagrodzenie</li>
          <li>pakiet socjalny</li>
          <li>premie uznaniowe</li>
        </ol>

        <h2>KIEROWCA W TRANSPORCIE MIĘDZYNARODOWYM</h2>
        <h4>Wymagania:</h4>
        <ol>
          <li>doświadczenie</li>
          <li>prawo jazdy kat. C+E</li>
          <li>karta kierowcy</li>
          <li>dyspozycyjność</li>
          <li>
            akceptujemy również osoby bez doświadczenia po wstępnej kwalifikacji
          </li>
        </ol>
        <h4>Oferujemy:</h4>
        <ol>
          <li>stabilne warunki pracy w stale rozwijającym się firmie</li>
          <li>umowa o pracę lub kontrakt B2B</li>
          <li>atrakcyjne wynagrodzenie</li>
        </ol>
      </div>

      <div className={`${styles['form-wrap']} grid`}>
        <div className={`${styles['form-header']} center`}>
          <h3>Aplikuj już dziś</h3>
          <h4>
            Aplikacje zawierające CV z adnotacją „Wyrażam zgodę na przetwarzanie
            i administrowanie moimi danymi osobowymi dla potrzeb rekrutacji
            zgodnie z Ust. Z dn. 29.08.1997 r. o Ochronie danych osobowych (
            dz.U. Nr 133 poz 833)” prosimy przesyłać na adres:
          </h4>

          <p>
            AGMI Transport <br /> ul hr. Wandy Tarnowskiej 1 <br /> 35-322
            Rzeszów
          </p>
          <p>
            lub w formie elektronicznej na adres:{' '}
            <a href='mailto:rekrutacja@agmitransport.pl'>
              rekrutacja@agmitransport.pl
            </a>
            <br />
            lub wysłać za pomocą poniższego formularza:
          </p>
        </div>
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
                name='user_phone'
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
          <div className={`${styles['required-cv']} grid`}>
            <div className={styles['cv-input']}>
              <label htmlFor='CV' className={fileError ? styles.error : ''}>
                Twoje CV (Tylko PDF)*
              </label>
              <br />
              <input
                type='file'
                id='CV'
                name='file'
                accept='application/pdf'
                onChange={fileHandler}
                onBlur={fileBlurHandler}
              />
            </div>
            <p className={styles.required}>*Wymagane</p>
          </div>
          <div className={`${styles['buttons-wrap']} center`}>
            <button type='submit' value={'Send'}>
              Wyślij
            </button>
          </div>
          {formIsSent && (
            <div className={styles['mess-after-form']}>
              <TickCircle size={26} />
              <p>Dziękujemy za kontakt!</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Kontakt;
