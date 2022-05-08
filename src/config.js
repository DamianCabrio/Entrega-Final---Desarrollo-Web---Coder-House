import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 8080,
  URL_BASE: process.env.URL_BASE,
  JWT_SECRET: process.env.JWT_SECRET,
  mongodb: {
    cnxStr: process.env.MONGODB_URL,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    },
  },
};
