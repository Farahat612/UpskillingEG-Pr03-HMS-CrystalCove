
export const userNameValidation = {
  required: 'Email is required',
  maxLength: {
    value: 8,
    message: 'Username should not exceed 8 characters',
  },
}

export const phoneNumberValidation = {
  required: 'phoneNumber is required',
  pattern: {
    value: /^[0-9]{11}$/,
    message: 'Invalid Phone Number',
  },
}

export const emailValidation = {
  required: 'Email is required',
  pattern: {
    value: /^[A-Z0-9._%=-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Invalid E-mail !',
  },
}

export const newPasswordValidation = {
  required: 'password is required',
  pattern: {
    value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    message:
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
  },
}


export const passwordValidation = {
  required: 'Password is required',
}