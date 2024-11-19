import { IUser } from "../interfaces/user.interface";
import { User } from "../schemas/user.schema";

export class UserRepository {
    createUser = async (userDetails: IUser): Promise<IUser> => {
        return await new User(userDetails).save();
    }

    findAllUsers = async (): Promise<IUser[]> => {
        return await User.find();
    }

    findUserByEmail = async (email: string): Promise<IUser | null> => {
        return await User.findOne({
            email
        });
    }

    findUserById = async (id: string): Promise<IUser | null> => {
        return await User.findById(id);
    }

    updateUserById = async (id: string, userDetails: IUser): Promise<IUser | null> => {
        return await User.findByIdAndUpdate(id, userDetails, {
            new: true
        });
    }

    deleteUserById = async (id: string): Promise<IUser | null> => {
        return await User.findByIdAndDelete(id);
    }
}