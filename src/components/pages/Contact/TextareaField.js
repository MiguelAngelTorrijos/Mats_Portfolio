export const TextareaField = (props) => {
  const { handleChange, label, name } = props;
  return (
    <div className='page-contact__form__fields__filed'>
      <label className='page-contact__form__fields__filed__label' htmlFor={name}> {label}</label>
      <textarea className='page-contact__form__fields__filed__textarea' onChange={handleChange} name={name} rows={4}></textarea>
    </div>
  );
};
