import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './FormStyles.css';

const schema = yup.object().shape({
  description: yup.string().required("Description is required").min(5, "Description must be at least 5 characters"),
  shortDescription: yup.string().required("Short description is required").min(10, "Short description must be at least 10 characters"),
  goalAmount: yup.number().typeError("Goal amount must be a number").positive("Goal must be positive").required("Goal amount is required"),
});

const Form2 = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <h2>Project Description</h2>
      <div className="form-group">
        <label>Description</label>
        <textarea {...register("description")} />
        {errors.description && <p className="error">{errors.description.message}</p>}
      </div>
      <div className="form-group">
        <label>Short Description</label>
        <textarea {...register("shortDescription")} />
        {errors.shortDescription && <p className="error">{errors.shortDescription.message}</p>}
      </div>
      <div className="form-group">
        <label>Goal Amount</label>
        <input type="number" {...register("goalAmount")} />
        {errors.goalAmount && <p className="error">{errors.goalAmount.message}</p>}
      </div>
      <button type="submit" className="form-button">Next</button>
    </form>
  );
};

export default Form2;