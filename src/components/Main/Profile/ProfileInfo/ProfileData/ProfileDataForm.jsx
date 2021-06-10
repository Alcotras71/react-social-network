import { Formik, Form } from 'formik';
import { createField } from '../../../../common/FormsControls/FormsControls';
import s from '../../../../common/FormsControls/FormsControls.module.css';

const ProfileDataForm = ({ handleSubmit, profile }) => {
  return (
    <Formik initialValues={profile} onSubmit={handleSubmit}>
      {({ status }) => (
        <Form>
          <li>
            <button
              style={{
                padding: '5px 20px',
                backgroundColor: 'grey',
                color: 'white',
                borderRadius: '10px',
                cursor: 'pointer',
              }}
              className={s.descrBtn}
              type={'submit'}
            >
              Save
            </button>
          </li>

          <h2
            style={{
              textTransform: 'uppercase',
              fontWeight: 700,
              color: 'yellow',
            }}
          >
            Full name :{' '}
            {createField('input', 'div', 'text', 'FullName', 'fullName', '')}
          </h2>
          <li>
            <span>Looking for a job</span> :{' '}
            {createField('input', 'div', 'checkbox', '', 'lookingForAJob', '')}
          </li>
          <li>
            <span>My professional skills</span> :{' '}
            {createField(
              'textarea',
              'div',
              '',
              'Description',
              'lookingForAJobDescription',
              ''
            )}
          </li>
          <li>
            <span>About me</span> :{' '}
            {createField('input', 'div', 'text', 'About', 'aboutMe', '')}
          </li>
          <div
            style={{
              marginTop: '30px',
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            <span style={{ textTransform: 'uppercase' }}>Contacts</span> :{' '}
            {Object.keys(profile.contacts).map((key) => {
              return (
                <li key={key} style={{ marginRight: '15px' }}>
                  <span>{key}</span> :{' '}
                  {createField(
                    'input',
                    false,
                    'text',
                    key,
                    'contacts.' + key,
                    ''
                  )}
                </li>
              );
            })}
          </div>
          {status && <div className={s.formSummaryError}>{status}</div>}
        </Form>
      )}
    </Formik>
  );
};

export default ProfileDataForm;
