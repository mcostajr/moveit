import Adapters, { TypeORMUserModel } from "next-auth/adapters";

export default class User extends (<any>Adapters.TypeORM.Models.User.model) {
  constructor(
    name: string,
    email: string,
    image: string,
    emailVerified: Date | undefined
  ) {
    super(name, email, image, emailVerified);
    if (!this.level) this.level = 1;
    if (!this.challengesCompleted) this.challengesCompleted = 0;
    if (!this.currentExperience) this.currentExperience = 0;
  }
}

type UserSchema = {
  name: string;
  target: typeof TypeORMUserModel;
  columns: {
    level?: {
      type: "int64";
      nullable: boolean;
    };
    challengesCompleted?: {
      type: "int64";
      nullable: boolean;
    };
    currentExperience?: {
      type: "int64";
      nullable: boolean;
    };
    name?: any;
    email?: any;
    image?: any;
    emailVerified?: any;
  };
};

export const UserSchema: UserSchema  = {
  name: "User",
  target: User,
  columns: {
    ...Adapters.TypeORM.Models.User.schema.columns,
    level: {
      type: "int64",
      nullable: true,
    },
    challengesCompleted: {
      type: "int64",
      nullable: true,
    },
    currentExperience: {
      type: "int64",
      nullable: true,
    }
  },
};