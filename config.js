import * as dotenv from 'dotenv'
dotenv.config()

const config = {
  PORT: process.env.PORT,
  dev_url: process.env.DEV_URL,
  prod_url: process.env.PROD_URL,
  env: process.argv[2],
  emailAdmin: process.env.EMAIL_ADMIN,
  google : {
    user: process.env.EMAIL_ADMIN,
    pass: process.env.GMAILPASSWORD
  }
}

export default config;