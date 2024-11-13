import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './FormStyles.css';

const schema = yup.object().shape({
  randomWord: yup.string().required("Random word is required").min(5, "Random word must be at least 5 characters"),
  launchDate: yup.date().typeError("Enter a valid date").required("Launch date is required"),
  endDate: yup.date().typeError("Enter a valid date").required("Funding end date is required"),
});

const Form3 = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <h2>Project Media & Timeline</h2>
      <div className="form-group">
        <label>Random word</label>
        <input {...register("randomWord")} />
        {errors.randomWord && <p className="error">{errors.randomWord.message}</p>}
      </div>
      <div className="form-group">
        <label>Launch Date</label>
        <input type="date" {...register("launchDate")} />
        {errors.launchDate && <p className="error">{errors.launchDate.message}</p>}
      </div>
      <div className="form-group">
        <label>Funding End Date</label>
        <input type="date" {...register("endDate")} />
        {errors.endDate && <p className="error">{errors.endDate.message}</p>}
      </div>
      <button type="submit" className="form-button">Submit All</button>
    </form>
  );
};

export default Form3;