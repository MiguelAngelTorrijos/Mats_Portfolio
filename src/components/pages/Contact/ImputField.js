
export const ImputField = (props) => {
  const { handleChange, label, name, type, value } = props;

  return (
    <div className='page-contact__form__fields__filed'>
      <label className='page-contact__form__fields__filed__label' htmlFor={name}>{label}</label>
      <input className='page-contact__form__fields__filed__input' type={type} onChange={handleChange} name={name} value={value} required />
    </div>
  );
};
