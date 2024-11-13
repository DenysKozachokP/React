import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './FormStyles.css';

const schema = yup.object().shape({
  title: yup.string().required("Title is required").min(5, "Title must be at least 5 characters"),
  subtitle: yup.string().required("Subtitle is required").min(5, "Subtitle must be at least 5 characters"),
  category: yup.string().required("Category is required"),
});

const Form1 = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <h2>Project Details</h2>
      <div className="form-group">
        <label>Title</label>
        <input {...register("title")} />
        {errors.title && <p className="error">{errors.title.message}</p>}
      </div>
      <div className="form-group">
        <label>Subtitle</label>
        <input {...register("subtitle")} />
        {errors.subtitle && <p className="error">{errors.subtitle.message}</p>}
      </div>
      <div className="form-group">
        <label>Category</label>
        <input {...register("category")} />
        {errors.category && <p className="error">{errors.category.message}</p>}
      </div>
      <button type="submit" className="form-button">Next</button>
    </form>
  );
};

export default Form1;



                