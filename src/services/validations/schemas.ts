import joi from 'joi';

export const loginSchema = joi.object({
  username: joi.string().required(),
  password: joi.string().required(),
});

export const productSchema = joi.object({
  name: joi.string().min(3).required(),
  amount: joi.string().min(3).required(),
});

export const userSchema = joi.object({
  username: joi.string().min(3).required(),
  vocation: joi.string().min(3).required(),
  level: joi.number().min(1).required(),
  password: joi.string().min(8).required(),
});