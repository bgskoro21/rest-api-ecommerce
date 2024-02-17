import Joi from "joi";

const createAdminValidation = Joi.object({
  username: Joi.string().max(100).required(),
  name: Joi.string().max(100).required(),
  password: Joi.string().max(100).required(),
  password_confirmation: Joi.string().required().valid(Joi.ref("password")).messages({
    "any.only": "Password confirmation does not match",
  }),
});

const loginAdminValidation = Joi.object({
  username: Joi.string().max(100).required(),
  password: Joi.string().max(100).required(),
});

const getAdminValidation = Joi.string().max(100).required();

const updateValidation = Joi.object({
  username: Joi.string().max(100).required(),
  name: Joi.string().max(100).required(),
  password: Joi.string().max(100).required(),
});

const updateProfileValidation = Joi.object({
  name: Joi.string().max(100).optional(),
  profile_picture: Joi.string().max(255).optional(),
});

export { createAdminValidation, loginAdminValidation, getAdminValidation, updateValidation, updateProfileValidation };
