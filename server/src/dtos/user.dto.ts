import { IUser } from "../models/interfaces/user.interface";
import { UserResponseDto } from "../types/user.types";
export const mapToUserResponse = (user: IUser): UserResponseDto => {
  return {
      id: user._id,
      userName: user.userName,
      email: user.email,
      phone: user.phone,
      isEmailVerified: user.isEmailVerified,
      twoFactorAuth: user.twoFA,
      isDeleted: user.isDeleted,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
  };
}
  