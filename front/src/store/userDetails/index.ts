import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "../../types/types";

export type UserStore = {
  userDetails: User;
  setUser: (user: User) => void;
  resetUser: () => void;
};

export const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      userDetails: {} as User,
      setUser: (userDetails: User) => {
        set(() => ({ userDetails }));
      },
      resetUser: () => {
        set(() => ({
          userDetails: {} as User,
        }));
      },
    }),
    {
      name: "@store/user",
    }
  )
);
