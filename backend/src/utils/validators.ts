import { body, ValidationChain, validationResult } from "express-validator";
import { Request, Response, NextFunction} from "express";
// create function to use this validator in the routes

export const user_validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    for (let validation of validations) {
      const result = await validation.run(req);
      if (!result.isEmpty()){
        break;
      }
    }
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    else{
    return res.status(400).send({message: "Validation failed", errors: errors.array()});
    }
  };
};

// Validator for user login
export const login_validator = [body("email").trim().isEmail().withMessage("Email is required"),
            body("password").trim().isLength({min:6}).withMessage("Pasword must be at least 6 characters long")
          ]

// Validators for user registration
export const signup_validator = [body("name").notEmpty().withMessage("Name is required"),
  ...login_validator
          ]