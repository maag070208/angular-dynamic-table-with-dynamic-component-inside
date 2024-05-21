import { Status } from "../types/status.types";

// define the User interface
export interface User {
    name: string;
    email: string;
    phone: string;
    status: Status;
  }
  