import { Request, Response } from "express";
import userServices from "src/services/userServices";

const listUser = async (req: Request, res: Response) => {
  try {
    const data =  userServices.listUser

    res.status(200).json({
      message: "Success",
      payload: data,
    });
  } catch (err: any) {
    res.status(500).json({
      message: "Failed to get user",
      error: err.message || err.toString(),
    });
  }
};


const userController = {
  listUser
};

export default userController;
