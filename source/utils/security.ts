import argon2 from "argon2";

export const createPasswordHash = async (password: string) => {
  return await argon2.hash(password);
};

export const checkPasswordHash = async (passwordHash: string, password: string) => {
  return await argon2.verify(passwordHash, password);
};
